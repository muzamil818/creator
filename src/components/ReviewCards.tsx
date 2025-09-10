import avatar from "../assets/Avatar.png";
type types = {
  title?: string;
  text?: string;
  src?: string
  className?:string
};
const ReviewCards = ({ title, text, src, className}: types) => {
  return (
    <div className={` h-[300px]  ${className}`}  >
      <div className=" px-[35px] flex flex-col justify-center h-[225px] gap-4 w-[300px] bg-[#FF60E6] rounded">
        <img className="h-10 w-10" src={src?src: avatar} alt="" />
        <h4 className="text-2xl"> {title ?   title: "John Li"}</h4>
        <p className="text-[12px]">
            {text?text: <>
          The Creator innovative ideas, strategic approach, and outstanding
          results have left a lasting impression on me as a blogger, making them
          a standout in the creative industry.</> }
        </p>
      </div>
    </div>
  );
};

export default ReviewCards;
