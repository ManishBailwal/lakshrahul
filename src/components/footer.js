import React from 'react'
import logo from '../assets/images/logo.jpeg'
import './footer.css'

function Footer() {
  return ( 
  <div className='f'>

    <footer>
        <div className="row">

            <div className="col">
            <img className="image" src= {logo}/>
                <p>Welcome to Animal Basket ,  we help to protect your pet .
                    connect with us and get all the required knowledge
                </p>
            </div>
            <div className="col">
                <h3>Office</h3>
                <p>Subhash Road</p>
                <p>patel nagar Dehradun</p>
                <p>pin 248001, India</p>
                <p>manishbailwal02@gmail.com</p>
                <h4>6397308332</h4>
            </div>
            <div className="col">
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Consulatany">Consultancy</a></li>
                    <li><a href="Career"></a>Career</li>
                    <li><a href="Contact"></a>Contact</li>
                </ul>
            </div>
            



        </div>
    </footer>

  </div>


  )}
export default Footer;