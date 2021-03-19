import React from 'react';
import PropTypes from 'prop-types';

import TechTag from '../tags/TechTag';

/** @type {React.FC} */
const TechTags = ({ labels, posts }) => {
  const labelCount = labels.map(({ tag }) => {
    let count = 0;
    posts.forEach(({ node }) => {
      if (node.frontmatter.tags.includes(tag)) {
        count += 1;
      }
    });
    return [tag, count];
  });

  const categories = labelCount.filter((label) => label[1] > 0);

  const tags = categories.map((category) => category[0]);

  const getTechTags = (tagList) => {
    const techTags = [];
    tagList.forEach((tag, i) => {
      labels.forEach((label) => {
        if (tag === label.tag) {
          techTags.push(<TechTag key={i} {...label} />);
        }
      });
    });
    return techTags;
  };

  return (
    <>
      <h4>Tech Topics</h4>
      <div className="d-block">{getTechTags(tags)}</div>
    </>
  );
};

TechTags.propTypes = {
  labels: PropTypes.arrayOf(Object),
  posts: PropTypes.arrayOf(Object),
};

TechTags.defaultProps = {
  labels: [],
  posts: [],
};

export default TechTags;
