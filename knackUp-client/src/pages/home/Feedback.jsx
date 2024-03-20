import useFeedback from "../../hook/useFeedback";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const Feedback = () => {
  const [feedbacks, isLoading] = useFeedback();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-cyan-600"></span>
      </div>
    );
  }

  return (
    <Container>
      <SectionTitle
        heading={"Feedback"}
        subHeading={"What our student say"}
      ></SectionTitle>
      <div className="max-w-xl mx-auto">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
        >
          {feedbacks?.map((feedback) => (
            <SwiperSlide key={feedback._id}>
              <div className="card w-96 mx-auto  bg-gradient-to-r from-cyan-900 to-cyan-950   text-white shadow-xl">
                <figure>
                  <img
                    src={feedback?.image}
                    alt="profile"
                    className="rounded-full w-40"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-cyan-200">{feedback?.name}</h2>
                  <p>{feedback?.review}</p>
                  <div className="mt-4 text-cyan-200">
                    <p>{feedback?.class_title}</p>
                    <p>{feedback?.instructor}</p>
                  </div>
                  <div className="card-actions justify-end">
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={parseInt(feedback?.rating)}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Feedback;
