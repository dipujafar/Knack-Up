import { Helmet } from "react-helmet-async";
import Container from "../../components/shared/Container";
import LoginForm from "./LoginForm";
import LoginAni from "./LoginAni";



const Login = () => {
    return (
        <div  className="bg-gradient-to-r from-cyan-950 to-cyan-800">
        <Helmet>
          <title>Knack | Login</title>
        </Helmet>
        <Container>
          <div className="min-h-screen bg-cover flex flex-col ">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
               <LoginForm></LoginForm>
              </div>
              <div className="flex-1">
                <LoginAni></LoginAni>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Login;