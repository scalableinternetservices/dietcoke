import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Login } from '../auth/Login'
import { AppRouteParams, PlaygroundApp } from '../nav/route'
import { Page } from './Page'

interface RegisterPageProps extends RouteComponentProps, AppRouteParams {}

export function RegisterPage(props: RegisterPageProps) {
  return <Page>{getRegisterApp(props.app)}</Page>
}

function getRegisterApp(app?: PlaygroundApp) {
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
