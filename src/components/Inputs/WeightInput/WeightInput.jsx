import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import styles from "./WeightInput.module.css";
const WeightInput = ({ handleWeight }) => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <img src="/assets/images/weight.png" alt="" />
      <div className={styles.input}>
        <label htmlFor="weight">What is your weight?</label>
        <input
          type="number"
          min="10"
          max="300"
          id="weight"
          placeholder="kg"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={styles.buttons}>
          <Link to="/height">
            <Button>Back</Button>
          </Link>
          <Link to="/result" onClick={() => handleWeight(value)}>
            <Button disabled={!value}>Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeightInput;
