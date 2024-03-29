import { useForm } from "react-hook-form";
import Container from "../../../components/shared/Container";
import { FaCamera } from "react-icons/fa";
import SectionTitle from "../../../components/shared/SectionTitle";
import { imageUpload } from "../../../api/image";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddClass = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { description, name, price, title, image, discount } = data || {};

    const imageFile = image[0];
    const imageData = await imageUpload(imageFile);

    const clsData = {
      title,
      instructor: name,
      email: user?.email,
      image: imageData?.data?.url,
      price: price,
      old_price: parseInt(price) - parseInt(discount),
      short_description: description,
      status: "pending"
    };

    const res = await axiosSecure.post("/classes", clsData);
    if(res?.data?.insertedId){
      toast("successfully add this class wait for admin approve");
      reset();
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Knack | Teacher Add Class</title>
      </Helmet>
      <div className="text-white">
        <SectionTitle
          heading={"Add Class"}
          subHeading={"Promote knack platform usage for teachers' top classes."}
        ></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name input */}
          <div className="flex flex-col md:flex-row gap-1 mb-5 ">
            <label className="md:w-40">
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
            <label className="md:w-40">
              Course Title <sup className="text-red-600">*</sup> :
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

          {/* price input */}
          <div className="flex flex-col md:flex-row gap-1 mb-5 ">
            <label className="md:w-40">
              Course Price <sup className="text-red-600">*</sup> :
            </label>
            <input
              type="number"
              name="title"
              {...register("price", { required: true })}
              id=""
              placeholder="Price"
              className="w-full md:w-3/4 mx-auto py-1 px-2  bg-blue-950 rounded"
            />
          </div>
          {errors.price?.type === "required" && (
            <span className="text-red-600 ml-10">Price is required</span>
          )}

          {/* discount input */}
          <div className="flex flex-col md:flex-row gap-1 mb-5 ">
            <label className="md:w-40">
              Discount <sup className="text-red-600">*</sup> :
            </label>
            <input
              type="number"
              name="title"
              {...register("discount", { required: true })}
              id=""
              placeholder="Discount"
              className="w-full md:w-3/4 mx-auto py-1 px-2  bg-blue-950 rounded"
            />
          </div>
          {errors.discount?.type === "required" && (
            <span className="text-red-600 ml-10">Discount is required</span>
          )}

          {/* description input */}
          <div className="flex flex-col items-center md:flex-row gap-1 mb-5 ">
            <label className="md:w-40">
              Short Description <sup className="text-red-600">*</sup> :
            </label>
            <textarea
              type="number"
              name="title"
              {...register("description", { required: true })}
              id=""
              placeholder="Short description"
              className="w-full md:w-3/4 mx-auto py-1 px-2  bg-blue-950 rounded"
            />
          </div>
          {errors.description?.type === "required" && (
            <span className="text-red-600 ml-10">Description is required</span>
          )}

          {/* Course image */}
          <div className="mb-5">
            <label className="flex gap-2 items-center mb-2">
              <FaCamera className="text-2xl" />
              Class Banner <sup className="text-red-600">*</sup> :
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

          <button className={`w-full btn bg-blue-100 btn-sm`}>
            <input type="submit" value="Add Class" className="w-full" />
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddClass;
