/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header/header';
import './layout.css';

import Styled from './layoutStlyed';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            tagline
            author
            contacts {
              linkedin
              github
              stackoverflow
              freecodecamp
              twitter
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          tagline={data.site.siteMetadata.tagline}
          author={data.site.siteMetadata.author}
          contacts={data.site.siteMetadata.contacts}
        />
        <Styled.Main>
          <main className="p-4">{children}</main>
          <footer className="text-center">
            <hr />
            <p className="d-inline">
              ©
              {new Date().getFullYear()}
              {' '}
              <a className="text-info" href="https://whitesky0109.github.io/">whitesky0109</a>
              , All Rights Reserved.
            </p>
            <p className="mt-5 text-muted d-inline">
              <i>
                {' '}
                Built with
                {' '}
                <a className="text-info" href="https://www.gatsbyjs.org">Gatsby</a>
              </i>
            </p>
          </footer>
        </Styled.Main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
