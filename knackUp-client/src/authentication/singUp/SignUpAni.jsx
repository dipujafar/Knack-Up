import Lottie from 'lottie-react'
import signAni from "../../assets/ani/sign_up-ani.json"

const SignUpAni = () => {
    return (
        <div >
        <Lottie animationData={signAni} loop={true}></Lottie>
      </div>
    );
};

export default SignUpAni;