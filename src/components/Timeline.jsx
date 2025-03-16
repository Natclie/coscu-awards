import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const events = [
    { year: "2018", text: "Primera edicion en la Escuela Da Vinci, 40,000 espectadores." },
    { year: "2019", text: "Segunda edición en Estadio Obras Sanitarias, casi 100 mil espectadores." },
    { year: "2020", text: "Tercera edición en Estadio Obras Sanitarias, 425 mil espectadores, transmisión más vista de LATAM, Coscu recibe 'Streamer Leyenda'." },
    { year: "2021", text: "Cuarta edición en el Hotel Hilton, homenaje a ganadores anteriores con anillo de oro." },
    { year: "2022", text: "Quinta edición en el Teatro Colón, 200 mil espectadores y 2.500 invitados." },
    { year: "2023", text: "Sexta edición en el Luna Park, casi 6 horas, DavoXeneize 'Streamer del Año'." }
  ];

  return (
    <div className="flex flex-wrap max-w-[850px] gap-4">
      <div className="flex flex-col gap-5">
        <h2 data-aos="fade-up" className=" text-yellow-500 font-bold text-5xl flex justify-center">
          SOBRE NOSOTROS
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg">
          Los 'Coscu Army Awards' es un evento que premia y homenajea a streamers de la comunidad de Twitch de Argentina, dirigido por el streamer argentino Martín Pérez Disalvo.
        </p>
      </div>
      {events.map((event, index) => (
        <div key={index} data-aos="fade-up" className="w-[400px] p-2 mx-auto flex flex-col items-center">
          <span className="text-yellow-500 font-bold text-xl">{event.year}</span>
          <p className="text-white text-lg text-center">{event.text}</p>
        </div>
      ))}
    </div>
  );
}