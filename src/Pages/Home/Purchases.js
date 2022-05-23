import React from 'react';
import { useParams } from 'react-router-dom';

const Purchases = () => {
    const {id} = useParams();
    return (
        <div>
            <h1 className=''>sdvsdvsdv{id}</h1>
        </div>
    );
};

export default Purchases;