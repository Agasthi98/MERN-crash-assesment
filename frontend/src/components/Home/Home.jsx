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
  console.log(submittedData);

  return (
    <div>
      <h3 className="text-center">Vehicle Details</h3>
      <AllVehicles data={submittedData} />
    </div>
  );
};

export default Home;
