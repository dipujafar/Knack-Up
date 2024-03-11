import { Helmet } from "react-helmet-async";
import SIngUpForm from "./SIngUpForm";
import SingUpAni from "./SingUpAni";
import skillBg from "../../assets/img/skillbg2.jpeg";
import Container from "../../components/shared/Container";

const SingUp = () => {
  return (
    <div style={{ backgroundImage: `url(${skillBg})` }} className="bg-cover">
      <Helmet>
        <title>Knack | Sign Up</title>
      </Helmet>
      <Container>
        <div className="min-h-screen bg-cover flex flex-col justify-between items-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-">
            <div className="flex-1">
              <SIngUpForm></SIngUpForm>
            </div>
            <div className="flex-1">
              <SingUpAni></SingUpAni>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingUp;
