import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/Lootties/loading-animation.json'


export const LoadingAnim = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Lottie animationData={loadingAnimation} />
        </div>
    )
}