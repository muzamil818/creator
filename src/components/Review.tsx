import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import underline from "../assets/underline.png";
import ReviewCards from "./ReviewCards";
import avatar2 from "../assets/Avatar (1).png";
import avatar3 from "../assets/Avatar (2).png";
import avatar from "../assets/Avatar.png";
import { useEffect, useState } from "react";

const Review = () => {
  const cards = [
    { src: avatar },
    { src: avatar2 },
    { src: avatar3 },
    { src: avatar },
    { src: avatar3 },
    { src: avatar2 },
  ];

  // Make a looped set (3x the cards for conveyor effect)
  const extendedCards = [...cards, ...cards, ...cards];

  const [current, setCurrent] = useState(cards.length); // start in the middle batch
  const [transition, setTransition] = useState(true);

  const prePic = () => setCurrent((prev) => prev - 1);
  const nextPic = () => setCurrent((prev) => prev + 1);

  useEffect(() => {
    // if we go too far left → snap back to middle
    if (current <= cards.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent((prev) => prev + cards.length);
      }, 500);
    }
    // if we go too far right → snap back to middle
    else if (current >= cards.length * 2) {
      setTimeout(() => {
        setTransition(false);
        setCurrent((prev) => prev - cards.length);
      }, 500);
    } else {
      setTransition(true);
    }
  }, [current, cards.length]);

  return (
<div id="review" className="flex flex-col gap-8 justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-[#F8F5F0] text-[#1F392C]">
  <p className="text-center text-[12px]">
    Hear from our customers from Top YouTube Channel
  </p>

  <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-center lg:text-left">
    We’ve taught{" "}
    <span className="inline-flex items-center gap-1">
      <img src={pic1} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
    </span>{" "}
    over 3,000 creators
    <br /> how to{" "}
    <span className="inline-flex items-center gap-1">
      <img src={pic2} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
    </span>{" "}
    grow on any Platform{" "}
    <span className="inline-flex items-center gap-1">
      <img src={pic3} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
    </span>
  </h3>

  <h3 className="relative text-2xl sm:text-3xl font-bold text-center lg:text-left">
    Now{" "}
    <span className="inline-block relative">
      we can do
      <img
        className="absolute bottom-0 left-0 w-24 sm:w-30 h-2 object-contain"
        src={underline}
        alt=""
      />
    </span>{" "}
    it for you
  </h3>

  <h4 className="text-[16px] sm:text-[18px] font-semibold text-center lg:text-left">
    See what our famous clients
    <br /> write about us:
  </h4>

  {/* Buttons */}
  <div className="flex justify-center lg:justify-end gap-4">
    <button onClick={prePic} className="text-3xl sm:text-4xl text-[#1F392C]">
      <FaRegArrowAltCircleLeft />
    </button>
    <button onClick={nextPic} className="text-3xl sm:text-4xl text-[#1F392C]">
      <FaRegArrowAltCircleRight />
    </button>
  </div>

  {/* Carousel */}
  <div className="overflow-hidden w-full">
    <div
      className={`flex gap-4 ${transition ? "transition-transform duration-500" : ""}`}
      style={{ transform: `translateX(-${current * 70}%)` }}
    >
      {extendedCards.map((src, i) => (
        <ReviewCards key={i} src={src.src} />
      ))}
    </div>
  </div>
</div>

  );
};

export default Review;
