import { Helmet } from "react-helmet-async";
import SignUpForm from "./SignUpForm"
import SignUpAni from "./SignUpAni";
import skillBg from "../../assets/img/skillbg2.jpeg";
import Container from "../../components/shared/Container";

const SignUp = () => {
  return (
    <div style={{ backgroundImage: `url(${skillBg})` }} className="bg-cover">
      <Helmet>
        <title>Knack | Sign Up</title>
      </Helmet>
      <Container>
        <div className="min-h-screen bg-cover flex flex-col justify-between items-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-">
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
