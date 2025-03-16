
import React from "react";

const categories = [
  "TILTEO DEL AÑO", "DUPLA DEL AÑO", "TRAYECTORIA", "STREAMER LOL", "STREAMER MUSICO",
  "STREAM DESTACADO", "EVENTO DEL AÑO", "STREAMER DEL AÑO", "STREAMER REVELACIÓN", "STREAMER PROMESA",
  "FAIL DEL AÑO", "STREAMER IRL", "CLIP DEL AÑO", "TIMING DEL AÑO", "STREAMER VALORANT",
  "CLIP MÁS DIVERTIDO", "MÚSICA EN STREAM", "STREAMER FORTNITE", "STREAMER CS2", "SUSTO DEL AÑO",
  "STREAMER VARIEDAD", "YOUTUBER DEL AÑO", "STREAMER DEPORTISTA", "STREAMER MÁS COMPROMETIDO", "STREAMER MEJOR PRODUCCIÓN"
];

const Categories = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {categories.map((category, index) => (
        <div data-aos="fade-up" key={index} className=" box p-2 text-[0.9rem] text-ani rounded-lg text-center w-[300px]  border-1 border-amber-500 max-sm:w-[150px]">
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
