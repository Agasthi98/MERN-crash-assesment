import { useEffect, useState, useRef } from "react";
import AllVehicles from "../GetAllVehicle/GetAllVehicle";
import { getAllVehicle } from "../../api/Api";

const Home = () => {
  const [submittedData, setData] = useState([]);
  const renderAfterCalled = useRef(false);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      // your API call func
      getAllVehicle(setData);
    }

    renderAfterCalled.current = true;
  }, []);

  //   console.log(submittedData);
  return (
    <div>
      <h1>Home</h1>
      <AllVehicles />
    </div>
  );
};

export default Home;
