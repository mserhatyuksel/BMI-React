import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import styles from "./HeightInput.module.css";
const HeightInput = ({ handleHeight }) => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <label htmlFor="height">How tall are you?</label>
        <input
          type="number"
          min="30"
          max="220"
          id="height"
          placeholder="cm"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Link to="/weight" onClick={() => handleHeight(value)}>
          <Button disabled={!value}>Next</Button>
        </Link>
      </div>
      <img src="/assets/images/height.png" alt="" />
    </div>
  );
};

export default HeightInput;
