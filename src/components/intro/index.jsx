import React, { forwardRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ReactRotatingText from 'react-rotating-text'
import '../../styles/main.scss';

export const MainIntro = forwardRef((props, ref) => {
  return <StaticQuery
    query={etcQuery}
    render={data => {
      const { author, social, introduction,roll } = data.site.siteMetadata
      console.log(roll);
      return (
        <div ref={ref} className="introduction">
          <p className='title'>
            안녕하세요.
            <br/>
            <ReactRotatingText items={roll}/> 
            <br/>
            개발자 <strong>{author}</strong> 입니다.
          </p>
          <div style={{flex:'1',textAlign:'center'}}>
            <img src='/images/mainProfile.png' />
          </div>
        </div>
      )
    }}
  />
})

const etcQuery = graphql`
  query EtcQuery {
    site {
      siteMetadata {
        author
        introduction
        roll
      }
    }
  }
`

// export default Bio
