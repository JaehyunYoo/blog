import React from 'react'
import { Top } from '../components/top'
import { ThemeSwitch } from '../components/theme-switch'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'
import './index.scss'
import { MainIntro } from '../components/intro'


export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRoot = location.pathname === rootPath
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
        {
          isRoot && <MainIntro />
        }
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}
