import { Link } from "react-router-dom";
import banner from "../../assets/img/banner.jpeg";
const Banner = () => {
  return (
    <div
      className="hero  min-h-[calc(100vh-70px)] relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="absolute md:w-1/2  flex items-center h-full   left-0 bottom-0 bg-gradient-to-r from-[#161515] to-[rgba(21, 21, 21, 0.00]">
          <div className="text-white  space-y-3 md:pl-12 px-1">
            <h1 className="lg:text-5xl md:text-3xl text-xl font-medium ">
              Unlock Your Potential with Knack!
            </h1>
            <p>
              Boost your skills on Knack! Learn easily online anytime, anywhere.
              Master new things effortlessly with our user-friendly platform.
            </p>
            <div>
              <Link to='/allClass'>
              <button className="btn text-white bg-gradient-to-r from-cyan-600 to-cyan-800 space-y-5 md:space-y-10">Enroll Today</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
