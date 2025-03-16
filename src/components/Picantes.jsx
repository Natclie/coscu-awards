
const categorias = {
  "STREAMERS DEL AÑO": [
    { year: 2018, name: "Frankkaster", photo: "../../picantes/frankkaster.webp",  fullName: "Francisco Postiglione", twitch: "https://kick.com/frankkaster" },
    { year: 2019, name: "Grafo", photo: "../../picantes/grafo.jpg", fullName: "Nicolás Graffigna", twitch: "https://kick.com/grafo" },
    { year: 2020, name: "Pimpeano", photo: "../../picantes/pimpeano.jpg", fullName: "Galo Blasco", twitch: "https://kick.com/pimpeano" },
    { year: 2021, name: "Momo", photo: "../../picantes/momo.webp", fullName: "Gerónimo Benavides", twitch: "https://www.twitch.tv/momoladinastia" },
    { year: 2022, name: "Spreen", photo: "../../picantes/spreen.avif", fullName: "Ivan Buhajeruk", twitch: "https://kick.com/spreen" },
    { year: 2023, name: "DavooXeneize", photo: "../../picantes/davo.jpg", fullName: "David Quint", twitch: "https://kick.com/davooxeneize" }
  ],
  "ESTREAMERS PROMESA": [
    { year: 2019, name: "Mili", photo: "../../picantes/mili.jpg", fullName: "Milagros Mansilla", twitch: "https://www.twitch.tv/milimansiilla" },
    { year: 2020, name: "Francobertello74", photo: "../../picantes/bertello.jpg", fullName: "Franco Bertello", twitch: "https://www.twitch.tv/francobertello74" },
    { year: 2021, name: "Baldu", photo: "../../picantes/baldu.jpg", fullName: "Matías Balduzzi", twitch: "https://kick.com/baldu" },
    { year: 2022, name: "LaAgusneta", photo: "../../picantes/agusneta.webp", fullName: "Agustín Rodríguez", twitch: "https://kick.com/agusneta" },
    { year: 2023, name: "Chinassj", photo: "../../picantes/chinassj.jpg", fullName: "Valentina Solorza", twitch: "https://kick.com/chinassj" }
  ],
  "STREAMERS REVELACION": [
    { year: 2018, name: "Zeko", photo: "../../picantes/zeko.jpg", fullName: "Federico Cristalino", twitch: "https://kick.com/zeko" },
    { year: 2019, name: "Nano", photo: "../../picantes/nano.webp", fullName: "Mariano Nicolas", twitch: "https://www.twitch.tv/nanocs1" },
    { year: 2020, name: "Brunenger", photo: "../../picantes/brunenger.webp", fullName: "Bruno Kruszyn", twitch: "https://kick.com/brunenger" },
    { year: 2021, name: "Spreen", photo: "../../picantes/spreen.avif", fullName: "Ivan Buhajeruk", twitch: "https://kick.com/spreen" },
    { year: 2022, name: "DavooXeneize", photo: "../../picantes/davo.jpg", fullName: "David Quint", twitch: "https://kick.com/davooxeneize" },
    { year: 2023, name: "Mazza", photo: "../../picantes/mazza.webp", fullName: "Tomas Mazza", twitch: "https://kick.com/mazzatomas" }
  ],
  "STREAMERS TRAYECTORIA": [
    { year: 2018, name: "Hastad", photo: "../../picantes/hastad.webp", fullName: "Hernán Klingler", twitch: "https://www.twitch.tv/hastad" },
    { year: 2019, name: "Duende", photo: "../../picantes/duende.jpg", fullName: "Pablo Ballon", twitch: "https://kick.com/duendepablo" },
    { year: 2020, name: "Darkoz", photo: "../../picantes/darkoz.jpg", fullName: "Lucas Ledesma", twitch: "https://kick.com/darkoztv" },
    { year: 2021, name: "Unicornio", photo: "../../picantes/unicornio.jpg", fullName: "German Usinger", twitch: "https://kick.com/unicornio" },
    { year: 2022, name: "Zeko", photo: "../../picantes/zeko.jpg", fullName: "Federico Cristalino", twitch: "https://kick.com/zeko" },
    { year: 2023, name: "Luchi", photo: "../../picantes/luchi.jpg", fullName: "Lucia Quinteros", twitch: "https://www.twitch.tv/luchi" }
  ],
  "MEJOR STREAMER IRL": [
    { year: 2018, name: "Frankkaster", photo: "../../picantes/frankkaster.webp", fullName: "Francisco Postiglione", twitch: "https://kick.com/frankkaster" },
    { year: 2019, name: "Goncho", photo: "../../picantes/goncho.jpg", fullName: "Gonzalo Banzas", twitch: "https://kick.com/goncho" },
    { year: 2020, name: "Brunenger", photo: "../../picantes/brunenger.webp", fullName: "Bruno Kruszyn", twitch: "https://kick.com/brunenger" },
    { year: 2021, name: "Luquitas", photo: "../../picantes/luquitas.jpg", fullName: "Lucas Rodríguez", twitch: "https://kick.com/luquitarodriguez" },
    { year: 2022, name: "Carrera", photo: "../../picantes/carrera.jpg", fullName: "Rodrigo Carrera", twitch: "https://kick.com/carre" },
    { year: 2023, name: "Santutu", photo: "../../picantes/santutu.jpg", fullName: "Santiago Rodríguez", twitch: "https://kick.com/Santutu" }
  ]
};

import { useState, useMemo } from "react";

export default function StreamersSection() {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(categorias)[0]);

  const winners = useMemo(() => categorias[selectedCategory], [selectedCategory]);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className="p-6 flex justify-center">
      <div>
      <h2 data-aos="fade-up" className="text-4xl font-bold mb-4 text-ani text-center flex justify-center">SELECCIONA UNA CATEGORÍA</h2>
      <select  data-aos="fade-up"
        value={selectedCategory}
        onChange={handleChange}
        className="flex mx-auto outline-0 bg-[#212121]"
      >
        {Object.keys(categorias).map((categoria) => (
          <option key={categoria} value={categoria} className="text-white">
            {categoria}
          </option>
        ))}
      </select>
      <div>
        <ul className="flex flex-wrap justify-center">
          {winners.map((ganador, index) => (
            <li  data-aos="fade-up"
              key={index}
              className="flex flex-col p-5 text-center"
            >
              <span className="font-bold text-ani text-3xl m-1">{ganador.year}</span>{" "}
              <a target="_blank" href={ganador.twitch}><img src={ganador.photo} alt={ganador.name} className="w-20 h-20 flex mx-auto rounded-full object-cover"/></a>
              <span className="text-yellow-600 text-2xl m-1">{ganador.name}</span>{" "}
              <span className="text-white text-lg m-0.5">{ganador.fullName ?? "Nombre no disponible"}</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
