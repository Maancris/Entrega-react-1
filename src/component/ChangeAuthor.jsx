import React from 'react';
import File from '../File'

const ChangeAuthor = ({ ChangeLetter, first }) => {
    return (
        <div onClick={ChangeLetter}>
            <h6>{File[first].author}</h6>
        </div>
    );
};

export default ChangeAuthor;