import React from 'react'
import './shopCards.css'

const ShopCards = (props) => {
  return (
    <div>
      <div className='shopcard'>
        <div> <img className='foodimg' src={props.imgLink} /></div>
        
        <div className='details'>
            <b>{props.foodName}</b>
            <br/>₹{props.price}
        </div>

        <div className='box'>
            <button><div className='bott'>-</div></button>
            <input type='text' placeholder='0' className='textarea'/>
            <button><div className='bott'>+</div></button>
        </div>
      
      </div>
    </div>
  )
}

export default ShopCards
