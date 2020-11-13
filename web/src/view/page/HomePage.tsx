import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { ColorName, Colors } from '../../../../common/src/colors'
import { H1, H2, H3 } from '../../style/header'
import { Spacer } from '../../style/spacer'
import { style } from '../../style/styled'
import { BodyText } from '../../style/text'
import { Link } from '../nav/Link'
import { AppRouteParams } from '../nav/route'
import { Page } from './Page'

interface HomePageProps extends RouteComponentProps, AppRouteParams { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomePage(props: HomePageProps) {
  return (
    <Page>
      <Hero>
        <H1>Electify</H1>
        <H3>Modernizing Democracy</H3>
        <H3>slugname: dietcoke</H3>
      </Hero>
      <Content>
        <LContent>
          <Section>
            <H2>About Electify</H2>
            <Spacer $h4 />
            <BodyText>
              This website shows how ranked voting could be executed online in an ideal world.
            </BodyText>
            <Spacer $h4 />
            <BodyText>
              Of course, having a secure election online is
              very difficult. However, this website serves as a proof of concept about how ranked voting could help eliminate
              the two party system and could even replace the way we vote today.
            </BodyText>
          </Section>
          <Section>
            <H2>Getting Started</H2>
            <Spacer $h4 />
            <BodyText>Please login or register in order to vote. Then visit the election page.</BodyText>
          </Section>
        </LContent>
        <RContent>
          <Section>
            <H2>Team Information</H2>
            <Spacer $h4 />
            <BodyText>
              <table>
                <tbody>
                  <tr>
                    <TD>🧔🏻</TD>
                    <TD>Jonathan Garcia-Rovetta</TD>
                  </tr>
                  <tr>
                    <TD>🙆🏻‍♂️</TD>
                    <TD>Steven Lara</TD>
                  </tr>
                  <tr>
                    <TD>👁️👄👁️</TD>
                    <TD>Jordan Tyner</TD>
                  </tr>
                  <tr>
                    <TD>👨🏻</TD>
                    <TD>Simón Zeiger</TD>
                  </tr>
                </tbody>
              </table>
            </BodyText>
          </Section>
          <Section>
            <H2>Resources</H2>
            <Spacer $h4 />
            <BodyText>
              <ul className="ml4">
                <li>
                  <Link block href="https://en.wikipedia.org/wiki/Ranked_voting">
                    Ranked voting info
                  </Link>
                </li>
                <li>
                  <Link block href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    Important link
                  </Link>
                </li>
              </ul>
            </BodyText>
          </Section>
        </RContent>
      </Content>
    </Page>
  )
}

const Hero = style('div', 'mb4 w-100 ba b--mid-gray br2 pa3 tc', {
  borderLeftColor: Colors.lemon + '!important',
  borderRightColor: Colors.lemon + '!important',
  borderLeftWidth: '4px',
  borderRightWidth: '4px',
})

const Content = style('div', 'flex-l')

const LContent = style('div', 'flex-grow-0 w-70-l mr4-l')

const RContent = style('div', 'flex-grow-0  w-30-l')

const Section = style('div', 'mb4 mid-gray ba b--mid-gray br2 pa3', (p: { $color?: ColorName }) => ({
  borderLeftColor: Colors[p.$color || 'lemon'] + '!important',
  borderLeftWidth: '3px',
}))

const TD = style('td', 'pa1', p => ({
  color: p.$theme.textColor(),
}))
