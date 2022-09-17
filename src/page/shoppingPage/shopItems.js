import React from 'react'
import './shopItem.css'
import ShopCards from './shopCards'

const ShopItem = () => {
  return (
    <>

    <div className='title'> 
    <h2><b>Add Items-</b></h2> 
    </div>
    
    <div className='pageBorder'>
    
    <div className='pageBorder2'>
    
    <div className='flexible'>
    <ShopCards 
    imgLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXc76nAEn4sGsNit0YOpf5Zye8VYG2hyS3Q&usqp=CAU'
    foodName='Pavbhaji' 
    price='130'
    />

    <ShopCards 
    imgLink='https://i.ytimg.com/vi/K71606L_7PY/maxresdefault.jpg'
    foodName='Chinese Noodles' 
    price='150'
    />

    </div>

    <div className='flexible'>
    <ShopCards 
    imgLink='https://cookbook.pfeiffer.net.au/files/dosa.jpg'
    foodName='Masala Dosa' 
    price='100'
    />

    <ShopCards 
    imgLink='https://imaginationfooddelivery.com/dashboard/storage/app/public/category/2022-01-18-61e7000f78f24.png'
    foodName='Veg Pulaw' 
    price='110'
    />

    </div>
    </div>

    </div>
    <br/>
    <div className='total'>
        <div className='amount'>
        Total Amount: <b>₹ 1000</b>
        </div>
        
        <div>
        <button type="button" class="btn btn-success">CHECKOUT</button>
        </div>
    </div>
    </>
  )
}

export default ShopItem
