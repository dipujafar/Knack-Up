import Lottie from 'lottie-react'
import signAni from "../../assets/ani/sign_up-ani.json"

const SingUpAni = () => {
    return (
        <div >
        <Lottie animationData={signAni} loop={true}></Lottie>
      </div>
    );
};

export default SingUpAni;