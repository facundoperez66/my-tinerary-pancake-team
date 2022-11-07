import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import CardShow from "../CardShow/CardShow";


export default function ShowsDetails() {
    let { id } = useParams();
    let [hotelShow, setHotelShow] = useState([]);


    useEffect(() => {
        fetch("/dataShow.json")
          .then((res) => res.json())
          .then((res) => setHotelShow(res.filter((e) => e.hotelId === id)));
        // eslint-disable-next-line
      }, []);
      console.log(hotelShow);

      return (
        <div className="ContenedorEventos ">
          {hotelShow.map((item) => (
            <CardShow
              key={item.id}
              name={item.name}
              photo={item.photo}
              description={item.description}
              price={item.price} 
            />
          ))}
        </div>
      );







}