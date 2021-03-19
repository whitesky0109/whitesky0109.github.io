import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import {
  H4GlobalStyled,
  TechTagButtonStyled,
  TagStyled,
  SvgStyled,
} from './TechTagStyled';

const TechTag = ({
  tag, tech, name, size, color, img,
}) => (
  <div className="d-inline-block p-1">
    <H4GlobalStyled />
    <Link to={`/tags/${tag}/`}>
      <TechTagButtonStyled className="text-white">
        <p className="d-inline">{`${tech} `}</p>
        <TagStyled className="d-inline" size={size} color={color}>
          <SvgStyled role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} color={color}>
            <title>{tech}</title>
            {img != null && <image href={img} width={size} height={size} />}
            {name != null && (
              Array.isArray(name)
                // eslint-disable-next-line react/no-array-index-key
                ? (name.map((n) => <path key={n} d={n} />))
                : (<path d={name} />)
            )}
          </SvgStyled>
        </TagStyled>
      </TechTagButtonStyled>
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
