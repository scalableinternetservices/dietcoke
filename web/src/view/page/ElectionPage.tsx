import { useQuery } from '@apollo/client'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { useState } from 'react'
import { FetchCandidates } from '../../graphql/query.gen'
import { Button } from '../../style/button'
import { Input } from '../../style/input'
import { Spacer } from '../../style/spacer'
import { AppRouteParams, PlaygroundApp } from '../nav/route'
import { fetchCandidates } from './fetchCandidates'
import { Page } from './Page'


interface ElectionPageProps extends RouteComponentProps, AppRouteParams {}

export function ElectionPage(props: ElectionPageProps) {
    return <Page>{getElectionApp(props.app)}</Page>
}

function getElectionApp(app?: PlaygroundApp) {
  const [userQuery, setUserQuery] = useState('')
  const { loading, data } = useQuery<FetchCandidates>(fetchCandidates)


  function doVoteForCandidate(name: string) {
    alert("Voted for: " + name)
  }

  if (loading) {
    return <div>loading...</div>
  }
  if (!data || data.candidates.length === 0) {
    return <div>no candidates</div>
  }

  return (
    <div className="mw6">
      <Input $onChange={setUserQuery} />
      <Spacer $h4 />
      {data.candidates
        .filter(candidate => candidate.name.toLowerCase().includes(userQuery.toLowerCase()))
        .sort((a, b) => b.voteCount - a.voteCount)
        .map((candidate, i) => (
          <div key={i} className="pa3 br2 mb2 bg-black-10 flex items-center">
            <Button onClick={() => doVoteForCandidate(candidate.name)}>🍬</Button>
            <Spacer $w4 />
            {candidate.name} · {candidate.voteCount}
          </div>
        ))}
    </div>
  )
  }
