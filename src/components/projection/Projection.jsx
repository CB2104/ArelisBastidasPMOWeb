import { useRef } from "react";
import "./Projection.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
    },
  },
};

export const Projection = () => {
  const ref = useRef();

  const isMobile = window.innerWidth <= 700;
  const isInView = useInView(ref, { margin: "-100px" });

  // const isInView = useInView(ref, {
  //   once: false,
  //   amount: 0.3,
  // });

  return (
    <motion.div
      className="projection"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isMobile ? "animate" : isInView ? "animate" : "initial"}
    >
      <motion.div className="projectContainer" variants={variants}>
        <p>
          Contrate un consultor de proyectos <br />
          para implementar la metodología perfecta
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Imagina</motion.b> un
            futuro donde cada proyecto
          </h1>
        </div>
        <div className="title">
          <h1>
            {" "}
            se entrega
            <motion.b whileHover={{ color: "orange" }}> a tiempo</motion.b> y
            dentro del{" "}
            <motion.b whileHover={{ color: "orange" }}> presupuesto.</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <p>
            Visualice una organización donde la predictibilidad es la norma, no
            la excepción afortunada. Imagine el lunes por la mañana y, en lugar
            de una lista de crisis, su equipo revisa un dashboard claro que
            muestra el progreso exacto hacia los objetivos. Donde los recursos
            se optimizan de forma inteligente, asignando al talento adecuado a
            las tareas correctas en el momento preciso.
          </p>
          <br />
          <p>
            Un entorno donde cada proyecto finalizado no es solo un alivio, sino
            una victoria estratégica que fortalece la confianza de los
            stakeholders y eleva la moral del equipo. Este no es un ideal lejano
            reservado para unas pocas empresas de élite. Es el resultado
            tangible y medible de implementar una gestión de proyectos experta,
            un sistema que transforma la incertidumbre en una ventaja calculada.
          </p>
          <br />
          <a href="#Contact" className="btnContact">
            Contactanos
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
