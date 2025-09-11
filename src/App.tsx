import Charity from "./components/Charity";
import HeroSection from "./components/HeroSection";
import HowWeWork from "./components/HowWeWorkSection/HowWeWork";
import HowWeWork2 from "./components/HowWeWorkSection/HowWeWorkSec2";
import Partner from "./components/Partner";
import Review from "./components/Review";
import img from './assets/charity.png'
import img1 from './assets/charity1.png'

function App() {
  return (
    <div>
      <HeroSection />
      <Partner />
      <HowWeWork />
      <HowWeWork2 />
      <Review />
      <div className="py-12 lg:py-16 lg:px-[245px] sm:flex-col  lg:flex  lg:justify-center lg:items-center lg:gap-8 bg-[#F8F5F0] ">  
        <Charity img={img} img1={img1}/>
        <Charity className="bg-white" divClass="relative top-[-15%] gap-8" titleClass="text-4xl font-bold px-[32px]" title="Charity"/>
      </div>
      
    </div>
  );
}

export default App;
