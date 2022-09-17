import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='card-specification'>
      
      <div className='card2'> <img src={props.imgsrc} alt='Picture' className='card-img'/> </div>
      
      <div className='name'>
      <div>Name: <b> {props.heading} </b> </div>
      <div>Rating: <span className='rater'> <b>{props.rating} </b></span> </div>
      <div className='card2'> <Link to='/menucard'> <button className='butn'>View Menucard</button> </Link> </div>
      </div>
      
    </div>
  )
}

export default Card
