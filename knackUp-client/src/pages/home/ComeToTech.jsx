import { Link } from "react-router-dom";
import teacher from "../../assets/img/teacher.jpeg";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const ComeToTech = () => {
  return (
    <Container>
      <div className="w-full bg-cyan-950 py-2 rounded">
        <SectionTitle heading={"Become an instructor"} subHeading={"teach many of learners on Knack"}></SectionTitle>
        <div className="flex flex-col md:flex-row  justify-center items-center gap-5 md:gap-16">
          <div>
            <img src={teacher} alt="teacherImg" className="lg:h-72" />
          </div>
          <div className="flex-1 text-white max-w-md">
            <h1 className="text-3xl font-medium mb-5">Come Teach With Us</h1>
            <p>
              Embark on a teaching journey with Knack, our premier online skill
              learning platform. Inspire and educate as you contribute to a
              vibrant community of learners and creators.
            </p>
            <Link to="/tech">
              <button className="mt-3 btn text-white bg-gradient-to-r from-cyan-500 to-cyan-700 space-y-5 md:space-y-10">
                {" "}
                Start Tech Today{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ComeToTech;
