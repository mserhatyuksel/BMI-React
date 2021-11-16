import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/Inputs/UserInput";
import WeightInput from "./components/Inputs/WeightInput";
import HeightInput from "./components/Inputs/HeightInput";
import Result from "./components/Result";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  const handleUser = (name) => {
    setUser(name);
  };

  const handleWeight = (data) => {
    setWeight(data);
  };

  const handleHeight = (data) => {
    setHeight(data);
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
        <Route path="/result" element={<Result user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
