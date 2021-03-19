import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import './tags.css';

const TechTag = ({
  tag, tech, name, size, color, img,
}) => (
  <div className="d-inline-block p-1">
    <Link to={`/tags/${tag}/`}>
      <button type="button" className="tech-tag text-white">
        <p className="d-inline">
          {tech}
          {' '}
        </p>
        <div className="d-inline" style={{ fontSize: size, color }}>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{ fill: `${color}` }}>
            <title>{tech}</title>
            {img != null && <image href={img} width={size} height={size} />}
            {name != null && (
              Array.isArray(name)
                ? (name.map((n, i) => <path key={i} d={n} />))
                : (<path d={name} />)
            )}
          </svg>
        </div>
      </button>
    </Link>

  </div>

);

TechTag.propTypes = {
  tag: PropTypes.string,
  tech: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  img: PropTypes.string,
};

TechTag.defaultProps = {
  tag: '',
  tech: '',
  name: '',
  size: 20,
  color: '',
  img: null,
};

export default TechTag;
