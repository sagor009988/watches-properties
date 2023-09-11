import React from 'react';

const Watch = ({watch}) => {
    const {brandname,price,color}=watch
    return (
        <div>
            <h2>Watches Brand:{brandname}</h2>
            <h2>Watch Price: {price}</h2>
        </div>
    );
};

export default Watch;