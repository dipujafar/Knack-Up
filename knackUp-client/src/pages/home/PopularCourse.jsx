import useClasses from "../../hook/useClasses";
import Container from "../../components/shared/Container";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/shared/SectionTitle";
import Aos from "aos";
import { useEffect } from "react";

const PopularCourse = () => {
  const [classes, isLoading] = useClasses();

  useEffect(() => {
    Aos.init();
  }, []);
  

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-orange-600"></span>
      </div>
    );
  }

  return (
    <Container>
        <SectionTitle heading="Popular Courses" subHeading='These courses are most enrolled'></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3" >
        {classes?.slice(0, 8)?.map((course) => (
            <Link to={`/classes/${course?._id}`} key={course?._id}>
          <div
            className="card h-96  bg-cyan-800   opacity-90 text-gray-100 shadow-2xl" data-aos="fade-up"
            data-aos-duration="3000"
          >
            <figure>
              <img src={course?.image} alt="classImage" className="h-48" />
            </figure>
            <div className="p-4 ">
              <h2 className="card-title text-cyan-200 mb-2">{course?.title}</h2>
              <p>{course?.instructor}</p>
              <p>{course?.total_enrollment} enrolled</p>
              <p className="text-lg font-medium">${course?.price}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default PopularCourse;
