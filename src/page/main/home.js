import React from 'react'
import Card from './card';
import './home.css'

const Home = () => {
  return (
    <>
    <div className='card-group'>
      <Card imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP66GcsU7niU3D1Lv5WHHPQZFZVG2m7Ny7BQ&usqp=CAU' heading='Govindam Pure Veg' rating='3.8★' />
      <Card imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCotc-3ayYi5hZaVB3i9WXQrA6IhFnttg6Sw&usqp=CAU' heading='Pancham Puriwala' rating='3.5★' />
      <Card imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2InHVvDCIASEiIbrxADk8G1T-0QyCb_VHQ&usqp=CAU' heading='Delhi Corner' rating='4.1★' />
      <Card imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kBCqqvEK1qyLe9EkyDF2Hc8S-sPfJO8Qcg&usqp=CAU' heading='Hotel Sofi Nikas' rating='3.7★' />
    </div>

    <div className='card-group'>
      <Card imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9L0eTkDTRq0iUR8172X1kZXnUNK5gLFm6A&usqp=CAU' heading='Hotel Madias' rating='4.2★' />
      <Card imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPs6GfY2xwq1N1Dobvr4-rEYgnopmOkJ8ig&usqp=CAU' heading='Anand Bhavan' rating='3.2★' />
      <Card imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsvbBWAecC3bCR7NaVAhWqs-9OiRF3sP5Wg&usqp=CAU' heading='New Krishna Bhavan' rating='3.5★' />
      <Card imgsrc='https://media-cdn.tripadvisor.com/media/photo-s/11/8a/4a/82/almakrand-fast-food-restaurant.jpg' heading='Almakrand Restaurant' rating='4.0★' />
    </div>
    </>
  )
}

export default Home;