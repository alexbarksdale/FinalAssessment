import React, { useState } from 'react';
import './like.css';

const Like = () => {
    const [increase, setIncrease] = useState(0);

    return (
        <div className='like-container'>
            <button onClick={() => setIncrease(increase + 1)}>Like</button>
            <h1>{increase}</h1>
            <button onClick={() => setIncrease(increase - 1)}>Dislike</button>
        </div>
    );
};

export default Like;
