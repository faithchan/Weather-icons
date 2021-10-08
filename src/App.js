import React from "react";
import "./styles.css";
import data from "./data"

export default function App(props) {
  return (
    <div className="weather">
      <img src={props.img} alt=""/>
      <p><span>conditions:</span> {props.conditions}</p>
      <p><span>time:</span> {props.time}</p>
    </div>
  );
}
