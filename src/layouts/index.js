import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
import emergence from 'emergence.js'
import SiteFoot from './../components/SiteFoot'

import './gatstrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'devicon-2.2/devicon.min.css'
import 'font-awesome/css/font-awesome.css'

class Template extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { location, children } = this.props
    return <div>
        <SiteNavi title={siteMetadata.title} {...this.props} />
        <br />
        <br />
        {children()}
        <div className="container">
          <div className="articles col-md-12">
            <div className="article-wrap">
              <SiteFoot />
            </div>
          </div>
        </div>
      </div>
  }
}

export default Template