import React from 'react'
import Header from './components/header/Header'
import Tabs from './components/tabs/Tabs'
import Home from './page/main/home'
import Footer from './components/footer/footer'
import MenuCard from './page/shoppingPage/menuCard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <>

<Router>
    <Header/>

    <Tabs/>

    <div>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/menucard" element={<MenuCard/>}/>
        </Routes>
    </div>

    <Footer/>
    </Router>
    
    </>
  )
}

export default App
