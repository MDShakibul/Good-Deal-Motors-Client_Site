import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [profile, setProfile] = useState();
  const [user] = useAuthState(auth);
  const onSubmit = (event) => {
    event.preventDefault();
    const profile = {
      name: event.target.name.value,
      email: event.target.email.value,
      location: event.target.location.value,
      contact: event.target.contact.value,
      details: event.target.details.value,
    };

    fetch("https://polar-mountain-70911.herokuapp.com/myprofile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Wow you save your profile");
          event.target.reset();
        } else toast.error("Some thing went wrong");
      });
  };

  useEffect(() => {
    if (user) {
      fetch(
        `https://polar-mountain-70911.herokuapp.com/show_myprofile?user=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setProfile(data[0]));
    }
  }, [user]);

  return (
    <div>
      <div>
        <p>Name: {profile?.name} </p>
        <p>Email: {user?.email}</p>
        <p>Location: {profile?.location}</p>
        <p>Contact: {profile?.contact}</p>
        <p>Details: {profile?.details}</p>
      </div>
      <div className="flex justify-center items-center mt-3">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name here"
            className="input input-bordered w-full mx-auto mt-2 mb-2"
          />
          <input
            type="email"
            name="email"
            value={user?.email}
            disabled
            readOnly
            placeholder="Email here"
            className="input input-bordered w-full mx-auto mt-2 mb-2"
          />
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            className="input input-bordered w-full mx-auto mt-2 mb-2"
          />
          <input
            type="text"
            name="contact"
            placeholder="Your Contact Number"
            className="input input-bordered w-full mx-auto mt-2 mb-2"
          />
          <input
            type="text"
            name="details"
            placeholder="Your details"
            className="input input-bordered w-full mx-auto mt-2 mb-2"
          />
          <input
            type="submit"
            value="Submit"
            className="btn w-full mx-auto text-white btn-success mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
