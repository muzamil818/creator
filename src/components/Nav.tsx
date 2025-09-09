import logo from "../assets/logo.png";
import Button from "./Button";
function Nav() {
  return (
    <div className="bg-[#F8F5F0] sticky top-0 z-50 pb-[16px] pt-[30px] px-[160px] flex justify-between items-center h-[60px] w-full ">
      {/* left Nav */}
      <div className="cursor-pointer flex justify-center items-center text-2xl gap-2">
        <img src={logo} alt="" />
        <h3>The Creator</h3>
      </div>

      {/* Middle Nav */}
      <div className="">
        <ul className="flex justify-center items-center gap-8">
          {["Partners", "How we Work", "Review", "Charity"].map((item, i) => (
            <li
              key={i}
              className="cursor-pointer p-2 hover:text-pink-500 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* Right Nav */}
      <div>
        <Button
          btnText="Join the Creator"
          className="px-[32px] py-[12px] bg-[#FF60E6] font-semibold rounded-full"
        />
      </div>
    </div>
  );
}

export default Nav;
