import React from "react";
import './CardEvent.css'

export default function CardEvent(props) {
  let { name, price, description, photo, duration } = props;
  return (
    <div className="contenedoralgo">
      <div className="card-topp">
        <img src={photo} alt="event" />
      </div>
      <div className="card-body">
        <h3>
          {name}
        </h3>
        <h5>
          {description}
        </h5>
        <h5>USD $
          {price}
        </h5>
        <h5>Duration:
          {duration}
        </h5>
      </div>
    </div>

  )
}