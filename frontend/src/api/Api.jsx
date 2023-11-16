import axios from "axios";

export const getAllVehicle = async (setData) => {
  try {
    const vehicles = await (
      await axios.get("http://localhost:5500/api/vehicles/")
    ).data;
    console.log(vehicles);
    setData(vehicles);
  } catch (err) {
    console.log(err);
  }

  // const { vehicles } = await axios.get("http://localhost:5500/api/vehicles/");
  // console.log(vehicles);
  // setData(vehicles);
};
