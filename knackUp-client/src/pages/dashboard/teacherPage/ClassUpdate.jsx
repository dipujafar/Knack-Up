/* eslint-disable react/prop-types */

import { toast } from "react-toastify";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useTeacherClass from "../../../hook/useTeacherClass";

const ClassUpdate = ({ cls}) => {
  const axiosSecure = useAxiosSecure();
  const [ , ,refetch] = useTeacherClass();
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const updateData = { title, price, description };
    const res = await axiosSecure.put(`/classUpdate/${cls?._id}`, updateData);
    console.log(res?.data);
    if(res?.data?.modifiedCount > 0){
      toast.success("Successfully Update this course");
      refetch();
    }
  };
  return (
    <div className="modal-box bg-cyan-900">
      <h3 className="font-bold text-lg mb-5">Update</h3>
      <form onSubmit={handleUpdate}>
        <div className="flex flex-col md:flex-row gap-2 ">
          <input
            defaultValue={cls?.title}
            name="title"
            type="text"
            className="bg-blue-950 py-1 px-2 w-full"
            placeholder="Title"
          />
          <input
            defaultValue={cls?.price}
            name="price"
            type="number"
            className="bg-blue-950 py-1 px-2  w-full"
            placeholder="Price"
          />
        </div>
        <div className="my-2">
          <textarea
            defaultValue={cls?.short_description}
            name="description"
            rows="3"
            className="bg-blue-950 py-1 px-2  w-full"
            placeholder="Description"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Update"
          className="mt-3 btn  bg-gradient-to-r from-cyan-800 to-sky-700 rounded text-white"
        />
      </form>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-outline btn-error">Close</button>
        </form>
      </div>
    </div>
  );
};

export default ClassUpdate;
