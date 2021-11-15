import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/Inputs/UserInput";
import WeightInput from "./components/Inputs/WeightInput";
import HeightInput from "./components/Inputs/HeightInput";
import Result from "./components/Result";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" exact element={<UserInput />} />
        <Route path="/weight" element={<WeightInput />} />
        <Route path="/height" element={<HeightInput />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
