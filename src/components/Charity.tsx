
type types = {
    className?: string
    img?: string,
    img1?: string,
    titleClass?:string
    title?:string,
    divClass?: string
}
const Charity = ({className, img, img1, titleClass, title, divClass}: types) => {
  return (
    <div id="charity" className="h-[60vh] w-full flex justify-center items-center  bg-[#F8F5F0]">

        <div className={`rounded  lg:h-[315px] lg:w-[380px] h-[280px] w-[240px] sm:h-[300px] sm:w-[260px] flex  flex-col gap-[20px] text-[#1F392C] bg-[#FF60E6] justify-center ${className}`}>
            <div className="flex flex-col gap-2" >
                <img src={img} alt="" />
                <img src={img1} alt="" />
            </div>
            <div className={`flex  flex-col ${divClass} `}>

            <h1 className={titleClass}>{title}</h1>

            <p className="px-[32px] text-[12px]">We've participated in events for children's education, health initiatives, and disaster relief. We're dedicated to ongoing involvement and exploring new opportunities.</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Charity