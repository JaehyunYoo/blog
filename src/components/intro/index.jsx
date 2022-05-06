import React, { forwardRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import ReactRotatingText from 'react-rotating-text'
import '../../styles/main.scss';

export const MainIntro = forwardRef((props, ref) => {
  return <StaticQuery
    query={etcQuery}
    render={data => {
      const { author, social, introduction,roll } = data.site.siteMetadata
      console.log(data.avatar.childImageSharp.fixed);
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
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{borderRadius: `100%`}}
   />
          </div> 
        </div>
      )
    }}
  />
})

const etcQuery = graphql`
  query EtcQuery {
    avatar: file(absolutePath: { regex: "/mainProfile.png/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        roll
      }
    }
  }
`


