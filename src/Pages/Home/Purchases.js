import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const Purchases = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://polar-mountain-70911.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  let quantity = parseInt(product.minimum);

  const [count, setCount] = useState(100);

  const [disabled, setDisabled] = useState(false);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handelDec = () => {
    setCount(count - 1);
  };

  const ava_product = parseInt(product.available);

  useEffect(() => {
    if (count >= 100 || ava_product < count) setDisabled(false);
    else setDisabled(true);
  }, [count, ava_product]);

  let totalPrice = parseInt(product.price) * count;

  const { register, handleSubmit } = useForm();

  const onSubmit = (event) => {
    event.preventDefault();
    let quantity = document.getElementById("quantity").value;
    let total_price = document.getElementById("total_price").value;

    const user_info = {
      name: event.target.name.value,
      email: event.target.email.value,
      product_name: event.target.product_name.value,
      address: event.target.address.value,
      contact_number: event.target.contact_number.value,
      quantity,
      total_price,
    };

    fetch("https://polar-mountain-70911.herokuapp.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user_info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Items added successfully.");
          event.target.reset();
        }
      });
  };

  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-40 my-16">
      <div className="card lg:max-w-lg bg-base-100 lg:rounded-r">
        <figure className="px-10 pt-10">
          <img
            className="rounded-xl"
            id="product_name"
            style={{ height: "200px", width: "350px" }}
            src={product.img}
            alt=""
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.name}</h2>
          <p>
            <small> {product.description} </small>
          </p>
          <p>
            <small>Minimum Order: {product.minimum} </small>
          </p>
          <p>
            <small> Available: {product.available} </small>
          </p>
          <p>Price: {product.price} </p>
          <div className="card-actions"></div>
        </div>
      </div>

      <div>
        <div className="card lg:max-w-lg bg-base-100 lg:rounded-l lg:pl-12">
          <div className="flex">
            <p className="pr-12">Quantity</p>
            <button onClick={handelDec} className="btn-error px-3 ">
              {" "}
              -
            </button>
            <input
              type="text"
              className="text-center"
              value={count}
              id="quantity"
            />
            <button onClick={handleInc} className="btn-success px-3 ">
              +
            </button>
          </div>
          <p className="text-error"><small>please order at list {product.minimum} quantity </small></p>

          <div className="flex mt-6">
            <p className="pr-12">Total Price: </p>
            <input
              type="text"
              className="text-center"
              value={totalPrice}
              id="total_price"
            />
          </div>

          <br />

          <form onSubmit={onSubmit}>
            <label className="block" htmlFor="">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user?.displayName}
              className="input input-bordered w-full"
              disabled
              readOnly
            />
            <label className="block mt-2" htmlFor="">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email}
              disabled
              readOnly
              className="input input-bordered w-full  mb-2"
            />
            <label className="block mt-2" htmlFor="">
              Product Name:
            </label>
            <input
              type="text"
              id="product"
              name="product_name"
              value={product?.name}
              disabled
              readOnly
              className="input input-bordered w-full  mb-2"
            />
            <label className="block mt-2" htmlFor="">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full  mt-2 mb-2"
              required
            />
            <label className="block mt-2" htmlFor="">
              Contact Number
            </label>
            <input
              type="text"
              id="phone"
              name="contact_number"
              placeholder="Contact number"
              className="input input-bordered w-full  mb-2"
              required
            />

            <input
              type="submit"
              value="Submit"
              className="btn w-full mx-auto text-white btn-success mt-6"
              disabled={disabled}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchases;
