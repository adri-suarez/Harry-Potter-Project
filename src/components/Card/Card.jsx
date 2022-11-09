import React from 'react'
import style from './Card.module.css'


function Card({name, img, house, actor}) {
  return (
    <div className={style.cardsita}>
        <h2>{name}</h2>
        <img src={img} alt="No img available" className='CharacterPhoto'/>
        <h4>{house?"House: "+house:"No House"}</h4>
        <p>{actor?"Actor: "+actor:""}</p>
    </div>
  )
}

export default Card