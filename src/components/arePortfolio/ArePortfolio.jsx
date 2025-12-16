import "./ArePortfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Involucrar los stakeholders",
    img: "/stakeholders.jpg",
    desc: "Impulsar la colaboración y la participación de todas las partes interesadas. Esto incluye al patrocinador, cliente, los usuarios, los desarrolladores y otros miembros del equipo. Garantizar que el proyecto satisfaga las necesidades de todos los involucrados. ",
  },
  {
    id: 2,
    title: "Entrega incremental",
    img: "/incremental.jpg",
    desc: "Asegurar que los equipos realicen entregas del trabajo en incrementos pequeños y frecuentes. Garantizar la visibilidad a  los stakeholders que le permite  al cliente ver el progreso del proyecto y proporcionar comentarios a medida que avanza el trabajo.",
  },
  {
    id: 3,
    title: "Retrospección",
    img: "/Retrospeccion.jpg",
    desc: "Fomentar la reflexión y la mejora continua en el equipo de proyecto. Apoyar la práctica de retrospectivas regulares para analizar el progreso del proyecto e identificar áreas de mejora que contribuyan al éxito de la gestión de proyectos.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2 style={{ y }}>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ArePortfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Nuestro enfoque</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
