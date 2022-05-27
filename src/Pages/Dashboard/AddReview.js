import React from "react";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const onSubmit = (event) => {
    event.preventDefault();

    const review = {
      name: event.target.name.value,
      email: event.target.email.value,
      feedback: event.target.feedback.value,
      rating: event.target.rating.value,
    };

    fetch("https://polar-mountain-70911.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Review added successfully.");
          event.target.reset();
        }
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label className="block" htmlFor="">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user?.displayName}
          className="input input-bordered w-full max-w-xs"
          disabled
          readOnly
        />
        <label className="block mt-2" htmlFor="">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user?.email}
          disabled
          readOnly
          className="input input-bordered w-full max-w-xs mb-2"
        />

        <label className="block" htmlFor="">
          Feedback
        </label>
        <input
          type="text"
          name="feedback"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="block mt-2" htmlFor="">
          Rating
        </label>
        <input
          type="number"
          name="rating"
          placeholder="Type here rating"
          className="input input-bordered w-full max-w-xs mb-2"
          required
        />
        <br />

        <input
          type="submit"
          value="Submit"
          className="btn mx-auto text-white btn-success mt-6"
        />
      </form>
    </div>
  );
};

export default AddReview;
