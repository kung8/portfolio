import React from 'react';
import queueBtn from '../../Assets/queue-btn.png';

export const Queue = () => {
    const queue = () => {

    }
    
    return (
        <>
            <img className="logo-btn queue-logo" src={queueBtn} alt="queue" onClick={queue} />
        </>
    )
}