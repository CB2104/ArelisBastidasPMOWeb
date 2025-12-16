import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../heroResult/HeroResult.scss";

const resultVariants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const HeroResult = () => {
  const ref = useRef();

  const isMobile = window.innerWidth <= 700;
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="resultHero">
      <div className="imageContainer3">
        <img src="/heroResult.jpg" alt="" />
      </div>
      <div className="wrapper3">
        <motion.div
          className="textContainer3"
          variants={resultVariants}
          initial="initial"
          ref={ref}
          animate={isMobile ? "animate" : isInView ? "animate" : "initial"}
        >
          <motion.h1 className="resultH1" variants={resultVariants}>
            El Resultado: Pronóstico, crecimiento y ventaja competitiva
            sostenible.
          </motion.h1>
          <motion.h3 className="resultH3" variants={resultVariants}>
            Al asociarse con nosotros, el cambio es profundo. Deja de gestionar
            crisis y empieza a capitalizar oportunidades. Sus proyectos se
            entregan con calidad y puntualidad, sus stakeholders confían en cada
            paso y su empresa gana la reputación de ser una máquina de
            ejecución. Esto es crecimiento real y medible.
          </motion.h3>
          <h2>
            Es el momento de dejar de gestionar crisis y empezar a construir
            éxitos. Hablemos.
          </h2>
          <motion.h3 className="resultH3" variants={resultVariants}>
            El próximo gran proyecto de su empresa merece la mejor gestión. No
            deje que la falta de estructura defina su futuro. Solicite una
            consulta inicial sin compromiso y descubramos juntos cómo podemos
            transformar su forma de trabajar y garantizar el éxito de sus
            iniciativas más críticas.
          </motion.h3>
          <motion.div className="buttons3" variants={resultVariants}>
            <motion.a className="button3" href="#" variants={resultVariants}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
              Contáctame
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
