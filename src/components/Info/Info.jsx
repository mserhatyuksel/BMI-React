import styles from "./Info.module.css";
const Info = ({ onClick }) => {
  return (
    <>
      <div className={styles.wrapper} onClick={onClick} />
      <div className={styles.container}>
        <h4>What is BMI?</h4>
        <p>
          The body mass index (BMI) is a measure that uses your height and
          weight to work out if your weight is healthy.
        </p>
        <p>
          The BMI calculation divides an adult's weight in kilograms by their
          height in metres squared. For example, A BMI of 25 means 25kg/m2.
        </p>
      </div>
    </>
  );
};

export default Info;
