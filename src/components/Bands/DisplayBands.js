import React from 'react';
import Band from './Band';
import data from '../../metal.json';
import './displayBand.css';

const DisplayBand = () => {
    return (
        <div>
            <h1 className='band-header'>There are {data.length} bands</h1>
            <Band bands={data} />
        </div>
    );
};

export default DisplayBand;
