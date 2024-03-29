import useClasses from "../../hook/useClasses";
import { useEffect, useState } from "react";
import Aos from "aos";
import Container from "../../components/shared/Container";
import TopBanner from "../../components/shared/TopBanner";
import banner from "../../assets/img/banner7.jpeg";
import ClassDetails from "./ClassDetails";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
  const [search, setSearch] = useState("");
  const [classes, isLoading, refetch] = useClasses(search);
  const reverseArray = [...classes]?.reverse()

  useEffect(() => {
    Aos.init();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearch(searchValue);
    refetch();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-cyan-600"></span>
      </div>
    );
  }

  return (
    <div className="space-y-5 md:space-y-10">
      <Helmet>
        <title>Knack | All Classes</title>
      </Helmet>
      <TopBanner
        img={banner}
        title={"Exciting online skill-building with Knack."}
        description={
          " Explore Knack's Diverse Skill Courses - Interactive Learning for Every Interest and Passion."
        }
      ></TopBanner>
      <Container>
        <div className="flex justify-center mb-3 text-white">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              id=""
              className="bg-blue-900 p-2 rounded border md:w-96"
              placeholder="search your favorite class"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-outline text-white ml-2"
            />
          </form>
        </div>
        <div
          id="classes"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {reverseArray?.map((course) => (
            <div
              key={course?._id}
              className="card  group  bg-gradient-to-r from-cyan-700 to-cyan-950 text-white shadow-xl border-2 border-r-sky-400 border-l-sky-700 border-t-sky-500 border-b-sky-300"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <figure className="">
                <img
                  src={course?.image}
                  alt="Movie"
                  className="md:h-[183px] w-full object-cover group-hover:scale-90 duration-1000"
                />
              </figure>
              <div className=" card-body">
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
                      document
                        .getElementById(`my_modal_${course?._id}`)
                        .showModal()
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
