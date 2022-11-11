import React from "react";


export default function CardShow(props) {
  let { name, price, description, photo, date} = props;
  return (
  <div className="contenedoralgo">
    <div className="card-topp">
      <img src={photo} alt="show" />
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
      <h5>Date:  
     {date}
      </h5>
    </div>
  </div>
 
  )
}