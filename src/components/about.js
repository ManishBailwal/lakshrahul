import React from 'react'
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.cont}>
        <h1>About Our Company</h1>
        <div className={styles.about}>
        <p>
        Animal Basket is a dedicated community passionate about enhancing the
         lives of pets and their owners. With top-quality products and expert 
         services, we strive to exceed expectations and foster a trusted, caring
          environment. Join us in this journey of quality, care,
         and commitment to your pet's well-being.
        </p>
        </div>
    </div>
  )
}

export default About;