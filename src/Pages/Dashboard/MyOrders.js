import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from "../../firebase.init";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?user=${user?.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])

    const handelDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete it");
    
        if (proceed) {
          const url = `http://localhost:5000/order/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        }
      };

    return (
        <div>
            <h2 className='text-2xl text-lime-600 py-5'>My Orders{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{order.user_name}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.product_name}</td>
                                <td>{order.quantity}</td>
                                <td>{order.total_price}</td>
                                <td>
                                <button className="btn btn-xs btn-error mr-1">Pay</button>
                                <button className="btn btn-xs btn-success" onClick={() => handelDelete(order._id)}>Cancel</button>
                                </td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;