import { useState } from "react";
import { addVehicle } from "../../api/Api";

const Form = ({ set, submitData }) => {
  const initialValues = {
    brand: "",
    model: "",
    owners: 0,
    price: 0,
    color: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    addVehicle(formData, setFormData, initialValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Vehicle Brand:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="brand"
            placeholder="Enter Brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label>Vehicle Model:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="model"
            name="model"
            placeholder="Enter Model"
            value={formData.model}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label>Vehicle Owners:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="owners"
            name="owners"
            placeholder="Enter Owners"
            value={formData.owners}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label>Vehicle Price:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="price"
            name="price"
            placeholder="Enter Price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <label>Vehicle Color:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="color"
            name="color"
            placeholder="Enter Color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Add Vehicle
        </button>
      </form>
    </div>
  );
};

export default Form;
