import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../heroImpl/HeroImpl.scss";

const implVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const HeroImpl = () => {
  const ref = useRef();

  const isMobile = window.innerWidth <= 700;
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="heroImpl">
      <div className="imageComp">
        <img src="../../../public/heroImpl.jpg" alt="" />
      </div>
      <div className="ImplWrapper">
        <motion.div
          className="ImplContainer"
          variants={implVariants}
          initial="initial"
          ref={ref}
          animate={isMobile ? "animate" : isInView ? "animate" : "initial"}
        >
          <motion.h1 className="titleH1" variants={implVariants}>
            Implementación de metodologías ágiles en la gestión de proyectos
          </motion.h1>
          <div className="box">
            <motion.h3 className="titleH3" variants={implVariants}>
              La implementación de metodologías ágiles es como aprender a
              surfear.
            </motion.h3>
            <motion.h3 className="titleH3" variants={implVariants}>
              Al principio, es posible que la persona se sienta un poco perdida
              y desorientada. Quizá no sabrá cómo controlar la tabla ni cómo
              dirigirse a la ola adecuada. Pero con la práctica, aprende a
              observar las olas, a predecir su dirección y a moverse con ellas.
            </motion.h3>
            <motion.h3 className="titleH3" variants={implVariants}>
              De la misma forma, la implementación de metodologías ágiles requiere su tiempo y esfuerzo. Al principio, puede ser difícil adaptarse a un nuevo enfoque. Pero con la práctica, se aprende a trabajar de forma flexible y adaptable, a anticipar los cambios y a gestionarlos de forma eficaz.
            </motion.h3>
          </div>
          <a href="#" className="link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M354.4 83.8C359.4 71.8 371.1 64 384 64L544 64C561.7 64 576 78.3 576 96L576 256C576 268.9 568.2 280.6 556.2 285.6C544.2 290.6 530.5 287.8 521.3 278.7L464 221.3L310.6 374.6C298.1 387.1 277.8 387.1 265.3 374.6C252.8 362.1 252.8 341.8 265.3 329.3L418.7 176L361.4 118.6C352.2 109.4 349.5 95.7 354.5 83.7zM64 240C64 195.8 99.8 160 144 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L144 224C135.2 224 128 231.2 128 240L128 496C128 504.8 135.2 512 144 512L400 512C408.8 512 416 504.8 416 496L416 416C416 398.3 430.3 384 448 384C465.7 384 480 398.3 480 416L480 496C480 540.2 444.2 576 400 576L144 576C99.8 576 64 540.2 64 496L64 240z" />
            </svg>
            Conozca que metodología implementaras en tu empresa
          </a>
        </motion.div>
      </div>
    </div>
  );
};
