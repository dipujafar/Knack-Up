import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const Collaborators = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["collaborators"],
    queryFn: async () => {
      const res = await axios.get("collaboration.json");
      return res?.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-cyan-600"></span>
      </div>
    );
  }
  return (
    <Container>
      <div>
        <SectionTitle heading={"Our Happy collaborators."} subHeading={"Trusted by over 100 companies"}></SectionTitle>
        <div className="hidden md:block">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {data?.map((company, inx) => (
            <SwiperSlide key={inx}>
              <div className="card  lg:max-h-[350px] md:max-h-[250px] bg-cyan-900   opacity-90 text-gray-100 shadow-2xl">
                <figure className="px-10 pt-10">
                  <img src={company?.logo} alt="logo" className="max-h-40" />
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="card-title text-cyan-200">{company?.collaborators_company}</h2>
                  <p className="hidden lg:block">{company?.brief_description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div className=" md:hidden">
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
          {data?.map((company, inx) => (
            <SwiperSlide key={inx}>
              <div className="card  lg:max-h-[350px] md:max-h-[250px] bg-cyan-900   opacity-90 text-gray-100 shadow-2xl">
                <figure className="px-10 pt-10">
                  <img src={company?.logo} alt="logo" className="max-h-40" />
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="card-title text-cyan-200">{company?.collaborators_company}</h2>
                  <p className="">{company?.brief_description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Collaborators;
