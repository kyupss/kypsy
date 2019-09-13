import React from 'react';
import './state.css'

const State = props => (
  <div className="state">
    <span 
      className="state__text" 
      style={{
        color: "rgb(255, 255, 255)", 
        fontSize: "12px", 
        lineHeight: "16px"
    }}>
      {props.children}
    </span>
  </div>
)

export default State;