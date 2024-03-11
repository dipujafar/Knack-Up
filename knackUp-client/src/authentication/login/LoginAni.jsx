import Lottie from 'lottie-react'
import loginAni from "../../assets/ani/login.json"

const LoginAni = () => {
    return (
        <div >
        <Lottie animationData={loginAni} loop={true}></Lottie>
      </div>
    );
};

export default LoginAni;