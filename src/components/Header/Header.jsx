import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1>BMI Calculator</h1>
      <Link to="/">home</Link>
      <Link to="/weight">weight</Link>
      <Link to="/height">height</Link>
      <Link to="/result">result</Link>
    </div>
  );
};

export default Header;
