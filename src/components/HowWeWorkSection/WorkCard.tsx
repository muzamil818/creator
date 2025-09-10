type cardDetail = {
  research: string;
  title?: string;
  text?: string;
  className?: string;
};
const WorkCard = ({ research, title, text, className }: cardDetail) => {
  return (
    <div className={`my-16 flex justify-between ${className}`}>
      <div className={`flex flex-col w-1/2 gap-4 text-[#1F392C] `}>
        <h2 className="text-3xl">
          {title ? <>{title}</> : <>1# Research & Analysis</>}
        </h2>

        <p className="text-[12px]">
          {text ? (
            <>{text}</>
          ) : (
            <>
              Our agency's research-driven approach involves gathering insights
              into our clients' industries, competitors, and target audiences to
              develop tailored strategies that deliver exceptional results. This
              deep understanding allows us to create innovative and effective
              campaigns that resonate with our clients' audiences.
            </>
          )}
        </p>
      </div>

      <div className="relative top-[40px]">
        <img className="h-[325px]" src={research} alt="" />
      </div>
    </div>
  );
};

export default WorkCard;
