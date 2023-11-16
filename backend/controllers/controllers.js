import Vehicle from "../model/model.js";

const addVehicle = async (req, res) => {
  const { brand, model, price, owners, color } = req.body;
  const newVehicle = await Vehicle({
    brand,
    model,
    price,
    owners,
    color,
  });
  try {
    await newVehicle.save();
    res.send("New Vehicle Added Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getVehiclesList = async (req, res) => {
  const vehicle = await Vehicle.find({});
  res.json(vehicle);
};

export { addVehicle, getVehiclesList };
