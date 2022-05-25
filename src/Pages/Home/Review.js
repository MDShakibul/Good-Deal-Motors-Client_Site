import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <p>
          <span className='text-xl'>Name: </span><small> {review.person} </small>
        </p>
        <p>
          <span className='text-xl'>Comments: </span><small> {review.description} </small>
        </p>
        <p>
          <span className='text-xl'>Rating: </span><small> {review.rating} </small>
        </p>
        
      </div>
    </div>
    );
};

export default Review;