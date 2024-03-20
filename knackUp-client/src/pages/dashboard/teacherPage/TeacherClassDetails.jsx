/* eslint-disable react/prop-types */


const TeacherClassDetails = ({cls}) => {
  return (
    <div>
      <div className="card lg:card-side bg-gradient-to-r from-cyan-700 to-cyan-800 shadow-xl text-white border-4  border-r-sky-400 border-l-sky-700 border-t-sky-500 border-b-sky-300">
        <figure className="lg:w-1/2">
          <img src={cls?.image} alt="Title_banner" className="w-full md:h-72" />
        </figure>
        <div className=" px-1 py-4 md:card-body">
          <h2 className="text-xl md:card-title">
            {cls?.title} With {cls?.instructor}
          </h2>
          <p>{cls?.short_description}</p>
          <p> Price: ${cls?.price}</p>
          <p> Status: {cls?.status}</p>
          <div className="card-actions justify-end">
            <button className="btn  bg-gradient-to-r from-cyan-800 to-sky-700 rounded text-white">
                See Details
            </button>
            <button className="btn  bg-gradient-to-r from-cyan-800 to-sky-700 rounded text-white">
              Update
            </button>
            <button className="btn btn-outline btn-error">
                Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherClassDetails;
