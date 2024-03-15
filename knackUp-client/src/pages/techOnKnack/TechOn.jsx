import TopBanner from "../../components/shared/TopBanner";
import bannerBg from "../../assets/img/teacher4.jpg" 
import TechOnForm from "./TechOnForm";


const TechOn = () => {
    return (
        <div>
            <TopBanner img={bannerBg} title={"Come teach with us"} description={"Embark on a teaching journey with Knack, our premier online skill learning platform. Inspire and educate as you contribute to a vibrant community of learners and creators."}></TopBanner>
            <TechOnForm></TechOnForm>
        </div>
    );
};

export default TechOn;