import React from 'react';
import marketShare from '../../images/market share.jpg';
import customer from '../../images/customer.png';
import Reviews from '../../images/reviews.jpg';
import Business_summary_card from './Business_summary_card';

const BusinessSummary = () => {
    const business_summarys = [
        {
            id: 1,
            name: 'Market Share',
            amount: '55%',
            img: marketShare
        },
        {
            id: 2,
            name: 'Customers',
            amount: '700K+',
            img: customer
        },
        {
            id: 3,
            name: 'Feedbacks',
            amount: '520k+',
            img: Reviews
        },
    ];
    return (
        <div className='my-28 lg:px-12'>
            <div className='text-center'>
                <h2 className="text-4xl text-primary font-bold uppercase">Our achievement</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    business_summarys.map(business_summary =><Business_summary_card
                        key={business_summary.id}
                        business_summary={business_summary}
                    ></Business_summary_card>)
                }
            </div>
        </div>
    );
};

export default BusinessSummary;