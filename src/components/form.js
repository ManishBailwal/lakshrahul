import React from 'react'
import './form.css'

function Form() {
  return (
    <div className="container">
        
    <h2>Billing Form</h2>
    <div className="form-container">
        <form>

            <div className="input-name">
                <label>First Name:</label>
               <input type="text" placeholder="First Name"></input>
            </div>

            <div className="input-name">
            <label>Last Name:</label>
                <input type="text" placeholder="Last Name"></input>
            </div>
           <div className="input-name">
            <label>Email:</label>
               <span> <input type="email" placeholder="Email"></input></span>
            </div>

            <div className="input-name">
            <label>Phone:</label>
               <span> <input type="number" placeholder="Contact"></input></span>
            </div>

            <div className="input-name">
                <label>Address:</label>
                <input type="text" placeholder="Tehri" ></input>
                
            </div>
             
            <div className="input-name">
             <label>State:</label>
               <select class="state">
                <option>Uttarakhand</option>
                <option>Himachal Pradesh</option>
                <option>Punjab</option>
                <option>Tamil Nadu</option>
                <option>Jharkhand</option>
               </select>
               
            </div>
           

            <div className="btn-container">
                <input type="submit" className="button" value="Continue Payment"></input>
                
            </div>

            



        </form>

    </div>
        
    </div>
  )
}

export default Form;