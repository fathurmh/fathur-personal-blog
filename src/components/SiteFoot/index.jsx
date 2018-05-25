import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'

class ReadNext extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="content has-text-centered">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/fathurmh" target="_blank">
                <i className="fab fa-facebook" />
              </a></li>
              <li><a href="https://www.twitter.com/fathurmh" target="_blank">
                <i className="fab fa-twitter" />
              </a></li>
              <li><a href="https://www.instagram.com/fathurmh" target="_blank">
                <i className="fab fa-instagram" />
              </a></li>
              <li><a href="https://www.linkedin.com/in/fathurmh" target="_blank">
                <i className="fab fa-linkedin" />
              </a></li>
              <li><a href="https://github.com/fathurmh" target="_blank">
                <i className="fab fa-github" />
              </a></li>
              <li><a href="mailto:fathur.mh@gmail.com" target="_blank">
                <i className="far fa-envelope" />
              </a></li>
            </ul>
            <ul className="copyright">
              Built with <a href="https://www.gatsbyjs.org" target="_blank"><strong>Gatsby</strong></a> by {" "}
              <a href="https://fathurmh.github.io" target="_blank"><strong>Fathurahman Ma'ruf Hudoarma</strong></a>
              <br/>
              <li>&copy; Copyright 2018</li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default ReadNext
