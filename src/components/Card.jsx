import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props){

  return (
    <div className="card">
      <img className="card-img" src={props.imageUrl} />
      <div className="card-text">

        <div className="card-text-location"><span><FontAwesomeIcon icon="fa-solid fa-location-dot" /> {props.location.toUpperCase()}</span> <a href={props.googleMapsUrl}>View on Google Maps</a></div>
        <h3>{props.title}</h3>
        <h4>{props.startDate} - {props.endDate}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
