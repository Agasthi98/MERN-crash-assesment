import { useEffect, useState, useRef } from "react";
import AllVehicles from "../GetAllVehicle/GetAllVehicle";
import Form from "../Form/Form";
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
    <>
      <h3 className="text-center">Vehicle Details</h3>
      <div className="body-wrapper">
        <div className="row">
          <div className="col-4">
            <Form />
          </div>
          <div className="col-8">
            <AllVehicles data={submittedData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
