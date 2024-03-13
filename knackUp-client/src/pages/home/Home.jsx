import Banner from "./Banner";
import Collaborators from "./Collaborators";
import ComeToTech from "./ComeToTech";
import Feedback from "./Feedback";
import PopularCourse from "./PopularCourse";
import Stat from "./Stat";


const Home = () => {
    return (
        <div className="space-y-5 md:space-y-10">
            <Banner></Banner>
            <Collaborators></Collaborators>
            <PopularCourse></PopularCourse>
            <Stat></Stat>
            <ComeToTech></ComeToTech>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;