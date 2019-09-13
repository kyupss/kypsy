import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

const Title = props => (
  <a href={props.path} className="link">
    <span className="link__title">
      <div>{props.children}</div>
    </span>
  </a>
)

Title.propTypes = {
  path: PropTypes.string,
};

export default Title;