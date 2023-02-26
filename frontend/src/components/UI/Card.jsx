
import React from 'react';
import '../styles/card.css';

const Card = (props) => {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

export default Card;
