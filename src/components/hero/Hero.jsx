import { motion } from "framer-motion";
import "./Hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
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

const sliderVariants = {
  initial: {
    x: "200%",
  },
  animate: {
    x: "-900%",
    transition: {
      repeat: Infinity,
      repearType: "Mirror",
      duration: 30,
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Gestión de proyectos para empresas
          </motion.h2>
          <motion.h1 variants={textVariants}>
            ¿Sus grandes proyectos se convierten en grandes problemas?
          </motion.h1>
          <motion.h3 variants={textVariants}>
            Liderar iniciativas de gran envergadura es un desafío monumental.
            Cuando la gestión falla, los proyectos se convierten en una fuente
            de frustración, con presupuestos desbordados, plazos incumplidos y
            equipos desmotivados.
          </motion.h3>
          <motion.h2 variants={textVariants}>
            Somos consultores en gestión de proyectos
          </motion.h2>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a
              className="button"
              href="#Contact"
              variants={textVariants}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M371.8 82.4C359.8 87.4 352 99 352 112L352 192L240 192C142.8 192 64 270.8 64 368C64 481.3 145.5 531.9 164.2 542.1C166.7 543.5 169.5 544 172.3 544C183.2 544 192 535.1 192 524.3C192 516.8 187.7 509.9 182.2 504.8C172.8 496 160 478.4 160 448.1C160 395.1 203 352.1 256 352.1L352 352.1L352 432.1C352 445 359.8 456.7 371.8 461.7C383.8 466.7 397.5 463.9 406.7 454.8L566.7 294.8C579.2 282.3 579.2 262 566.7 249.5L406.7 89.5C397.5 80.3 383.8 77.6 371.8 82.6z" />
              </svg>
              Sobre mi
            </motion.a>
            <motion.a
              className="button"
              href="#Contact"
              variants={textVariants}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
              Consulta
            </motion.a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
                 PMO Officer | Scrum Master | Project Manager
      </motion.div>
      <div className="imageContainer">
        <img src="../../../public/Hero-Arelis.png" alt="" />
      </div>
    </div>
  );
};
