import React from 'react';
import Like from '../likeCounter/Like';
import './band.css';

const GenerateBandCard = (bands) => {
    console.log(bands);

    const getBands = bands.map((band) => {
        return (
            <div key={band.ID} className='band-card'>
                <h1>{band.band_name}</h1>
                <ul className='band-content'>
                    <li className='band-item'>Formed: {band.formed}</li>
                    {band.split === '-' ? (
                        ''
                    ) : (
                        <li className='band-item band-split'>Split: {band.split}</li>
                    )}
                    <li className='band-item'>Origin: {band.origin}</li>
                    <li className='band-item'>Fans: {band.fans}</li>
                </ul>
                {band.split === '-' ? <Like /> : undefined}
            </div>
        );
    });
    return getBands;
};

const Band = ({ bands }) => {
    return <div className='band-container'>{GenerateBandCard(bands)}</div>;
};

export default Band;
