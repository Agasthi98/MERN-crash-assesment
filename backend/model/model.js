import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    owners: {
      type: Number,
      required: true,
      default: 0,
    },
    color: {
      type: String,
      required: true,
    },
    // image: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

const Vehicle = mongoose.model("vehicles", vehicleSchema);
export default Vehicle;
