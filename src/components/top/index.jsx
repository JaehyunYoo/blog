import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ title }) => {
 
  return (
    <div className="top">
        <Link to={`/`} className="link">
          {title}
        </Link>
      <GitHubIcon />
    </div>
  )
}
