import UserInput from "./components/Inputs/UserInput";
import WeightInput from "./components/Inputs/WeightInput";
import HeightInput from "./components/Inputs/HeightInput";
import Result from "./components/Result";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserInput />
      <WeightInput />
      <HeightInput />
      <Result />
    </div>
  );
}

export default App;
