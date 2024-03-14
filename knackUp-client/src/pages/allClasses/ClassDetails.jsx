/* eslint-disable react/prop-types */
const ClassDetails = ({ course }) => {
  console.log(course);
  return (
    <div className="modal-box bg-cyan-900">
      <div className="card bg-transparent ">
        <figure>
          <img src={course?.image} alt="Shoes" />
        </figure>
        <div className="card-body text-slate-200">
          <h2 className="card-title text-cyan-200">{course?.title}</h2>
          <p>{course?.instructor}</p>
          <p>{course?.short_description}</p>
          <p>{course?.total_enrollment} total enrolled yet.</p>
          <div className="">
            <p className="text-lg font-medium inline mr-5">${course?.price}</p>
            <s className="">${course?.old_price}</s>
          </div>
        </div>
      </div>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn mr-2  text-white bg-gradient-to-r from-cyan-600 to-cyan-900" >Pay & Enroll</button>
          <button className="btn btn-outline  btn-error">Close</button>
        </form>
      </div>
    </div>
  );
};

export default ClassDetails;
