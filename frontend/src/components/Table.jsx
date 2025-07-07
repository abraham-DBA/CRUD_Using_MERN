import { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/customer");
        console.log(response);
        setCustomers(response.data.customers || []);
      } catch (error) {
        console.error("error fetching clients");
        setCustomers([]);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container mt-5 ">
        <div className="d-flex justify-content-between mb-4">
          <h1>Customer Management System</h1>
          <button type="submit" className="btn btn-primary fw-bold">
            Add New Customer
          </button>
        </div>
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, idx) => (
              <tr key={customer._id || idx}>
                <td>{customer._id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
