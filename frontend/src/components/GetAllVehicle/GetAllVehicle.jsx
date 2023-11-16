import React from "react";
import { deleteVehicle } from "../../api/Api";

const GetAllVehicle = ({ data }) => {
  const deleteHandler = (id) => {
    console.log(id);
    deleteVehicle(id);
  };
  return (
    <div>
      {data.length > 0 && (
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Brand</th>
              <th scope="col">Model</th>
              <th scope="col">Owners</th>
              <th scope="col">Price</th>
              <th scope="col">Color</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.owners}</td>
                <td>{item.price}</td>
                <td>{item.color}</td>
                <td>
                  {" "}
                  <button type="button" className="btn btn-success ">
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteHandler(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {data.length < 1 && <h1>No data</h1>}
    </div>
  );
};

export default GetAllVehicle;
