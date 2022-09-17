import React from 'react'
import './menucard.css'
import ShopItem from './shopItems'

const MenuCard = () => {
  return (

    <>

<div className='about'>
        <h3><b>Dishes in this restaurant-</b></h3>
    </div>

    <div className='car'>
    <div className='caro'>
    
    <div className='carocan'>
    
    <img src='https://www.thenorthernlight.com/uploads/original/20210217-165518-RusticFork_3.jpg' className='single singleimg' alt=''/>
    
    <div className='single'>
    <img src='https://www.realmobiweb.com/blog/wp-content/uploads/2022/02/Fast-Food-Restaurant-Names.png' className='singimg' alt=''/>
    <img src='https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322303/selection-of-chinese-food-that-may-cause-chinese-restaurant-syndrome.jpg' className='singimg' alt=''/>
    </div>
    
    </div>
    </div>
    </div>


    <div className='infor'>
      <b>BBQ, North Eastern, Chinese, Desserts, Beverages</b>
      <br/>
      Location: <b>Dhole Patil Road, Pune</b>
      <br/>
      Time: <b>10:00 AM to 11:00 PM</b>
    </div>
    
    <ShopItem/>
    </>
  )
}

export default MenuCard
