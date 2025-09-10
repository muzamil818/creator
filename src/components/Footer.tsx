import Button from "./Button"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col  py-16 gap-16 justify-center items-center text-center bg-[#F8F5F0] h-[55vh] text-[#1F392C]" >
        <div className="flex flex-col gap-3">
            <h1 className="text-4xl">We are waiting for you to contact us</h1>
            <p>You can write to us at any time and get an instant response.</p>
        </div>
     <div className="flex  bg-white w-[556px] pl-[16px] py-[8px] rounded-full">
                <input className="w-full pl-[16px] py-[8px] outline-none"  type="text" placeholder="Enter your Email" />
                <Button className="mx-[10px]" btnText="Join"/>
        </div>
        <div className="pb-8 px-16 flex w-full justify-between items-center ">
                <div>
                    <p><span className="text-[20px]">©</span>  Copywriting</p>
                </div>
                <div>  <ul className="flex justify-center items-center gap-8">
          {["Partners", "How we Work", "Review", "Charity"].map((item, i) => (
            <li
              key={i}
              className="cursor-pointer p-2 hover:text-pink-500 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul></div>

                <div className="flex gap-2">
                        <FaFacebook/>
                        <FaSquareInstagram/>
                        <FaLinkedin/>
                </div>
        </div>
    </div>
  )
}

export default Footer