import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    const product_details = {
      name: event.target.product_name.value,
      img: event.target.img.value,
      description: event.target.description.value,
      available: event.target.ava_quantity.value,
      minimum: event.target.min_quantity.value,
      price: event.target.price.value,
    };

    fetch("https://polar-mountain-70911.herokuapp.com/manage_product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product_details),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("You added product successfully");
          event.target.reset();
        } else toast.error("Some thing went wrong");
      });
  };
  return (
    <div className="card lg:max-w-lg bg-base-100 lg:rounded-r">
      <form onSubmit={onSubmit}>
        <label className="block mt-2" htmlFor="">
          Product Name
        </label>
        <input
          type="text"
          name="product_name"
          placeholder="Type Here"
          className="input input-bordered w-full mx-auto mt-2 mb-2"
          required
        />
        <label className="block mt-2" htmlFor="">
          Image
        </label>
        <input
          type="text"
          name="img"
          placeholder="Type Here"
          className="input input-bordered w-full mx-auto mt-2 mb-2"
          required
        />
        <label className="block mt-2" htmlFor="">
          Description
        </label>
        <input
          type="text"
          name="description"
          placeholder="Type Here"
          className="input input-bordered w-full mx-auto mt-2 mb-2"
          required
        />
        <label className="block mt-2" htmlFor="">
          Available Quantity
        </label>
        <input
          type="number"
          name="ava_quantity"
          placeholder="Type Here"
          className="input input-bordered w-full mx-auto mt-2 mb-2"
          required
        />
        <label className="block mt-2" htmlFor="">
          Minimum Quantity
        </label>
        <input
          type="number"
          name="min_quantity"
          placeholder="Type Here"
          className="input input-bordered w-full mx-auto mt-2 mb-2"
          required
        />
        <label className="block mt-2" htmlFor="">
          Price
        </label>
        <input
          type="number"
          name="price"
          placeholder="Type Here"
          className="input input-bordered w-full mx-auto mb-2"
          required
        />

        <input
          type="submit"
          value="Submit"
          className="btn w-full mx-auto text-white btn-success mt-6"
        />
      </form>
    </div>
  );
};

export default AddProduct;
