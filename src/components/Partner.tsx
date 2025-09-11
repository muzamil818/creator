import opLine from "../assets/opLine.png";
import twi from "../assets/twi.png";
import pin from "../assets/pint.png";
import workLine from "../assets/workLine.png";

const Work = () => {
  return (
 <div
  id="partner"
  className="relative z-10 flex flex-col justify-center items-center w-full bg-[#F8F5F0] py-12 px-6 sm:px-10 md:px-16 lg:px-[62px]"
>
  <div className="w-full md:w-[80%] items-center">
    {/* Heading */}
    <h1 className="text-[#1F392C] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug md:leading-tight text-center md:text-left">
      Contact us today to explore{" "}
      <br className="hidden sm:block" />
      partnership{" "}
      <span className="relative inline-block">
        <span className="relative z-10">opportunities! </span>
        <img
          src={opLine}
          alt=""
          className="absolute top-[-6px] left-0 w-full z-0 object-contain h-5 sm:h-6 md:h-8"
        />
      </span>
    </h1>

    {/* Background line */}
    <img
      className="absolute -z-10 top-0 left-0 object-contain w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px]"
      src={workLine}
      alt=""
    />

    {/* Content box */}
    <div className="flex flex-col lg:flex-row justify-between items-start mt-12 mb-8 rounded bg-white w-full max-w-[1100px] mx-auto p-6 sm:p-8 gap-8 shadow-md">
      {/* Left content */}
      <div className="flex flex-col gap-4 text-[#1F392C] max-w-full lg:max-w-[350px] text-center lg:text-left">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">Partners:</h4>
        <p className="text-sm sm:text-base leading-relaxed">
          Our creative agency forms strong partnerships with diverse businesses,
          from startups to global brands, based on trust, respect, and a shared
          vision for success.
        </p>
      </div>

      {/* Cards section */}
      <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto group">
        {/* Card 1 */}
        <div className="cursor-pointer bg-[#FF60E6] rounded-xl p-5 sm:p-6 w-full sm:w-[250px] transition-all duration-300 transform group-hover:blur-[0.8px] hover:!blur-none hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <img src={twi} alt="Logo1" className="w-5 h-5" />
            <span className="text-xs sm:text-sm font-medium text-[#1F392C]">
              2008 — TODAY
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#1F392C] leading-relaxed">
            Communication between the agency and brands. Collects customer
            feedback and encourages discussion about the product, which helps
            improve it.
          </p>
        </div>

        {/* Card 2 */}
        <div className="cursor-pointer bg-[#f684e5] rounded-xl p-5 sm:p-6 w-full sm:w-[250px] transition-all duration-300 transform group-hover:blur-[1px] hover:!blur-none hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <img src={pin} alt="Logo2" className="w-5 h-5" />
            <span className="text-xs sm:text-sm font-medium text-[#1F392C]">
              2010 — TODAY
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#1F392C] leading-relaxed">
            Provide unlimited access to all boards. Provides communication and
            creative partnership. Provides participation in creative
            conferences.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Work;
