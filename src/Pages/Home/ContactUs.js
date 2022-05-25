import React from 'react';

const ContactUs = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/gTWY0M9/02.jpg) "}}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-3xl font-bold">Stay connect with us</h1>
      <input type="text" placeholder="Type here your email address" class="input input-bordered input-success w-full max-w-xs mb-3" />
      <input type="text" placeholder="Type here your subject" class="input input-bordered input-success w-full max-w-xs mb-3" />
      <textarea class="textarea textarea-bordered w-full max-w-xs" placeholder="Your details"></textarea>
      <br />
      <button class="btn btn-primary py-2">Submit</button>
    </div>
  </div>
</div>
    );
};

export default ContactUs;