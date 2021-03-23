import React from 'react';
import PropTypes from 'prop-types';

import TechTag from '../tags/TechTag';

/** @type {React.FC} */
const TechTags = ({ labels, posts }) => {
  const labelMap = {};
  const tags = labels.reduce((acc, label) => {
    labelMap[label.tag] = label;

    const count = posts
      .filter(({ node }) => node.frontmatter.tags.includes(label.tag) === true)
      .length;

    if (count > 0) {
      acc.push(label.tag);
    }

    return acc;
  }, []);

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
