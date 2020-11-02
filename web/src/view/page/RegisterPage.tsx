import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { useContext } from 'react'
import { Login } from '../auth/Login'
import { Signup } from '../auth/Signup'
import { UserContext } from '../auth/user'
import { AppRouteParams, PlaygroundApp } from '../nav/route'
import { Page } from './Page'

interface RegisterPageProps extends RouteComponentProps, AppRouteParams { }

export function RegisterPage(props: RegisterPageProps) {
  return <Page>{getRegisterApp(props.app)}</Page>
}

function getRegisterApp(app?: PlaygroundApp) {
  const { user } = useContext(UserContext)

  if (!user) {
    return (<><Signup /> <Login /></>)
  }
  return <Login />
}
