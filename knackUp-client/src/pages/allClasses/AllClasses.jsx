import useClasses from "../../hook/useClasses";
import { useEffect } from "react";
import Aos from "aos";
import Container from "../../components/shared/Container";
import TopBanner from "../../components/shared/TopBanner";
import banner from "../../assets/img/banner7.jpeg";
import ClassDetails from "./ClassDetails";

const AllClasses = () => {
  const [classes, isLoading] = useClasses();

  useEffect(() => {
    Aos.init();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-cyan-600"></span>
      </div>
    );
  }

  return (
    <div className="space-y-5 md:space-y-10">
      <TopBanner
        img={banner}
        title={"Exciting online skill-building with Knack."}
        description={
          " Explore Knack's Diverse Skill Courses - Interactive Learning for Every Interest and Passion."
        }
      ></TopBanner>
      <Container>
        <div
          id="classes"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3"
        >
          {classes?.map((course) => (
            <div
              key={course?._id}
              className="card lg:card-side group lg:h-72 obbg-gradient-to-r from-cyan-700 to-cyan-950 text-white shadow-xl"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <figure className="lg:w-7/12">
                <img
                  src={course?.image}
                  alt="Movie"
                  className="h-52 lg:h-72 w-full object-cover group-hover:scale-90 duration-1000"
                />
              </figure>
              <div className=" p-4 md:card-body lg:w-1/3">
                <h2 className="md:card-title text-lg text-cyan-200 font-bold">
                  {course?.title}
                </h2>
                <p>{course?.instructor}</p>
                <div>
                  <p>{course?.total_enrollment} enrolled</p>
                  <div className="flex items-center gap-5">
                    <p className="text-lg font-medium">${course?.price}</p>
                    <s className="">${course?.old_price}</s>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className=" btn text-white  bg-gradient-to-r from-cyan-700 to-cyan-900"
                    onClick={() =>
                      document.getElementById(`my_modal_${course?._id}`).showModal()
                    }
                  >
                    Details
                  </button>
                  <dialog
                    id={`my_modal_${course?._id}`}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <ClassDetails course={course}></ClassDetails>
                  </dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllClasses;
