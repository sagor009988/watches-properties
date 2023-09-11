import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multy,firstNumberDevideBySecondNumber as divided } from '../../Utilities/calculate';
// import add from '../../Utilities/calculate';

const Sunglass = () => {

    const first=10;
    const second=5;
    const sum=add(first,second)
    const multyR=multy(first,second)
    const vaggkor=divided(first,second)
    return (
        <div>
           <Watch></Watch> 
        </div>
    );
};

export default Sunglass;