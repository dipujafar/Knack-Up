import TopBanner from "../../components/shared/TopBanner";
import Collaborators from "./Collaborators";
import ComeToTech from "./ComeToTech";
import Feedback from "./Feedback";
import PopularCourse from "./PopularCourse";
import Stat from "./Stat";
import banner from "../../assets/img/banner.jpeg";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div className="space-y-5 md:space-y-10">
            <Helmet>
                <title>Knack | Home</title>
            </Helmet>
           <TopBanner img={banner} title={"Unlock Your Potential with Knack!"} description={"Boost your skills on Knack! Learn easily online anytime, anywhere.Master new things effortlessly with our user-friendly platform."} button={"Enroll Today"} to={"/allClasses"}></TopBanner>
            <Collaborators></Collaborators>
            <PopularCourse></PopularCourse>
            <Stat></Stat>
            <ComeToTech></ComeToTech>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;