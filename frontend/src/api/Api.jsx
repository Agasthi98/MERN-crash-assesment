import axios from "axios";

export const getAllVehicle = async (setSubmittedData) => {
  //   try {
  //     const { vehicles } = await axios.get("http://localhost:5500/api/vehicles/");
  //     console.log(vehicles);
  //     setSubmittedData(vehicles);
  //   } catch (err) {
  //     console.log(err);
  //   }

  const { vehicles } = await axios.get("http://localhost:5500/api/vehicles/");
  console.log(vehicles);
  setSubmittedData(vehicles);
};
