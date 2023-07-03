import React from "react";
import heroImg from '../assets/travel-hero.png';

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero-image" src={heroImg}></img>
      <h1>Where I've Been Recently...</h1>
    </div>
  )
}
