import React from 'react';
import PropTypes from 'prop-types';
import './level.css';

const styles = {
  purple: "#4B22F4",
}

const difficulty = {
  rookie: [0.2, 0.2, 0.2],
  beginner: [1, 0.2, 0.2],
  medium: [1, 1, 0.2],
  advanced: [1, 1, 1]
}

const getDifficulty = (key, index) => 
  Object.keys(difficulty).includes(key)? difficulty[key][index]: 'rookie';

const Level = props => (
  <div style={{
    display: "flex", 
    marginTop: "11px", 
    marginBottom: "11px"
  }}>
    <div className="level">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect fill={styles.purple} opacity={getDifficulty(props.difficulty, 0)} x="4" y="10.4" width="3" height="9.6" rx="1.5"></rect>
        <path fill={styles.purple} opacity={getDifficulty(props.difficulty, 1)} d="M10.6973 8.69995C10.6973 7.87153 11.3688 7.19995 12.1973 7.19995C13.0257 7.19995 13.6973 7.87152 13.6973 8.69995V18.5C13.6973 19.3284 13.0257 20 12.1973 20C11.3688 20 10.6973 19.3284 10.6973 18.5V8.69995Z"></path>
        <path fill={styles.purple} opacity={getDifficulty(props.difficulty, 2)} d="M17.3955 5.5C17.3955 4.67157 18.0671 4 18.8955 4C19.7239 4 20.3955 4.67157 20.3955 5.5V18.5C20.3955 19.3284 19.7239 20 18.8955 20C18.0671 20 17.3955 19.3284 17.3955 18.5V5.5Z"></path>
      </svg>
      <span 
        className="level__text" 
        style={{
          fontSize: "13px", 
          color: "rgb(141, 141, 157)", 
          marginLeft: "8px", 
          lineHeight: "18px"
      }}>
        {props.children}
      </span>
    </div>
  </div>
)

Level.propTypes = {
  difficulty: PropTypes.oneOf([
    'rookie',
    'beginner', 
    'medium', 
    'advanced'
  ]),
};

export default Level;