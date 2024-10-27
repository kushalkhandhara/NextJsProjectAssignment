"use client"
import Image from "next/image";
import sunIcon from "../assets/icons/sun.svg";
import clip from "../assets/icons/announce.svg";
import "./styles/Section1.css";
import videoIcon from "../assets/icons/video.svg";
import whiteVideo from "../assets/icons/whiteVideo.svg";
import pinkVideoo from "../assets/icons/pinkVideo.svg";
import useMedia from 'use-media';
 
 
 
export default function Section1() {

    

    const data = [
        {
            id: 1,
            icon: sunIcon, // replace with your actual icon import
            text: "On account of Independence Day, August 15th will be a holiday.",
        },
        {
            id: 2,
            icon: clip, // replace with your actual icon import
            text: "Reminder to finish your assignments and submit them by Monday.",
        },
    ];
    
  
  
    return (
    <div className="section1 w-full  ">

        <div className="announce-header">
            <h4 className="font-bold text-2xl text-[#3A3A3A] mb-4  mt-5 md:mt-0">
                Announcements
            </h4>
        </div>

        <div className="announcement">
             
            {         
                data.map((data,index)=>(
                    <div className="announce-field " key={index}>
                        <div className="announce-data ">
                            
                                <Image 
                                    src={data.icon}
                                    alt="Error"
                                />
                        
                            <div className="paraData">
                                <p>{data.text || ""}</p>
                            </div>

                        </div>
                    </div>
                ))
            }
 
        </div>
 
        <div className="schedule-header">
            <h4 className="font-bold text-2xl">Your Class Schedule</h4>
        </div>

        <div className="schedule-meet rounded-[20px] p-5 bg-white">
            <div className="schedule-main  flex flex-col gap-2">
                <div className="flex items-center bg-[#F2F2FF] gap-3 px-4 py-2">
                    <Image src={videoIcon} alt="Error" className="w-5 h-5"  />
                    
                    <div className="">
                        <div className="text-xs text-[#9899DF]">
                            Class 7, Science | Live Class
                        </div>
                        <h4 className="text-xs font-semibold text-[#4749B3] sm:text-base">Tuesday, 5:00 - 5:50 PM</h4>
                    </div>
                
                    <div className=" w-1/4 text-xs text-[#4749B3] text-end">
                        Yesterday
                    </div>
                </div>    

                <div className="flex items-center bg-[#E66DFF] gap-3 px-4 py-2">
                    <Image src={whiteVideo} alt="Error" className="w-5 h-5"  />
                    
                    <div className="">
                        <div className="text-xs text-white">
                            Class 7, Science | Live Class
                        </div>
                        <h4 className="text-xs font-semibold text-white sm:text-base">Tuesday, 5:00 - 5:50 PM</h4>
                    </div>
                
                    <div className=" w-1/4 text-xs text-white text-end">
                    Today
                    </div>
                </div>    

                <div className="flex items-center bg-[#F2F2FF] gap-3 px-4 py-2">
                    <Image src={videoIcon} alt="Error" className="w-5 h-5"  />
                    
                    <div className="">
                        <div className="text-xs text-[#9899DF]">
                            Class 7, Science | Live Class
                        </div>
                        <h4 className="text-xs font-semibold text-[#4749B3] sm:text-base">Tuesday, 5:00 - 5:50 PM</h4>
                    </div>
                
                    <div className=" w-1/4 text-xs text-[#4749B3] text-end">
                    Tomorrow
                    </div>
                </div>    

                <div className="flex items-center bg-[#F2F2FF] gap-3 px-4 py-2">
                    <Image src={pinkVideoo} alt="Error" className="w-5 h-5"  />
                    
                    <div className="">
                        <div className="text-xs text-[#E66DFF]">
                            Class 7, Science | Live Class
                        </div>
                        <h4 className="text-xs font-semibold text-[#E66DFF] sm:text-base">Tuesday, 5:00 - 5:50 PM</h4>
                    </div>
                
                    <div className=" w-1/2 text-xs text-[#E66DFF] text-end">
                    23rd Sept.  2024
                    </div>
                </div>    




            </div>
        </div>

    </div>
  );
}
