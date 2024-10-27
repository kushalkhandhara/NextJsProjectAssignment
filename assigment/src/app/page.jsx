import Navbar from "@/components/Navbar";
import Section1 from "@/sections/Section1";
import Section2 from "@/sections/Section2";
import Section3 from "@/sections/Section3";
import "./page.css";


export default function Home() {
  return (
    <>
       <div className="home w-full">
          <Navbar/>
        
          <div className="main-sections bg-[#F9F9FF] p-4 flex flex-col gap-5 md:flex-row md:p-9">
            <Section1/>
            <Section2/>
            <Section3/>
          </div>
       </div>
    </>
 
  );
}
