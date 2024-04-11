/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import ClassUpdate from "./ClassUpdate";

const TeacherClassDetails = ({ cls, refetch }) => {
  const axiosSecure = useAxiosSecure();


  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this course!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/teacherClass/${cls._id}`);
        console.log(res?.data);
        if (res?.data?.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your course has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
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
          <div className="card-actions justify-end mt-5">
            {cls?.status === "accepted" ? (
              <button className="btn  bg-gradient-to-r from-cyan-800 to-sky-700 rounded text-white">
                Details
              </button>
            ) : (
              <button
                disabled
                className="btn  bg-gradient-to-r from-cyan-800 to-sky-700 rounded text-white"
              >
                Details
              </button>
            )}

            {/* Update Function */}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn  bg-gradient-to-r from-cyan-800 to-sky-700 rounded text-white"
              onClick={() => document.getElementById(`my_modal_${cls?._id}`).showModal()}
            >
              Update
            </button>
            <dialog
              id={`my_modal_${cls?._id}`}
              className="modal modal-bottom sm:modal-middle"
            >
             <ClassUpdate cls={cls} refetch={refetch}></ClassUpdate>
            </dialog>

            {/* Delete Function  */}
            <button
              onClick={handleDelete}
              className="btn btn-outline btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherClassDetails;
