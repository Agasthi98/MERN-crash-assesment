const Form = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Vehicle Brand:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="brand"
            placeholder="Enter Brand"
          />
        </div>
        <div className="form-group mt-2">
          <label>Vehicle Model:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="model"
            placeholder="Enter Model"
          />
        </div>
        <div className="form-group mt-2">
          <label>Vehicle Owners:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="owners"
            placeholder="Enter Owners"
          />
        </div>
        <div className="form-group mt-2">
          <label>Vehicle Price:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="price"
            placeholder="Enter Price"
          />
        </div>
        <div className="form-group mt-2">
          <label>Vehicle Color:</label>
          <input
            type="text"
            className="form-control mt-1"
            id="color"
            placeholder="Enter Color"
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
