import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
//import db from "../../db.json";
import { useDispatch, useSelector } from "react-redux";
import style from "./Cards.module.css";
import { getChars } from "../../redux/actions/actions";

function Cards() {
  //const [chars, setChars] = useState([]);
  //get chars
  let dispatch = useDispatch()
  let characters = useSelector(state => state.characters)


  useEffect(() => {
    dispatch(getChars())
    /*  fetch("https://hp-api.herokuapp.com/api/characters")
        .then(res => res.json())
        .then(data => setChars(data.slice(0,50))) */
    /*  setChars(db); */
  }, []);

  return (
    <li className={style.Cards}>
      {characters.map((el, i) => {
        return (
          <Card
            key={i}
            name={el.name}
            actor={el.actor}
            img={el.image}
            house={el.house}
          />
        );
      })}
    </li>
  );
}

export default Cards;
