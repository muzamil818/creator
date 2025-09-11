type cardDetail = {
  research: string;
  title?: string;
  text?: string;
  className?: string;
};
const WorkCard = ({ research, title, text, className }: cardDetail) => {
  return (
   <div className={`my-16 flex flex-col lg:flex-row justify-between items-center lg:items-start ${className} gap-8 lg:gap-16`}>
  {/* Text Section */}
  <div className="flex flex-col w-full lg:w-1/2 gap-4 text-[#1F392C] text-center lg:text-left">
    <h2 className="text-2xl sm:text-3xl">
      {title ? title : "1# Research & Analysis"}
    </h2>
    <p className="text-[12px] sm:text-sm">
      {text ? (
        text
      ) : (
        "Our agency's research-driven approach involves gathering insights into our clients' industries, competitors, and target audiences to develop tailored strategies that deliver exceptional results. This deep understanding allows us to create innovative and effective campaigns that resonate with our clients' audiences."
      )}
    </p>
  </div>

  {/* Image Section */}
  <div className="relative top-0 lg:top-[40px] w-full lg:w-1/2 flex justify-center">
    <img className="h-[200px] sm:h-[250px] lg:h-[325px] w-auto object-contain" src={research} alt="Research Illustration" />
  </div>
</div>

  );
};

export default WorkCard;
