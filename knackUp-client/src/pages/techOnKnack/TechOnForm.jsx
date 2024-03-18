import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa";
import { imageUpload } from "../../api/image";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAdmin from "../../hook/useAdmin";
import Container from "../../components/shared/Container";
import { toast } from "react-toastify";
import useTeacher from "../../hook/useTeacher";
import useTeacherReq from "../../hook/useTeacherReq";
import { useNavigate } from "react-router-dom";

const TechOnForm = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const  [isTeacher] = useTeacher();
  const [teacherReq] = useTeacherReq();
  const isReq = teacherReq.find(req => req?.email === user?.email) || {};
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, title, experience, category, image } = data || {};

    const imageFile = image[0];
    const imageData = await imageUpload(imageFile);

    const reqData = {
      name,
      email: user?.email,
      image: imageData?.data?.url,
      experience,
      title,
      category,
      status: "pending",
    };

    const res = await axiosSecure.post("/users/teacherReq", reqData);
    if(res?.data?.insertedId){
      toast("Your request is pending. Please wait for approve");
    }
  };

  if (isAdmin) {
    return (
      <Container>
        <div className="text-white min-h-[50vh] flex justify-center items-center">
          <div>
          <h1 className="text-3xl text-gray-300 mb-2 text-center">Your are an Admin </h1>
          <p className="text-xl text-gray-300  text-center">You are not eligible for the application</p>
          </div>
        </div>
      </Container>
    );
  }

  if (isTeacher) {
    return (
      <Container>
        <div className="text-white min-h-[50vh] flex justify-center items-center">
          <div>
          <h1 className="text-3xl text-gray-300 mb-2 text-center">Your are already a teacher</h1>
          <p className="text-xl text-gray-300  text-center">You are not eligible for the application</p>
          </div>
        </div>
      </Container>
    );
  }

  if(!user){
    return (
      <Container>
        <div className="text-white min-h-[50vh] flex justify-center items-center">
          <div>
          <h1 className="text-3xl text-gray-300 mb-4 text-center">Please login and apply for tech on knack </h1>
          <div className="flex items-center justify-center">
          <p onClick={()=>navigate("/login")} className="btn bg-gradient-to-r from-cyan-900 to-cyan-700 text-white w-40 ">Login</p>
          </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <>
    <>
      {isReq?.status === "pending"?
      <div className="text-center text-white  p-3 bg-gray-500 text-2xl uppercase">
        Your a application is pending
      </div>
       :
       ""}
    </>
    <>
      {isReq?.status === "rejected"?
      <div className="text-center text-white  p-3 bg-gray-500 text-2xl uppercase">
        Your a application is Rejected
      </div>
       :
       ""}
    </>
    <div className="mt-5 md:mt-10 md:w-3/4 bg-black bg-transparent bg-opacity-50  mx-auto border  rounded shadow-lg shadow-gray-300 p-5 text-white">
      <h1 className="text-2xl font-medium mb-5 uppercase text-center">
        Apply Now
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name input */}
        <div className="flex flex-col md:flex-row gap-1 mb-5 ">
          <label>
            Full Name <sup className="text-red-600">*</sup> :
          </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            id=""
            placeholder="Your Name"
            className="w-full md:w-3/4 mx-auto py-1 px-2  bg-blue-950 rounded"
          />
        </div>
        {errors.name?.type === "required" && (
          <span className="text-red-600 ml-10">Name is required</span>
        )}

        {/* Title input */}
        <div className="flex flex-col md:flex-row gap-1 mb-5 ">
          <label>
            Your Title <sup className="text-red-600">*</sup> :
          </label>
          <input
            type="text"
            name="title"
            {...register("title", { required: true })}
            id=""
            placeholder="Title"
            className="w-full md:w-3/4 mx-auto py-1 px-2  bg-blue-950 rounded"
          />
        </div>
        {errors.title?.type === "required" && (
          <span className="text-red-600 ml-10">Title is required</span>
        )}

        {/* Experience input */}
        <div className="flex flex-col md:flex-row gap-1 mb-5 ">
          <label>
            Experience <sup className="text-red-600">*</sup> :
          </label>
          <select
            {...register("experience", { required: true })}
            className="w-full md:w-3/4 mx-auto py-1 px-2  bg-blue-950 rounded"
          >
            <option value="beginner">beginner</option>
            <option value="intermediate"> intermediate</option>
            <option value="experienced">experienced</option>
          </select>
        </div>
        {errors.experience?.type === "required" && (
          <span className="text-red-600 ml-10">Experience is required</span>
        )}

        {/* Category input */}
        <div className="flex flex-col md:flex-row gap-1 mb-5 ">
          <label>
            Category <sup className="text-red-600">*</sup> :
          </label>
          <select
            {...register("category", { required: true })}
            className="w-full md:w-3/4 mx-auto py-1 px-2  bg-blue-950 rounded"
          >
            <option value="programming">programming</option>
            <option value="design">design</option>
            <option value="marketing">marketing</option>
            <option value="business">business</option>
            <option value="communication">communication</option>
            <option value="other">other</option>
          </select>
        </div>
        {errors.category?.type === "required" && (
          <span className="text-red-600 ml-10">Category is required</span>
        )}

        {/* profile image */}
        <div className="mb-5">
          <label className="flex gap-2 items-center mb-2">
            <FaCamera className="text-2xl" />
            Profile <sup className="text-red-600">*</sup> :
          </label>
          <input
            type="file"
            name="image"
            {...register("image", { required: true })}
            id=""
            accept="image/*"
          />
        </div>
        {errors.image?.type === "required" && (
          <span className="text-red-600 ml-10">Image is required</span>
        )}
        {
          isReq?.status === "rejected"?
          <button className={`w-full btn bg-blue-100 btn-sm ${isReq?.status ==="pending" && "btn-disabled"}`}>
          <input type="submit" value="Request Another" className="w-full" />
        </button>
          :
        <button className={`w-full btn bg-blue-100 btn-sm ${isReq?.status ==="pending" && "btn-disabled"}`}>
          <input type="submit" value="Submit for review" className="w-full" />
        </button>
        }
      </form>
    </div>
    </>
  );
};

export default TechOnForm;
