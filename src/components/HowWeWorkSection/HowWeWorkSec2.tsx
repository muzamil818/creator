import handLeft from "../../assets/left2.png";
import handRight from "../../assets/right2.png";
import heartIcon from "../../assets/like (1) (1) 1.png";
import playIcon from "../../assets/like (1) (1) 2.png";
import line1 from "../../assets/Vector2.png"; // left pink line curve image
import line2 from "../../assets/Vector.png";  // right pink line curve image
import HowWeWork3 from "./HowWeWork3";

const HowWeWork2 = () => {
  return (
    <>
<div className="relative flex flex-col items-center justify-center w-full bg-[#F8F5F0] py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
  {/* Decorative hands */}
  <img
    src={handLeft}
    alt="Hand left"
    className="absolute top-[-30px] left-0 w-24 sm:w-32 md:w-40 z-10"
  />
  <img
    src={handRight}
    alt="Hand right"
    className="absolute right-0 bottom-[-50px] w-24 sm:w-32 md:w-40 z-10"
  />

  {/* Line images */}
  <img
    src={line1}
    alt="Line left"
    className="absolute left-0 top-0 h-full w-auto opacity-60 pointer-events-none"
  />
  <img
    src={line2}
    alt="Line right"
    className="absolute right-0 top-0 h-full w-auto opacity-60 pointer-events-none"
  />

  {/* Floating Icons */}
  <div className="absolute inset-0 z-20">
    {/* Heart under left hand */}
    <img
      src={heartIcon}
      alt="heart"
      className="absolute left-10 sm:left-20 md:left-[87px] top-[25%] sm:top-[30%] w-12 sm:w-16 md:w-20 h-auto"
    />

    {/* Play above right hand */}
    <img
      src={playIcon}
      alt="play"
      className="absolute right-10 sm:right-20 md:right-[105px] top-[50%] sm:top-[55%] w-12 sm:w-16 md:w-20 h-auto"
    />
  </div>

  {/* Section Content */}
  <div className="max-w-[90%] sm:max-w-[550px] text-center flex flex-col gap-4 sm:gap-6 relative z-30">
    {/* Heading */}
    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#1F392C] leading-snug">
      We do it for you. No more <br className="hidden sm:block" /> struggling to grow <br className="hidden sm:block" /> on any Platform
    </h2>

    {/* Subheading */}
    <p className="text-base sm:text-lg md:text-2xl font-semibold text-[#1F392C]">
      Work with our expert strategists, writers, editors, and producers to
      create content that transforms your content
    </p>

    {/* Description */}
    <p className="text-sm sm:text-base text-[#1F392C]/80">
      No managing a team of freelancers or spending countless hours trying
      to master all the skillsets Platform requires – all you need is{" "}
      <span className="font-semibold">The Creator</span>.
    </p>
  </div>
</div>
<HowWeWork3 />

    </>
  );
};

export default HowWeWork2;
