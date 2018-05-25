import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../../gatsby-config'

class Profile extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Profile'
    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, 'title')}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:site',
              content: `@${get(siteMetadata, 'twitter')}`,
            },
            { property: 'og:title', content: title },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:description',
              content: get(siteMetadata, 'description'),
            },
            {
              property: 'og:url',
              content: `${get(siteMetadata, 'siteUrl')}/profile`,
            },
            {
              property: 'og:image',
              content: `${get(siteMetadata, 'siteUrl')}/img/profile.jpg`,
            },
          ]}
        />
        <section className="text-center">
          <div className="container">
            <img
              src={'/img/profile-fathur.jpg'}
              alt=""
              className="rounded-circle mx-auto d-block"
              width="120px"
            />
            <h1>Fathurahman Ma'ruf Hudoarma</h1>
            <p className="lead text-muted">
              <a href="https://fathurmh.github.io" target="_blank">fathurmh.github.io</a>
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile
