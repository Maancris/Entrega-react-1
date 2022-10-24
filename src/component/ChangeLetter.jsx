import React, { useState } from 'react';
import File from '../File';


  const ChangeLetter = ({ changeCard, first }) => {
    

    return (
        
            <div onClick={changeCard} >
                <h5 >{File[first].quote} </h5>
            </div>


        
    );
};

export default ChangeLetter;