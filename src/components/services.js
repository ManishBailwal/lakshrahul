import React from "react";
import styles from "./services.module.css";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.svg";

const Services = () => {
  return (
    <div className={styles.himanshu}>
      <h1> Our Services</h1>

      <div className={styles.container}>
        <div className={styles.box}>
          <img src={service1} />
          <h2>Service 1</h2>
          <p>
            Welcome to Animal Basket, where your pets' happiness and well-being
            are our top priority. Our team of passionate animal lovers is here
            to provide the best care for your beloved furry, feathered, or
            scaled family members.
          </p>
        </div>
        <div className={styles.box}>
          <img src={service2} />
          <h2>Service 2</h2>
          <p>
            Welcome to Animal Basket Veterinary Services, where we prioritize
            the health and well-being of your cherished pets. Our experienced
            team of compassionate veterinarians and staff is committed to
            providing the highest level of care and medical expertise.
          </p>
        </div>
        <div className={styles.box}>
          <img src={service3} />
          <h2>Service 3</h2>
          <p>
            Welcome to Animal Basket Consultancy Services, where we offer expert
            guidance and solutions for all your pet-related needs. Our dedicated
            team of professionals brings a wealth of knowledge and experience in
            pet care, training, and behavior management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
