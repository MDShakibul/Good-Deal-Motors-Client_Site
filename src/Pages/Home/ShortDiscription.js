import React from 'react';
import image from '../../images/engneer.png';

const ShortDiscription = () => {
    return (
        <div class="hero min-h-screen lg:px-12 ">
  <div class="hero-content flex-col lg:flex-row">
    <img src={image} class="max-w-sm rounded-lg object-cover" alt=''/>
    <div className='lg:pl-20'>
      <h1 class="text-5xl font-bold">Our Target</h1>
      <p class="py-6">Give best services all over the word. Every single person can buy our product. Our products is best and low prices.It is the fastest-growing company in world. It is good reputed company. People feel proud to be a part of our company and the Work environment is good.</p>
    </div>
  </div>
</div>
    );
};

export default ShortDiscription;