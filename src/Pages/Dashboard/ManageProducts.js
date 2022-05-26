import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data));
}, [])

const handelDelete = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            const url = `http://localhost:5000/manageproduct/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

    
  };


    return (
        <div>
            <h2>All Product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Total Quantity</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr className="hover">
                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.available}</td>
                                <td>
                                    <button className="btn btn-xs btn-error" onClick={() => handelDelete(product._id)}>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;