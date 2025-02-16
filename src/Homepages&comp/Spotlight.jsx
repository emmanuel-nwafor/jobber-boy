import React from 'react';

export default function Spotlight() {
  return (
  <>

    <div className="relative bg-zinc-900  flex-col items-center justify-center p-[200px] sm:p-[60px] md:p-[100px] lg:p-[210px] max-md:p-[30px]">
          <h1 className="text-3xl m-5 text-white">SPOT LIGHT</h1>
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {[
              {
                img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "DS and Algorithms Roles",
                desc: "Search for some of our newest, priority roles in Data Structures and Algorithms.",
              },
              {
                img: "https://images.pexels.com/photos/15543044/pexels-photo-15543044/free-photo-of-women-sitting-in-a-boardroom-and-talking-during-a-business-meeting.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "AI and ML Roles",
                desc: "Search for some of our newest, priority roles in Artificial Intelligence and Machine Learning.",
              },
              {
                img: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Software Engineering Roles",
                desc: "Search for some of our newest, priority roles in Software Engineering.",
              },
              {
                img: "https://images.pexels.com/photos/10725897/pexels-photo-10725897.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Cloud Engineering Roles",
                desc: "Explore all cloud engineering roles, prior to your needs.",
              },
              {
                img: "https://images.pexels.com/photos/30688912/pexels-photo-30688912/free-photo-of-woman-shopping-in-lagos-supermarket.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Product Manager Roles",
                desc: "Own account and campaign managment, delivering exeptional performance and services.",
              },
              {
                img: "https://images.pexels.com/photos/7621136/pexels-photo-7621136.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Customer Solutions Roles",
                desc: "Influence customers by your cutting edge skills.",
              },
            ].map((item, index) => (
              <div key={index} className="hover:bg-gray-200 transition-all bg-white overflow-hidden flex flex-col">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h1 className="text-xl ">{item.title}</h1>
                  <p className="text-gray-700 flex-grow">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

  </>
  );
}
