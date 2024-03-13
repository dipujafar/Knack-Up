import Container from "../../components/shared/Container";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import SectionTitle from "../../components/shared/SectionTitle";
const Stat = () => {
  const [countOn, setCountOn] = useState(false);

  return (
    <Container>
      <SectionTitle heading={"Our statistics"} subHeading={"It's Show Our Impact"}></SectionTitle>
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        <div>
          <div>
            <div className="stats w-full p-10 md:px-14 bg-gradient-to-r from-pink-500 to-cyan-800 text-white stats-vertical lg:stats-horizontal shadow">
              <div className="stat">
                <div className="stat-value flex items-center justify-center">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={300}
                      duration={3}
                      delay={0}
                    ></CountUp>
                  )}{" "}
                  +
                </div>
                <div className="stat-title text-white  text-2xl">
                  Total User
                </div>
              </div>

              <div className="stat ">
                <div className="stat-value flex items-center justify-center  ">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={80}
                      duration={3}
                      delay={0}
                    ></CountUp>
                  )}{" "}
                  +
                </div>
                <div className="stat-title text-white text-2xl">
                  Total Classes
                </div>
              </div>

              <div className="stat">
                <div className="stat-value flex items-center justify-center  ">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={50}
                      duration={3}
                      delay={0}
                    ></CountUp>
                  )}{" "}
                  +
                </div>
                <div className="stat-title text-white text-2xl">
                  Total Enrollment
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </Container>
  );
};

export default Stat;
