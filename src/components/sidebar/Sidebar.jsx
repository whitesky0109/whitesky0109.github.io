import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import Bio from './Bio';

import SocialLinks from './SocialLinks';
import TechTags from './TechTags';

import Styled from './SidebarStyled';

const Sidebar = () => (
  <StaticQuery
    query={graphql`
                query SiteBioQuery {
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
                            labels {
                                tag
                                tech
                                name 
                                size 
                                color
                                img
                            }
                        }
                    }
                    allMarkdownRemark(
                        limit: 10
                        sort: { fields: [frontmatter___date], order: DESC }
                        filter: { frontmatter: { published: { eq: true } } }
                    ) {
                        edges {
                            node {
                                frontmatter {
                                    tags
                                }
                            }
                        }
                    }
                }
            `}
    render={({ site: { siteMetadata }, allMarkdownRemark }) => (
      <>
        <Styled.SiderbarMain className="border-right">
          <Bio author={siteMetadata.author} tagline={siteMetadata.tagline} />
          <SocialLinks contacts={siteMetadata.contacts} />
          <Styled.PageLinks>
            <Link to="/"><span className="text-dark d-block py-1">Blog Home</span></Link>
            <Link to="/about"><span className="text-dark d-block py-1">About</span></Link>
            <Link to="/archive"><span className="text-dark d-block py-1">Archive</span></Link>
          </Styled.PageLinks>
          <div className="tech-tags mt-4">
            <TechTags labels={siteMetadata.labels} posts={allMarkdownRemark.edges} />
          </div>
        </Styled.SiderbarMain>
      </>
    )}
  />
);

export default Sidebar;
