import './Itinerary.css'
import React from "react";
import { useEffect, useState } from "react";
import CardEvent from '../CardEvent/CardEvent';
import { useParams } from "react-router-dom";



export default function Events() {
    let { id } = useParams();
    let [cityEvent, setCityEvent] = useState([]);


    useEffect(() => {
        fetch("/dataEvents.json")
          .then((res) => res.json())
          .then((res) => setCityEvent(res.filter((e) => e.cityId === id)));
        // eslint-disable-next-line
      }, []);
      console.log(cityEvent);

      return (
        <div className="ContenedorEventos ">
          {cityEvent.map((item) => (
            <CardEvent
              key={item.id}
              name={item.name}
              photo={item.photo}
              description={item.description}
              price={item.price} duration={item.duration}
            />
          ))}
        </div>
      );







}