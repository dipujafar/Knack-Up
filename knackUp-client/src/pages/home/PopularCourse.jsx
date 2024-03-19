import useClasses from "../../hook/useClasses";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import Aos from "aos";
import { useEffect } from "react";
import ClassDetails from "../allClasses/ClassDetails";

const PopularCourse = () => {
  const [classes, isLoading] = useClasses();
  // const max = classes?.reduce(function(prev, current){
  //   return (prev && prev?.total_enrollment > current?.total_enrollment);
  // })

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
    <Container>
      <SectionTitle
        heading="Popular Courses"
        subHeading="These courses are most enrolled"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {classes?.slice(0, 8)?.map((course) => (
          <div
            key={course?._id}
            className="card h-96  bg-cyan-800   opacity-90 text-gray-100 shadow-2xl border-2 border-r-sky-400 border-l-sky-700 border-t-sky-500 border-b-sky-300"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <figure>
              <img src={course?.image} alt="classImage" className="h-48" />
            </figure>
            <div className=" p-4 ">
              <h2 className="card-title text-cyan-200 mb-2">{course?.title}</h2>
              <p>{course?.instructor}</p>
              <p>{course?.total_enrollment} enrolled</p>
              <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${course?.price}</p>
                <s className="">${course?.old_price}</s>
                <div className="flex justify-end ml-5">
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className=" btn text-white  bg-gradient-to-r from-cyan-500 to-cyan-600"
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
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PopularCourse;
