/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TopBanner = ({ img, title, description, button, to }) => {
  return (
    <div
      className="hero  min-h-[calc(100vh-70px)] bg-fixed relative"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="absolute md:w-1/2  flex items-center h-full   left-0 bottom-0 bg-gradient-to-r from-[#161515] to-[rgba(21, 21, 21, 0.00]">
          <div className="text-white  space-y-3 md:pl-12 px-1">
            <h1 className="lg:text-5xl md:text-3xl text-xl font-medium ">
              {title}
            </h1>
            <p>{description}</p>
            <div>
              { button &&
                <Link to={to}>
                  <button className="btn text-white bg-gradient-to-r from-cyan-600 to-cyan-800 ">
                    {button}
                  </button>
                </Link>
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
