import React from 'react';
import Lottie from "react-lottie";
import animationData from '../animations/roboLottie.json';

const LottieAnimRobo = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRation : "xMidYMid slice"
        }
    }

    return (
        <div>
            <h3>Robo</h3>
            <br></br>
            <Lottie options={defaultOptions} height={100} width={100}
            />
        </div>
    )
}

export default LottieAnimRobo;