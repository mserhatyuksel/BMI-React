import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import styles from "./UserInput.module.css";
const UserInput = ({ handleUser }) => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <label htmlFor="name">Please enter your name</label>
      <input
        type="text"
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Link to="/height" onClick={() => handleUser(value)}>
        <Button>Next</Button>
      </Link>
    </div>
  );
};

export default UserInput;
