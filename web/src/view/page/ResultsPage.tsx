import { useQuery } from '@apollo/client';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { useContext, useState } from 'react';
import { CalculateWinner, FetchCandidates } from '../../graphql/query.gen';
import { Spacer } from '../../style/spacer';
import { UserContext } from '../auth/user';
import { AppRouteParams, getPath, PlaygroundApp, Route } from "../nav/route";
import { fetchCandidates } from './fetchCandidates';
import { fetchWinner } from './fetchWinner';
import { Page } from './Page';

interface ResultsPageProps extends RouteComponentProps, AppRouteParams { }

export function ResultsPage(props: ResultsPageProps) {
  return <Page>{getResultsApp(props.app)}</Page>
}

function getResultsApp(app?: PlaygroundApp) {
  const user = useContext(UserContext)
  const [userQuery] = useState('')
  const { data } = useQuery<FetchCandidates>(fetchCandidates)
  const candidateWinnerFetch = useQuery<CalculateWinner>(fetchWinner, { pollInterval: 1000 })


  if (user && user.user) {
    if (!data || data.candidates.length === 0) {
      return <div>no candidates</div>
    }
    if (!candidateWinnerFetch.data?.calculateWinner) {
      return <div>Problem Fetching Winner</div>
    }

    if (!user.hasVoted()) {
      return <div> You must vote before seeing results. </div>
    }

    return (
      <div>
        <header>
          {candidateWinnerFetch.data?.calculateWinner.name} is the current leader.
        </header>
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
      </div>
    )
  } else {
    return <div> Please <a href={getPath(Route.REGISTER)}>Register or Login</a></div>
  }
}