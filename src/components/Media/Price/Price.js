import React from 'react';
import './price.css';

const Price = props => (
  <div className="price">
    <div>
      <span 
        className="price__value" 
        data-testid="card-price" 
        style={{color: "rgb(75, 34, 244)", fontSize: "18px", lineHeight: "22px"}}
      >
        {props.children}
      </span>
    </div>
  </div>
)

export default Price;