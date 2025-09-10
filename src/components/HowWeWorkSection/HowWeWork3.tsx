import WorkCard from "./WorkCard"
import research from "../../assets/research.png"
import concept from "../../assets/concepts.png"
import design from "../../assets/design.png"




const HowWeWork3 = () => {
  return (
    <div className="py-16 px-[245px] h-[250vh] flex flex-col justify-center items-center gap-8 bg-[#F8F5F0] ">
        
      <WorkCard research={research}/>
      <WorkCard className="flex-row-reverse" research={concept} title="2# Concept development:"/>
      <WorkCard research={design}   title="3# Design and execution:"/>
    
        

    </div>
  )
}

export default HowWeWork3