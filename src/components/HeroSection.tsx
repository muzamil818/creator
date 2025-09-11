import leftHand from "../assets/leftHand.png";
import rightHand from "../assets/rightHand.png";
import leftLine from "../assets/leftLine.png";
import rightLine from "../assets/rightline.png";
import instagram from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import bulb from "../assets/bulb.png";
import lineCover from "../assets/lineCover.png";
import Button from "./Button";
// import rightline from "../assets/rightline.png";
// import righthand from "../assets/rightHand.png";

const HeroSection = () => {
  return (
    <div id="home" className="bg-[#F8F5F0]  w-full h-[60vh] sm:h-[80vh] lg:h-[110vh] md:h-[90vh] flex sm:justify-center sm:items-center sm:flex ">
      {/* Left section */}
   <div className="hidden lg:block relative lg:h-[120vh] lg:w-1/4">
        {/* Background line */}
        <img
          src={leftLine}
          alt="Left Line"
          className="absolute top-0 left-0 z-0 h-[110vh]"
        />

        {/* Hand */}
        <img
          src={leftHand}
          alt="Left Hand"
          className="absolute left-0 z-10 w-[210px]"
        />

        {/* Socials + Bulb */}
        <img className="absolute top-[280px] left-6 w-10" src={instagram} alt="Instagram" />
        <img className="absolute bottom-24 left-20 w-10" src={facebook} alt="Facebook" />
        <img className="absolute top-[200px] left-[150px] h-16" src={bulb} alt="Bulb" />
      </div>

      {/* Middle section */}
      <div className="sm:py-[100px] lg:py-[270px] flex-1 gap-7  flex-col flex items-center justify-center text-center">
        <h1 className="text-[#1F392C] text-center text-4xl md:text-5xl lg:text-7xl font-extrabold  leading-tight">
          Spark your brand's{" "}
          <span className=" relative inline-block ">
            <span className="relative z-10">imaginative </span>  
            <img
              src={lineCover}
              alt=""
              className="absolute h-25 lg:top-0  left-0 top-[-27px] lg:bottom-0 w-full  z-0 object-contain"
            />
          </span>{" "}
          flair<br/>with us
        </h1>

        <p className="text-[#1F392C] text-[12px] w-[80%]" >Our team combines strategy, design, and technology to breathe life into your brand. Collaborate with us to leave a lasting impression on your audience. </p>
        <div className="flex justify-center items-center bg-white w-[300px] lg:w-[556px] lg:pl-[16px] lg:py-[8px] rounded-full">
                <input className="w-full pl-[16px] py-[8px] outline-none"  type="text" placeholder="Enter your Email" />
                <Button className="mx-[10px] py-[8px] px-[20px] text-[12px] lg:py-[12px]" btnText="Join"/>
        </div>
      </div>
    {/* Right Section */}
 <div className="hidden lg:block relative lg:h-[120vh] lg:w-1/4">
        {/* Background line */}
        <img
          src={rightLine}
          alt="Right Line"
          className="absolute top-0 right-0 z-0 h-[110vh]"
        />

        {/* Bulb */}
        <img
          src={bulb}
          alt="Bulb Right"
          className="absolute top-[250px] right-[180px] h-16 z-10"
        />

        {/* Hand */}
        <img
          src={rightHand}
          alt="Right Hand"
          className="absolute right-0 bottom-12 z-10 w-[210px]"
        />
      </div>
 
    </div>
  );
};

export default HeroSection;
