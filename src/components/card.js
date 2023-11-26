import React from 'react'
import logo from '../assets/images/logo.jpeg'
import './card.css'

function Card() {
  return (
    <div className="upc">

        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={logo}/>
            <div className="profile-title">Dr Manish </div>
            <div className="profile-description">Hi ,this is Manish Bailwal  , a professional vet
             feel free to connect with us , we will take care of you 
            </div>
        </div>
        
    </div>
  )
}

export default Card;