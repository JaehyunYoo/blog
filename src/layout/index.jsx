import React from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { ThemeSwitch } from '../components/theme-switch'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'
import './index.scss'
import { MainIntro } from '../components/intro'


export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const test = ['착실한개발자','창의적인 개발자','기대대되는 개발자'];
  return (
    <React.Fragment>
      <Top title={title} location={location} rootPath={rootPath} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <ThemeSwitch />
        <MainIntro />

        {/* <Header title={title} location={location} rootPath={rootPath} /> */}
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}
