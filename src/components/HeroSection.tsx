import leftHand from "../assets/leftHand.png";
import leftLine from "../assets/leftLine.png";
const HeroSection = () => {
  return (
    <div className="w-full h-[80vh]">
      {/* left section */}
      <div className="relative">
        <div className="z-5">
          <img src={leftHand} alt="" />
        </div>
        <img className="absolute top-0 z-3" src={leftLine} alt="" />
      </div>

      {/* Middle section */}
      <div></div>

      {/* Right section */}
      <div></div>
    </div>
  );
};

export default HeroSection;
