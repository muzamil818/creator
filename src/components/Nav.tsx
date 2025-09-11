import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";
import Button from "./Button";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Partners", id: "partner" },
    { name: "How we Work", id: "howwework" },
    { name: "Review", id: "review" },
    { name: "Charity", id: "charity" },
  ];

  return (
    <div className="bg-[#F8F5F0] sticky top-0 z-50 px-6 md:px-[100px] lg:px-[160px] flex justify-between items-center py-4">
      {/* Left Nav (Logo) */}
      <a href="#home" className="flex items-center gap-2">
        <img
          src={logo}
          alt="The Creator Logo"
          className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
        />
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
          The Creator
        </h3>
      </a>

      {/* Middle Nav (Desktop only) */}
      <ul className="hidden md:flex md:text-[12px] lg:gap-8">
        {navItems.map((item, i) => (
          <a
            href={`#${item.id}`}
            key={i}
            className="cursor-pointer p-2 hover:text-pink-500 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </ul>

      {/* Right Nav Button (Desktop only) */}
      <div className="hidden  lg:inline-block">
        <Button
          btnText="Join the Creator"
          className="md:text-[10px] md:px-[16px] md:py-[7px] px-[32px] py-[12px] bg-[#FF60E6] font-semibold rounded-full"
        />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden text-3xl">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#F8F5F0] flex flex-col items-center gap-6 py-6 shadow-md md:hidden">
          {navItems.map((item, i) => (
            <a
              href={`#${item.id}`}
              key={i}
              className="cursor-pointer hover:text-pink-500 transition-colors"
              onClick={() => setIsOpen(false)} // close menu when clicked
            >
              {item.name}
            </a>
          ))}
          <Button
            btnText="Join the Creator"
            className="px-[24px] py-[10px] bg-[#FF60E6] font-semibold rounded-full"
          />
        </div>
      )}
    </div>
  );
}

export default Nav;
