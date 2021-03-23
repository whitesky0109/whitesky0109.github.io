import React from 'react';
import PropTypes from 'prop-types';

import { Link, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.css';
import '../pages/index.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidebar from '../components/sidebar/Sidebar';
import TechTag from '../components/tags/TechTag';

/** @type {React.FC} */
const PostList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { labels } = data.site.siteMetadata;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/${(currentPage - 1).toString()}`;
  const nextPage = `/${(currentPage + 1).toString()}`;

  const labelMap = labels.reduce((acc, label) => {
    acc[label.tag] = label;
    return acc;
  }, {});

  const getTechTags = (tags) => tags.map((tag) => {
    const label = labelMap[tag];
    return (
      label && (
      <TechTag
        key={tag}
        tag={label.tag}
        tech={label.tech}
        name={label.name}
        size={label.size}
        color={label.color}
        img={label.img}
      />
      )
    );
  });

  return (
    <Layout>
      <SEO
        title="Home"
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
          {posts.map(({ node }) => {
            const { tags } = node.frontmatter;
            return (
              <div key={node.id} className="container mt-5">
                <Link to={node.fields.slug} className="text-dark">
                  <h2 className="title">{node.frontmatter.title}</h2>
                </Link>
                <small className="d-block text-info">
                  <i>
                    Posted on
                    {node.frontmatter.date}
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
          <div className="text-center mt-4">
            {!isFirst && (
              <Link to={prevPage} rel="prev" style={{ textDecoration: 'none' }}>
                <span className="text-dark">← Previous Page</span>
              </Link>
            )}
            {!isLast && (
              <Link to={nextPage} rel="next" style={{ textDecoration: 'none' }}>
                <span className="text-dark ml-5">Next Page →</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

PostList.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  pageContext: PropTypes.instanceOf(Object).isRequired,
};

export const listQuery = graphql`
  query paginateQuery($skip: Int!, $limit: Int!) {
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
      limit: $limit
      skip: $skip
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

export default PostList;
