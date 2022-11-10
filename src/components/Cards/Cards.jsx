import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import db from '../../db.json'
import style from './Cards.module.css'

function Cards() {

    const [chars, setChars] = useState([])
    //get chars

    useEffect(()=>{
        /* fetch("https://hp-api.herokuapp.com/api/characters")
        .then(res => res.json())
        .then(data => setChars(data.slice(0,50))) */
        setChars(db)
    }, [])

  return (
    <li className={style.Cards}>
        {chars.map((el, i) => {
            return (<Card
                key={i}
                name={el.name}
                actor={el.actor}
                img={el.image}
                house={el.house}
                />
                )
        })}
    </li>
  )
}


export default Cards