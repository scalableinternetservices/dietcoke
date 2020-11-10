import { RouteComponentProps } from '@reach/router';
import React, { useContext, useState } from 'react';
import { UserContext } from '../auth/user';
import { AppRouteParams, PlaygroundApp } from "../nav/route";
import { Page } from './Page';

interface ResultsPageProps extends RouteComponentProps, AppRouteParams {}

export function ResultsPage(props: ResultsPageProps){
  return <Page>{getResultsApp(props.app)}</Page>
}

function getResultsApp(app?: PlaygroundApp) {
  const user = useContext(UserContext)
  const [rankedCandidates, setRankedCandidates] = useState([] as number[])

}