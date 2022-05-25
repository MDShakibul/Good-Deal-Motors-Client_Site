import React from 'react';

const Business_summary_card = ({business_summary}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={business_summary.img} alt="Shoes"  className="rounded-xl lg:h-52" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">{business_summary.amount}</h2>
            <h2 className="card-title">{business_summary.name}</h2>
            </div>
        </div>
    );
};

export default Business_summary_card;