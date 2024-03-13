import Banner from "./Banner";
import Collaborators from "./Collaborators";
import ComeToTech from "./ComeToTech";
import Stat from "./Stat";


const Home = () => {
    return (
        <div className="space-y-5 md:space-y-10">
            <Banner></Banner>
            <Collaborators></Collaborators>
            <Stat></Stat>
            <ComeToTech></ComeToTech> 
        </div>
    );
};

export default Home;