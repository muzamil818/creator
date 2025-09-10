import logo from "../assets/logo.png";
import Button from "./Button";
function Nav() {
  const navItems = [
  { name: "Partners", id: "partner" },
  { name: "How we Work", id: "howwework" },
  { name: "Review", id: "review" },
  { name: "Charity", id: "charity" },
];
  return (
    <div className="bg-[#F8F5F0] sticky top-0 z-50 pb-[16px] pt-[30px] px-[160px] flex justify-between items-center h-[60px] w-full ">
      {/* left Nav */}
      <div className="cursor-pointer flex justify-center items-center text-2xl gap-2">
        {/* <a href="#home"> */}
        <img src={logo} alt="" />

        {/* </a> */}
        <a href="#home"> <h3>The Creator</h3></a> 
      </div>

      {/* Middle Nav */}
      <div className="">
        <ul className="flex justify-center items-center gap-8">
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
