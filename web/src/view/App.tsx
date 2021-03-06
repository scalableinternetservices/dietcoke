import { ApolloProvider, useQuery } from '@apollo/client'
import { Redirect, Router } from '@reach/router'
import * as React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider as StyletronProvider } from 'styletron-react'
import { appContext } from '../../../common/src/context'
import { getApolloClient } from '../graphql/apolloClient'
import { FetchUserContext } from '../graphql/query.gen'
import { style } from '../style/styled'
import { fetchUser } from './auth/fetchUser'
import { UserContext, UserCtx } from './auth/user'
import { Route } from './nav/route'
import { ElectionPage } from './page/ElectionPage'
import { HomePage } from './page/HomePage'
import { LecturesPage } from './page/LecturesPage'
import { ProjectsPage } from './page/ProjectsPage'
import { RegisterPage } from './page/RegisterPage'
import { ResultsPage } from './page/ResultsPage'

const Styletron = require('styletron-engine-monolithic')

export function init() {
  const renderFn = appContext().serverRendered ? hydrate : render
  const engine = new Styletron.Client({
    hydrate: document.getElementsByClassName('_styletron_hydrate_'),
  })

  renderFn(
    <ApolloProvider client={getApolloClient()}>
      <StyletronProvider value={engine}>
        <App />
      </StyletronProvider>
    </ApolloProvider>,
    document.getElementById('app')
  )
}

export function App() {
  const { loading, data, refetch } = useQuery<FetchUserContext>(fetchUser, { pollInterval: 1000 })
  if (loading || data == null) {
    return null
  }

  return (
    <UserContext.Provider value={new UserCtx(data.self)}>
      <AppBody userRefetch={refetch} />
    </UserContext.Provider>
  )
}

export function AppBody(props: any) {
  return (
    <>
      <Router className={bodyClass}>
        <Redirect noThrow from="app" to="index" />
        <Redirect noThrow from="app/playground" to="surveys" />
        <HomePage path={Route.HOME} />
        <LecturesPage path={Route.LECTURES} />
        <ProjectsPage path={Route.PROJECTS} />
        <ElectionPage path={Route.ELECTION} userRefetch={props.userRefetch} />
        <RegisterPage path={Route.REGISTER} />
        <ResultsPage path={Route.RESULTS} />
      </Router>
      <Footer>
        <FooterText>© 2020 John Rothfels</FooterText>
      </Footer>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
    </>
  )
}

const bodyClass = 'flex flex-column items-center mh2 mh3-ns mh5-l pt6 min-vh-100 sans-serif'

const Footer = style('footer', 'fixed flex items-center bottom-0 w-100')

const FooterText = style('small', 'mid-gray avenir', { margin: 'auto', opacity: '0.2' })
