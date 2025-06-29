import React from 'react';
import './Card.css';

function Card({ title, paragraph, image, children }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title || 'Card image'} className="card-image" />}
      {title && <h3 className="card-title">{title}</h3>}
      {paragraph && <p className="card-paragraph">{paragraph}</p>}
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;