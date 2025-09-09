import leftHand from "../assets/leftHand.png";
import leftLine from "../assets/leftLine.png";
import instagram from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import bulb from "../assets/bulb.png";
const HeroSection = () => {
  return (
    <div className="w-full h-[80vh]">
      {/* left section */}
      <div className="relative h-[127vh] w-1/4">
        <img
          src={leftLine}
          alt=""
          className="absolute top-0 left-3 z-0 "
        />
        <img src={leftHand} alt="" className="relative z-10" />
        <img className="absolute top-82 left-13" src={instagram} alt="" />
        <img className="absolute bottom-0 left-30" src={facebook} alt="" />
        <img className="absolute top-59 right-0  h-18" src={bulb} alt="" />
      </div>

      {/* Middle section */}
      <div>
        <h1></h1>
      </div>

      {/* Right section */}
      <div></div>
    </div>
  );
};

export default HeroSection;
