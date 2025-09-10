
import illustration from "../../assets/Illustration.png" // your combined person + icons image

const HowWeWork = () => {
  return (
    <div id="howwework" className=" py-[64px] relative flex flex-col items-center justify-center w-full bg-[#F8F5F0]">
      {/* Title */}
      <h2 className="text-2xl sm:text-4xl font-bold text-[#1F392C] text-center max-w-3xl leading-snug">
        Making it big on any Platform<br/> is tougher than you think
      </h2>

      {/* Main Image */}
      <div className="py-[64px] flex justify-center">
        <img
          src={illustration}
          alt="How we work illustration"
          className="max-w-[400px] sm:max-w-[600px] lg:max-w-[700px] object-contain"
        />
      </div>
    </div>
  );
};

export default HowWeWork;
