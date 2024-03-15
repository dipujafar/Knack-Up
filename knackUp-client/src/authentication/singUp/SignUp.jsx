import { Helmet } from "react-helmet-async";
import SignUpForm from "./SignUpForm"
import SignUpAni from "./SignUpAni";
import Container from "../../components/shared/Container";

const SignUp = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-950 to-cyan-800">
      <Helmet>
        <title>Knack | Sign Up</title>
      </Helmet>
      <Container>
        <div className="min-h-screen bg-cover flex flex-col justify-between items-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="flex-1">
             <SignUpForm></SignUpForm>
            </div>
            <div className="flex-1">
              <SignUpAni></SignUpAni>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
