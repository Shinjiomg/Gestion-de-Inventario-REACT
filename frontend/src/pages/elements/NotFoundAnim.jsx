import Lottie from 'lottie-react';
import NotFoundAnimation from '../../assets/Lootties/not-found-animation.json'

export const NotFoundAnim = () => {
    return (
        <div style={{ width: '50vh', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Lottie animationData={NotFoundAnimation} />
        </div>
    )
}
