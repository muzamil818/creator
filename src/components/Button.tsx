
type btn = {
    btnText: string,
    className: string
}

const Button = ({btnText, className}: btn) => {
  return (
    <div>
        <button className={`bg-[#FF60E6] font-semibold rounded-full lg:px-[28px] lg:py-[8px]  hover:bg-[#FFADF2] transition-all cursor-pointer ${className}`}>{btnText}</button>
    </div>
  )
}

export default Button