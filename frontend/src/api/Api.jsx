import axios from "axios";

export const getAllVehicle = async (setData) => {
  try {
    const vehicles = await (
      await axios.get("http://localhost:5500/api/vehicles/")
    ).data;
    setData(vehicles);
  } catch (err) {
    console.log(err);
  }
};
