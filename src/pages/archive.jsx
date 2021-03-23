import React from 'react';
import PropTypes from 'prop-types';

import { Link, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidebar from '../components/sidebar/Sidebar';
import TechTag from '../components/tags/TechTag';

/** @type {React.FC} */
const ArchivePage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const { labels } = data.site.siteMetadata;

  const labelMap = labels.reduce((acc, label) => {
    acc[label.tag] = label;
    return acc;
  }, {});

  const getTechTags = (tags) => tags.map((tag) => {
    const label = labelMap[tag];
    return label && (
      <TechTag
        key={tag}
        tag={label.tag}
        tech={label.tech}
        name={label.name}
        size={label.size}
        color={label.color}
      />
    );
  });

  return (
    <Layout>
      <SEO
        title="Archive"
        keywords={[
          'gatsby',
          'javascript',
          'react',
          'web development',
          'blog',
          'graphql',
        ]}
      />
      <div className="index-main">
        <div className="sidebar px-4 py-2">
          <Sidebar />
        </div>
        <div className="post-list-main">
          <h2 className="heading mt-3">All Posts</h2>
          {posts.map(({ node }) => {
            const { tags, title, date } = node.frontmatter;
            return (
              <div key={node.id} className="container mt-5">
                <Link to={node.fields.slug} className="text-dark">
                  <h2 className="title">{title}</h2>
                </Link>
                <small className="d-block text-info">
                  <i>
                    Posted on
                    {date}
                  </i>
                </small>
                <p className="mt-3 d-inline">{node.excerpt}</p>
                <Link to={node.fields.slug} className="text-primary">
                  <small className="d-inline-block ml-3"> Read full post</small>
                </Link>
                <div className="d-block">{getTechTags(tags)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

ArchivePage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const pageQuery = graphql`
  query ArchiveQuery {
    site {
      siteMetadata {
        title
        author
        labels {
          tag
          tech
          name
          size
          color
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          html
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default ArchivePage;
