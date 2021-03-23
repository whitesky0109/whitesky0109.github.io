import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FaCheckCircle } from 'react-icons/fa';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './index.css';

import Sidebar from '../components/sidebar/Sidebar';
import TechTag from '../components/tags/TechTag';

import BlogPostStyled from '../templates/blogPostStyled';

const aboutTags = ['nodejs', 'react', 'html', 'css'];

const AboutPage = ({ data }) => {
  const { labels } = data.site.siteMetadata;

  const tags = aboutTags.reduce((acc, tag) => {
    const label = labels.find((item) => item.tag === tag);
    acc[tag] = label.name;
    return acc;
  }, {});

  return (
    <Layout>
      <SEO title="About" />
      <BlogPostStyled.PostPageMain>
        <BlogPostStyled.Sidebar className="px-4 py-2">
          <Sidebar />
        </BlogPostStyled.Sidebar>

        <div className="post-main">
          <SEO title="About" />
          <div className="mt-3">
            <BlogPostStyled.Heading>About</BlogPostStyled.Heading>
            <p>
              <i>
                Developer Diary is a Gatsby Starter blog template created with
                web developers in mind, but really, anyone can use it. It's
                totally usable right out of the box, but minimalist enough to be
                easily modifiable to suit your needs.
              </i>
            </p>
            <br />
            <h4>Features</h4>
            <div>
              <span className="text-success d-inline-block" title="blazing">
                <FaCheckCircle size={26} style={{ color: 'success' }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                Blazing fast, as you'd expect from a Gatsby site
              </p>
            </div>
            <div>
              <span className="text-success d-inline-block" title="tags">
                <FaCheckCircle size={26} style={{ color: 'success' }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                Tech tags designed for web developers
              </p>
              <div className="ml-5">
                <TechTag
                  tag="react"
                  tech="React"
                  name={tags.react}
                  color="deepskyblue"
                />
                <TechTag
                  tag="nodejs"
                  tech="Node.js"
                  name={tags.nodejs}
                  color="lightgreen"
                />
                <TechTag
                  tag="html"
                  tech="HTML"
                  name={tags.html}
                  color="darkorange"
                />
                <TechTag
                  tag="css"
                  tech="CSS"
                  name={tags.css}
                  color="teal"
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-success d-inline-block" title="prism">
                <FaCheckCircle size={26} style={{ color: 'success' }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                Includes Prism for code block styling in markdown files
              </p>
            </div>
            <div>
              <span className="text-success d-inline-block" title="icons">
                <FaCheckCircle size={26} style={{ color: 'success' }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                Developer-relevant social-media icon links including GitHub,
                Stack Overflow and freeCodeCamp
              </p>
            </div>
            <div>
              <span className="text-success d-inline-block" title="mobile">
                <FaCheckCircle size={26} style={{ color: 'success' }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                Mobile responsive, of course
              </p>
            </div>
          </div>
        </div>
      </BlogPostStyled.PostPageMain>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.instanceOf(Object),
};

AboutPage.defaultProps = {
  data: {},
};

export const pageQuery = graphql`
  query aboutQuery {
    site {
      siteMetadata {
        labels {
          tag
          tech
          name
          size
          color
        }
      }
    }
  }
`;

export default AboutPage;
