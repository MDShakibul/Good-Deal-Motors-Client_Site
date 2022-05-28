import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(0);

  const handelDelivered = () => {
    setStatus(1);
    toast.success("Successfully Delivered");
  };

  useEffect(() => {
    fetch("https://polar-mountain-70911.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://polar-mountain-70911.herokuapp.com/manageorder/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <h2>All Product</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr className="hover">
                <th>{index + 1}</th>
                <td>{order.user_name}</td>
                <td>{order.user_email}</td>
                <td>{order.product_name}</td>
                <td>{order.quantity}</td>
                <td>{order.totalPrice}</td>
                <td>{order.address}</td>
                <td>{order.contact_number}</td>
                <td>
                  {status === 0 ? (
                    <p style={{ color: "red", fontWeight: "bold" }}>Pending</p>
                  ) : (
                    <p style={{ color: "green", fontWeight: "bold" }}>
                      Delivered
                    </p>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-xs btn-success mr-2"
                    onClick={() => handelDelivered(order._id)}
                  >
                    Confirm
                  </button>
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => handelDelete(order._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
