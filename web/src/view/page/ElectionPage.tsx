import { useQuery } from '@apollo/client'
import { navigate, NavigateFn, RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { CalculateWinner, Candidate, FetchCandidates } from '../../graphql/query.gen'
import { Button } from '../../style/button'
import { Input } from '../../style/input'
import { Spacer } from '../../style/spacer'
import { UserContext } from '../auth/user'
import { AppRouteParams, getPath, Route } from '../nav/route'
import { handleError } from '../toast/error'
import { fetchCandidates } from './fetchCandidates'
import { fetchWinner } from './fetchWinner'
import { increaseVoteCount } from './mutateCandidate'
import { updateUserCandidateIds } from './mutateUser'
import { Page } from './Page'

interface ElectionPageProps extends RouteComponentProps, AppRouteParams { }

export function ElectionPage(props: ElectionPageProps) {
  return <Page>{getElectionApp(props.navigate!)}</Page>
}

function getElectionApp(navgiate: NavigateFn) {
  const [userQuery, setUserQuery] = useState('')
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [congratulate, setCongratulate] = useState(false)

  const { loading, data } = useQuery<FetchCandidates>(fetchCandidates)

  const candidateWinnerFetch = useQuery<CalculateWinner>(fetchWinner)

  const [rankedCandidates, setRankedCandidates] = useState([] as number[])
  const user = useContext(UserContext)

  const congratulateModal = (
    <Modal show={showConfirmDialog} onHide={() => setShowConfirmDialog(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Congratulations!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>You participated in democracy :)</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => { navigate("../../" + Route.HOME) }}> Return Home </Button>
      </Modal.Footer>
    </Modal>
  )

  if (user && user.user) {
    function doVoteForCandidate(candidate: Candidate) {
      const id = candidate.id
      const candidateRank = rankedCandidates.indexOf(id)
      if (candidateRank == -1) {
        setRankedCandidates(rankedCandidates.concat(id))
      } else {
        const newRanks = rankedCandidates.slice()
        newRanks.splice(candidateRank, 1)
        setRankedCandidates(newRanks)
      }
    }

    async function submit() {
      if (user) {
        increaseVoteCount(rankedCandidates[0], 1).catch(handleError)
        updateUserCandidateIds(rankedCandidates)
        setCongratulate(true)
        candidateWinnerFetch.refetch()
      }
    }

    // Get rank for printing.
    function getRank(candidateID: number) {
      const candidateRank = rankedCandidates.indexOf(candidateID)
      if (candidateRank == -1) {
        return 'Vote'
      } else {
        return candidateRank + 1
      }
    }

    if (loading) {
      return <div>loading...</div>
    }
    if (!data || data.candidates.length === 0) {
      return <div>no candidates</div>
    }

    if (!!user.hasVoted()) {
      return (
        <div className="mw6">
          { congratulate ? congratulateModal : <></>}
          <header>
            <b>You already voted<br></br>View results</b>
          </header>
          <p>Search for a candidate...</p>
          <Input $onChange={setUserQuery} />
          <Spacer $h4 />
          {data.candidates
            .filter(candidate => candidate.name.toLowerCase().includes(userQuery.toLowerCase()))
            .sort((a, b) => b.voteCount - a.voteCount)
            .map((candidate, i) => (
              <div key={i} className="pa3 br2 mb2 bg-black-10 flex items-center">
                <Spacer $w4 />
                {candidate.name} · {candidate.voteCount}
              </div>
            ))}
          <Spacer $h4 />
          { rankedCandidates.length > 0 ? (<Button onClick={() => { setShowConfirmDialog(true) }}>Submit</Button>) : (<></>)}

        </div>
      )
    } else {
      return (
        <div className="mw6">
          { congratulate ? congratulateModal : (
            <Modal show={showConfirmDialog} onHide={() => setShowConfirmDialog(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Your candidates</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>You ranked the candidates as follows:</p>
                <ol>
                  {rankedCandidates.map((id) => (
                    <li key={id} style={{ marginLeft: "10px" }}> {data!.candidates.filter((candidate) => candidate.id == id)[0].name} </li>
                  ))}

                </ol>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={() => setShowConfirmDialog(false)}> Close</Button>
                <Button onClick={submit}> Confirm Ranking</Button>
              </Modal.Footer>
            </Modal>)}

          <header>
            <b>Rank Candidates in order of preference</b>
          </header>
          <p>Search for a candidate...</p>
          <Input $onChange={setUserQuery} />
          <Spacer $h4 />
          {data.candidates
            .filter(candidate => candidate.name.toLowerCase().includes(userQuery.toLowerCase()))
            .sort((a, b) => b.voteCount - a.voteCount)
            .map((candidate, i) => (
              <div key={i} className="pa3 br2 mb2 bg-black-10 flex items-center">
                <Button onClick={() => doVoteForCandidate(candidate)}>{getRank(candidate.id)}</Button>
                <Spacer $w4 />
                {candidate.name} · {candidate.voteCount}
              </div>
            ))}
          <Spacer $h4 />
          { rankedCandidates.length > 0 ? (<Button onClick={() => { setShowConfirmDialog(true) }}>Submit</Button>) : (<></>)}

        </div>
      )
    }


  } else {
    return <div> Please <a href={getPath(Route.REGISTER)}>Register or Login</a></div>
  }
}
