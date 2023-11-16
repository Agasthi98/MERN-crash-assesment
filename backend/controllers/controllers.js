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

const getVehicleById = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);

  if (vehicle) {
    res.json({
      _id: vehicle._id,
      brand: vehicle.brand,
      model: vehicle.model,
      price: vehicle.price,
      owners: vehicle.owners,
      color: vehicle.color,
    });
  } else {
    res.status(404);
    throw new Error("Vehicle not found");
  }
};

const deleteVehicle = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);

  if (vehicle) {
    await vehicle.deleteOne();
    res.json({ message: "Vehicle removed" });
  } else {
    res.status(404);
    throw new Error("Vehicle not found");
  }
};

const updateVehicle = async (req, res) => {
  const { brand, model, price, owners, color } = req.body;

  const vehicle = await Vehicle.findById(req.params.id);

  if (vehicle) {
    vehicle.brand = brand;
    vehicle.model = model;
    vehicle.price = price;
    vehicle.owners = owners;
    vehicle.color = color;

    const updateVehicle = await vehicle.save();
    res.json(updateVehicle);
  } else {
    res.status(404);
    throw new Error("Vehicle Not Found");
  }
};

export {
  addVehicle,
  getVehiclesList,
  getVehicleById,
  deleteVehicle,
  updateVehicle,
};
