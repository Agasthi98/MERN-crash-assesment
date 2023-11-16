import { useEffect, useState } from "react";
import AllVehicles from "../GetAllVehicle/GetAllVehicle";
import { getAllVehicle } from "../../api/Api";

const Home = () => {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    // your API call func
    getAllVehicle(setSubmittedData);
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
