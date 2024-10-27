"use client";
import { useState } from "react";
import "./styles/Section3.css";
import searchIcon from "../assets/icons/search.svg";
import Image from "next/image";
import videoPlay from "../assets/videoPlay.jpg";
import playIcon from "../assets/icons/video-circle.svg";
import closeIcon from "../assets/icons/close-circle.svg";  
import Noti from "../assets/icons/noti.svg";

export default function Section3() {

  const [modal,setModal] = useState(false);
  const [startModal,setStartModal] = useState(false);
  const toggleModal = (data)=>{
    if(data==="start"){
      setModal(!modal);
      setStartModal(!startModal);
      console.log(data)
    }
    else{
      setModal(!modal);
    }
  }

  const closeModal = ()=>{
    setModal(!modal);
  }

  let data = [
    {
      id: "1",
      subject: "Maths",
      title: "Algebraic Equations",
      color: "#4749B3",
      hoverColor : "#A3A4D9",

    },
    {
      id: "2",
      subject: "Science",
      title: "Introduction to Physics",
      color: "#E66DFF",
      hoverColor : "#F2B6FF"
    },
    {
      id: "3",
      subject: "History",
      title: "World War II Overview",
      color: "#4749B3",
      hoverColor : "#A3A4D9",
      start : "start"
    },
    {
      id: "4",
      subject: "English",
      title: "Shakespearean Literature",
      color: "#E66DFF",
      hoverColor : "#F2B6FF"
    } 
  ];

 
  const [keyIndex,setKeyIndex] = useState(null); // Track which card is hovered
  const setHoverData = (index)=>{
    if(index){
     
      setKeyIndex(index);
    }
    else{
      setKeyIndex(index);
    }
  }
  

  return (
    <>
      <div className="section3 w-full">
        <div className="section3-header">
          <h4 className="font-bold text-[#3A3A3A] text-2xl mb-4">Access Class Recordings</h4>
        </div>
        <div className="section3-main p-5   bg-white rounded-[20px]">
          {/* Search Inp */}
          <div className="serchInp w-full">
            <input type="text" placeholder="Search for class recordings" className="bg-[#F6F6FB] "/>
            <Image src={searchIcon} alt="error" 
              className="h-6 w-6" 
            />
          </div>

          {/* Filter Data */}
          <div className="filterData mt-3 flex gap-2 items-center">
            <h5 className="text-xs">
              Filter Data :
            </h5>
            <div className="week">
              <select className="bg-[#F6F6FB] text-[#979797] text-xs py-1 px-2 outline-none">
                <option>This week</option>
                <option>Week 1</option>
                <option>Week 2</option>
              </select>
            </div>
            <div className="subjects">
              <select className="bg-[#F6F6FB] text-[#979797] text-xs py-1 px-2 outline-none"> 
                <option>All Subjects</option>
                <option>Maths</option>
                <option>Science</option>
                <option>English</option>
              </select>
            </div>

          </div>

          {/* Video Play */}
          <div className="subject-list mt-7 flex flex-col ">

       
          {
            data.map((data,index)=>(       
            <div className={`subject flex gap-2 border-b border-${index===keyIndex ? `[${data.color}]` : "#E8E8E8"} p-3 cursor-pointer`} 

              onMouseEnter={() => setHoverData(index)}
              onMouseLeave={() => setHoverData(null)}
              key = {index}
            >

                <div className="subject-data">
                  <h4 className={`text-[${index===keyIndex ? data.hoverColor : data.color}] text-base font-semibold  `}
                  
                  >Class 7 {data.subject}</h4>
                  <h2 className={`text-${index==keyIndex ? `[${data.color}]` : "black"} font-bold leading-5 `} >{data.title}</h2>
                  <p className="text-[#727272] text-xs pt-4"
                  >24th October, 2024</p>
                </div>

                <div className="subject-img relative w-32 h-16 rounded-lg ms-auto" onClick={()=>toggleModal(data.start || "")}>
                  <Image  
                    src={videoPlay}
                    className="w-full h-full object-cover rounded-lg"
                    alt="Error"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center bg-[${data.color}] bg-opacity-70 rounded-lg text-white text-xs`}>
                    {index === keyIndex ? "play now" : <Image src={playIcon} className="h-8 w-8" alt="Error" />}
                    
                  </div>
                </div>

            </div>
          ))}
              
          </div>      
        </div>


        {
          modal && (
            <div className="modal fixed top-0 left-0 w-full h-full bg-[#13144DA3] z-50 flex overflow-auto justify-center items-center"  onClick={closeModal}>
              <div className="modal-content relative w-full flex overflow-auto justify-center items-center m-auto">
                {
                  
                  startModal ? (
                  
                  <div className="w-fit h-auto my-5 flex flex-col justify-center items-center">
                    
                    <div className="rounded-[13px] bg-white py-2 flex gap-3 items-center px-6">
                      <Image src={Noti} alt="error" className="w-3.5 h-4" />
                      <h4 className="font-base text-[#E66DFF] font-bold">Class 7 Math is starting in 1 hour, 34 minutes.</h4>        
                    </div>

                    <div className="w-[90%] mt-2 flex flex-col bg-white text-center p-6 rounded-[20px]">
                      
                      <div className="pb-6" >
                        <h4 className="text-[#6669FE] font-bold text-2xl  leading-[25px]">
                          You can join the live  class 
                          <br/>
                          5 minutes before it
                          <br/>
                          starts. Please wait.
                        </h4>
                      </div>

                     
                        <button className="bg-[#6669FE] w-fit m-auto px-5 py-2 text-[14px] text-white rounded-[22px] font-bold">Okay.</button>
                  
                    </div>
                  
                  </div>
                ) : 
                
                (
                  <div className="w-[90%] h-auto my-5">
                    <div className="bg-[#4749B3] flex items-center justify-between py-4 px-2 text-white rounded-t-lg">
                      <div className="text-center">
                        <p className="text-base font-light">Class 7 Science</p>
                        <h3 className="font-bold">Fundamentals of Organic Chemistry</h3>
                      </div>
                      <div className="closeIcon w-fit cursor-pointer">
                        <Image src={closeIcon} onClick={toggleModal} alt="Close Icon" className="w-12 h-12" />
                      </div>
                    </div>
                    <Image src={videoPlay} alt="Video" className="w-full h-auto" />
                  </div>
                )
                
                }
              </div>
            </div>
          )
        }
      
      </div>
    </>
  )
}
