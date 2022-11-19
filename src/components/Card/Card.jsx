import React from "react";
import style from "./Card.module.css";

function Card({ name, img, house, actor }) {
  return (
    <div className={style.cardsita}>
      <h2>{name}</h2>
      <img src={img} alt="No img available" className="CharacterPhoto" />
      <h4>{house ? house : "No House"}</h4>
      <p>{actor ? actor : "Unknown Actor"}</p>
    </div>
  );
}

export default Card;
