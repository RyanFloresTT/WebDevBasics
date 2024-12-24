import Today from "./Components/Today.jsx";
import Time from "./Components/Time.jsx";
import CityInput from "./Components/CityInput.jsx";
import "./reset.css";

export default function App() {
  return (
    <div>
      <Today />
      <CityInput />
      <Time />
    </div>
  );
}
