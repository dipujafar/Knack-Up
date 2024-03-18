import { useNavigate } from "react-router-dom";
import Container from "../../../components/shared/Container";
import useAuth from "../../../hook/useAuth";
import useMyCourse from "../../../hook/useMyCourse";

const EnrollClass = () => {
  const [myCourse, isLoading] = useMyCourse();
  const { user } = useAuth();
  const navigate = useNavigate();


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-cyan-600"></span>
      </div>
    );
  }

  return (
    <Container>
      <div className="text-white">
        <div>
          <h1 className="text-2xl font-medium text-blue-200 mb-5 md:mb-10">
            Welcome {user?.displayName}, Ready For Your Next Lesson?
          </h1>
        </div>
        {myCourse?.length ? (
          <div className="grid grid-cols-1 gap-5">
            {myCourse.map((cls) => (
              <div
                key={cls?._id}
                className="card lg:card-side bg-gradient-to-r from-cyan-700 to-cyan-600 shadow-xl"
              >
                <figure className="lg:w-1/2">
                  <img
                    src={cls?.image}
                    alt="Title_banner"
                    className="w-full md:h-72"
                  />
                </figure>
                <div className=" px-2 py-4 md:card-body">
                  <h2 className="text-xl md:card-title">
                    {cls?.title} With {cls?.instructor}
                  </h2>
                  <p>{cls?.instructor}</p>
                  <div className="card-actions justify-end">
                    <button className="btn  bg-gradient-to-r from-cyan-800 to-sky-700 rounded text-white">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl">At this time you have no class.</h1>
            <p>Explore Your Favorite Class</p>
            <btn onClick={()=>navigate("/allClasses")} className="btn  bg-gradient-to-r from-cyan-800 to-sky-700 rounded text-white">Explore Classes</btn>
          </div>
        )}
      </div>
    </Container>
  );
};

export default EnrollClass;
