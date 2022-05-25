import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <p>
          <span className='text-xl'></span><small> {review.name} </small>
        </p>
        <p>
          <span className='text-xl'></span><small> {review.email} </small>
        </p>
        <p>
          <span className='text-xl'>Feedback: </span><small> {review.feedback} </small>
        </p>
        <p>
          <span className='text-xl'>Rating: </span><small> {review.rating} </small>
        </p>
        
      </div>
    </div>
    );
};

export default Review;