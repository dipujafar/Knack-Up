import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa";

const TechOnForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};
  return (
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

        <button className="w-full btn bg-blue-100 btn-sm">
          <input type="submit" value="Submit" className="w-full" />
        </button>
      </form>
    </div>
  );
};

export default TechOnForm;
