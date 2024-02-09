import React from 'react';
import Lottie from 'lottie-react';
import NotFoundAnimation from '../../assets/Lootties/not-found-animation.json'
const LoadingIndicator = () => {
    return (
        <div style={{ width: '50vh', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Lottie animationData={NotFoundAnimation} />
        </div>
    );
};

export default LoadingIndicator;