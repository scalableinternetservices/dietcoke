import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Login } from '../auth/Login'
import { AppRouteParams, PlaygroundApp } from '../nav/route'
import { Page } from './Page'

interface ElectionPageProps extends RouteComponentProps, AppRouteParams {}

export function ElectionPage(props: ElectionPageProps) {
    return <Page>{getElectionApp(props.app)}</Page>
}

function getElectionApp(app?: PlaygroundApp) {
    if (!app) {
      return <div>choose an app</div>
    }
    switch (app) {
      case PlaygroundApp.LOGIN:
        return <Login />
      default:
        throw new Error('no app found')
    }
  }
  