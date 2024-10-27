import Image from "next/image";
import videoPlay from "../../assets/videoPlay.jpg";
import playIcon from "../../assets/icons/video-circle.svg"


export default function SectionCard3() {
  return (
    <div className={`subject flex gap-2 border-b border=[#E8E8E8] p-3 cursor-pointer`} >

      <div className="subject-data">
        <h4 className={`text-[#4749B3] text-base font-semibold hover:text-[#A3A4D9]`}>Class 7 Subject</h4>
        <h2 className={`text-[black] font-bold leading-5 `} >Title</h2>
        <p className="text-[#727272] text-xs pt-4"
        >24th October, 2024</p>
      </div>

      <div className="subject-img relative w-32 h-16 rounded-lg ms-auto">
        <Image  
          src={videoPlay}
          className="w-full h-full object-cover rounded-lg"
          alt="Error"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center bg-green bg-opacity-70 rounded-lg text-white text-xs`}>
           <Image src={playIcon} className="h-8 w-8" alt="Error" /> 
        </div>
      </div>

  </div>
  )
}
