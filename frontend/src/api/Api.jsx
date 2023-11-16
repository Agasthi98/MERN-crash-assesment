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

export const addVehicle = async (formData, setFormData, initialValues) => {
  try {
    const res = await axios.post(
      "http://localhost:5500/api/vehicles/",
      formData
    );
    console.log(res.config.data);
    setFormData(initialValues);
  } catch (err) {
    console.log(err);
  }
};

export const deleteVehicle = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:5500/api/vehicles/${id}`);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
