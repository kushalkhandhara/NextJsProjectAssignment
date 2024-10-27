"use client";
import "./styles/Section2.css"
import { useState } from "react";
import Image from "next/image";
import bookIcon from "../assets/icons/book.svg";
import person from "../assets/icons/personalcard.svg";
import whatsAppIcon from "../assets/icons/whatsApp.svg";
import hoverWhatsApp from "../assets/icons/hoverWhatsApp.svg";
import hoverPerson from "../assets/icons/personalcardHover.svg";
import hoverBook from "../assets/icons/hoverBook.svg";
import useMedia from 'use-media';

export default function Section2() {
  const [hoverIndex, setHoverIndex] = useState(null); // Track which card is hovered

  const isMobile = useMedia({ maxWidth: '768px' });

 
  const cards = [
    {
      id: 1,
      title: "Canvas LMS",
      description: "Click here to access your LMS portal for assignments, class recordings, and notes.",
      originalIcon: bookIcon,
      hoverIcon: hoverBook,
      bgColor: "#4749B3",
    },
    {
      id: 2,
      title: "Join Live Class",
      description: "Class 7 Math is starting in 1 hour, 35 minutes.",
      originalIcon: person,
      hoverIcon: hoverPerson,
      bgColor: "#E66DFF",
    },
    {
      id: 3,
      title: "Contact Teacher",
      description: "Click here to contact your teacher for any doubts or concerns.",
      originalIcon: whatsAppIcon,
      hoverIcon: hoverWhatsApp,
      bgColor: "#6669FE",
    },
  ];

  return (
    <div className="section2 w-full">
      <div className="section2-header">
        <h4 className="font-bold text-2xl mb-4">Quick Links</h4>
      </div>

   


    
    {isMobile ? 
    <>
      <div className="quickLink-main w-full flex flex-col gap-3">
        <div className="w-full flex flex-col gap-3">
          <div className="flex gap-6 w-full rounded-xl bg-[#E66DFF] items-center">
            <div className="bg-[#EB87FF] rounded-lg p-3 w-fit ">
              <Image src={person} alt="Error" className="w-9 h-9" />
            </div>
            <div className="">
              <h2 className="font-bold text-white text-xl">Join Live Class</h2>
            </div>
          </div>
  
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="flex gap-6 w-full rounded-xl bg-[#4749B3] items-center">
            <div className="bg-[#5F61C0] rounded-lg p-3 w-fit ">
              <Image src={bookIcon} alt="Error" className="w-9 h-9" />
            </div>
            <div className="">
              <h2 className="font-bold text-white text-xl">Canvas LMS</h2>
            </div>
          </div>
  
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="flex gap-6 w-full rounded-xl bg-[#6669FE] items-center">
            <div className="bg-[#7E81FF] rounded-lg p-3 w-fit ">
              <Image src={person} alt="Error" className="w-9 h-9" />
            </div>
            <div className="">
              <h2 className="font-bold text-white text-xl">Contact Teacher</h2>
            </div>
          </div>
  
        </div>
      </div>
    </> 
    
    : 

    <>

    <div className="quickLink-main w-full flex flex-col gap-3">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`quickLink-data w-full flex flex-col justify-center items-center gap-2 py-5 text-center rounded-[20px] transition-all duration-300`}
            style={{ 
              backgroundColor: hoverIndex === index ? "white" : card.bgColor
             
            }} 
            // Use the card's color
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <Image
              src={hoverIndex === index ? card.hoverIcon : card.originalIcon}
              alt="Icon"
              className="w-8 h-8 transition-all duration-300"
            />
            <div className="w-1/2">
              <h3 className="font-bold text-white text-2xl" style={{ color: hoverIndex === index ? card.bgColor : "white" }}>{card.title}</h3>
              <p className="text-white text-xs leading-4" style={{ color: hoverIndex === index ? card.bgColor : "white" }}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>



    </>} 

    





    </div>
  );
}
