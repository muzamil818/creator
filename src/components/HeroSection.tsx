import leftHand from "../assets/leftHand.png";
import leftLine from "../assets/leftLine.png";
import instagram from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import bulb from "../assets/bulb.png";
import lineCover from "../assets/lineCover.png";
import Button from "./Button";
// import rightline from "../assets/rightline.png";
// import righthand from "../assets/rightHand.png";

const HeroSection = () => {
  return (
    <div className="bg-[#F8F5F0] w-full h-[110vh] flex ">
      {/* Left section */}
      <div className="relative h-[120vh] w-1/4">
        {/* Background line */}
        <img
          src={leftLine}
          alt=""
          className="absolute  top-0 left-0 z-0 h-[110vh]"
        />

        {/* Hand */}
        <img
          src={leftHand}
          alt=""
          className="absolute left-0 z-10 w-[210px]"
        />

        {/* Socials + bulb */}
        <img className="absolute top-70 left-6 w-10" src={instagram} alt="" />
        <img className="absolute bottom-24 left-20 w-10" src={facebook} alt="" />
        <img className="absolute top-53 left-45 right-0 h-16" src={bulb} alt="" />
      </div>

      {/* Middle section */}
      <div className="py-[270px] flex-1 gap-7  flex-col flex items-center justify-center text-center">
        <h1 className="text-[#1F392C] text-7xl font-extrabold  leading-tight">
          Spark your brand's{" "}
          <span className=" relative inline-block ">
            <span className="relative z-10">imaginative </span>  
            <img
              src={lineCover}
              alt=""
              className="absolute h-25 top-0  left-0 bottom-0 w-full  z-0 object-contain"
            />
          </span>{" "}
          flair<br/>with us
        </h1>

        <p className="text-[#1F392C]" >Our team combines strategy, design, and technology to breathe life into your brand. Collaborate with us to leave a lasting impression on your audience. </p>
        <div className="flex  bg-white w-[556px] pl-[16px] py-[8px] rounded-full">
                <input className="w-full pl-[16px] py-[8px] outline-none"  type="text" placeholder="Enter your Email" />
                <Button className="mx-[10px]" btnText="Join"/>
        </div>
      </div>

      {/* Right section */}
      <div className="w-1/4 h-full flex items-center justify-center">
          
      </div>
    </div>
  );
};

export default HeroSection;
