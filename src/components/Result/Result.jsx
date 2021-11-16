import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./Result.module.css";
const Result = ({ user, height, weight, handleLocal }) => {
  const [bmi, setBmi] = useState();
  useEffect(() => {
    setBmi((weight / Math.pow(height / 100, 2)).toFixed(2));
  }, [weight, height]);
  useEffect(() => {
    handleLocal(bmi);
  }, [bmi,handleLocal]);
  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <h3>
          {user && `${user}'s`} BMI: {bmi}
        </h3>
        <Link to="/">
          <Button>Recalculate</Button>
        </Link>
      </div>
      {bmi <= 18.4 ? (
        <img
          className={styles.img}
          src="/assets/images/underweight.jpg"
          alt=""
        />
      ) : bmi <= 24.9 ? (
        <img className={styles.img} src="/assets/images/normal.jpg" alt="" />
      ) : bmi <= 29.9 ? (
        <img
          className={styles.img}
          src="/assets/images/excess_weight.png"
          alt=""
        />
      ) : bmi <= 44.9 ? (
        <img className={styles.img} src="/assets/images/obesity.jpg" alt="" />
      ) : (
        <img
          className={styles.img}
          src="/assets/images/extremely_obesity.jpg"
          alt=""
        />
      )}
    </div>
  );
};

export default Result;
