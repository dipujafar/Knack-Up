import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { toast } from "react-toastify";
import useCart from "../../hook/useCart";

/* eslint-disable react/prop-types */
const ClassDetails = ({ course }) => {
  const {user} = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [ , , refetch] = useCart();
  const handleAddCart = async course =>{
    console.log(course)
   
    const courseData = {
      courseId: course?._id,
      title: course?.title,
      instructor: course?.instructor,
      instructor_email: course?.email,
      email: user?.email,
      price: course?.price,
      image: course?.image
    }

     const res = await axiosSecure.post('/cart', courseData);
     if(res?.data?.insertedId){
      toast.success("Successfully added your cart");
      refetch();
     }
  }
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
          {
            user 
            ?
            <button onClick={()=> handleAddCart(course)} className="btn mr-2  text-white bg-gradient-to-r from-cyan-600 to-cyan-900" >Add to cart</button>
            :
            <button onClick={()=>navigate('/login')} className="btn mr-2  text-white bg-gradient-to-r from-cyan-600 to-cyan-900" >Add to cart</button>
          }
        
          <button className="btn btn-outline  btn-error">Close</button>
        </form>
      </div>
    </div>
  );
};

export default ClassDetails;
