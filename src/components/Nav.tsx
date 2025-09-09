
import logo from "../assets/logo.png"
import Button from "./Button"
function Nav() {
  return (
    <div className="pb-[16px] pt-[48px] px-[160px] flex justify-between items-center h-[112px] w-full ">
        {/* left Nav */}
        <div className="flex justify-center items-center text-2xl gap-2">
            <img src={logo} alt="" />
            <h3>The Creator</h3>
        </div>

        {/* Middle Nav */}
        <div className="">
            <ul className="flex justify-center items-center gap-8">
                <li>Partners</li>
                <li>How we Work</li>
                <li>Review</li>
                <li>Charity</li>
            </ul>
        </div>
        {/* Right Nav */}
        <div>
            <Button btnText="Join the Creator" className="px-[32px] py-[12px] bg-[#FF60E6] font-semibold rounded-full"/>
        </div>


    </div>
  )
}

export default Nav