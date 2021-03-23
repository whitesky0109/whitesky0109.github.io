/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Sidebar from '../components/sidebar/Sidebar';
import TechTag from '../components/tags/TechTag';
import CustomShareBlock from '../components/CustomShareBlock';

import Styled from './blogPostStyled';

/** @type {React.FC<>} */
const BlogPost = ({ data, pageContext }) => {
  const { title, tags, date } = data.markdownRemark.frontmatter;
  const { labels, url: siteUrl, title: siteName } = data.site.siteMetadata;

  const labelMap = labels.reduce((acc, label) => {
    acc[label.tag] = label;
    return acc;
  }, {});

  const getTechTags = (tagList) => tagList.map((tag) => {
    const label = labelMap[tag];
    return label && (
      <TechTag
        key={tag}
        tag={label.tag}
        tech={label.tech}
        name={label.name}
        size={label.size}
        color={label.color}
        img={label.img}
      />
    );
  });

  const url = `${siteUrl}${pageContext.slug}`;
  return (
    <Layout>
      <SEO title={title} />
      <Styled.PostPageMain>
        <Styled.Sidebar className="px-4 py-2">
          <Sidebar />
        </Styled.Sidebar>

        <div className="post-main">
          <SEO title={title} />
          <div className="mt-3">
            <Styled.Heading>{title}</Styled.Heading>
            <div className="d-block">{getTechTags(tags)}</div>
            <br />
            <small>
              <i>Published on </i>
              {' '}
              {date}
            </small>
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <CustomShareBlock title={title} siteName={siteName} url={url} />
          </div>
        </div>
      </Styled.PostPageMain>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  pageContext: PropTypes.instanceOf(Object).isRequired,
};

BlogPost.defaultProps = { };

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
        title
        labels {
          tag
          tech
          name
          size
          color
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;

export default BlogPost;
