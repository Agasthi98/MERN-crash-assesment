import "./App.css";
import { getAllVehicle } from "./api/Api";
import Home from "./components/Home/Home";
function App() {
  getAllVehicle();
  return (
    <>
      <Home />
    </>
  );
}

export default App;
