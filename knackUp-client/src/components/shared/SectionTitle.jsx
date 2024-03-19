/* eslint-disable react/prop-types */

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="md:w-1/2 mx-auto text-center text-white my-5">
      <h1 className="text-3xl uppercase py-1 text-blue-100">{heading}</h1>
      <p className="text-blue-400 my-2">---{subHeading}---</p>
    </div>
  );
};

export default SectionTitle;
