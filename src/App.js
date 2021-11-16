import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/Inputs/UserInput";
import WeightInput from "./components/Inputs/WeightInput";
import HeightInput from "./components/Inputs/HeightInput";
import Result from "./components/Result";
import Info from "./components/Info";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Button from "./components/UI/Button";

function App() {
  const [user, setUser] = useState("");
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  const [info, setInfo] = useState(false);

  const handleUser = (name) => {
    setUser(name);
  };

  const handleWeight = (data) => {
    setWeight(data);
  };

  const handleHeight = (data) => {
    setHeight(data);
  };

  const toggleInfo = () => {
    setInfo(!info);
  };

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" exact element={<UserInput handleUser={handleUser} />} />
        <Route
          path="/weight"
          element={<WeightInput handleWeight={handleWeight} />}
        />
        <Route
          path="/height"
          element={<HeightInput handleHeight={handleHeight} />}
        />
        <Route
          path="/result"
          element={<Result user={user} weight={weight} height={height} />}
        />
      </Routes>
      {info && <Info onClick={toggleInfo} />}
      <Button className="info_btn" onClick={toggleInfo}>
        What's BMI?
      </Button>
    </div>
  );
}

export default App;
