import React, { Component } from "react"
import "./card.css"

const Card = props => (
  <div className="Card">
    <img src={props.image} alt="card image" />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
)

export default Card
