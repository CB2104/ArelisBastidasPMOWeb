import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../heroComp/HeroComp.scss";

const compVariants = {
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

export const HeroComp = () => {
  const ref = useRef();

  const isMobile = window.innerWidth <= 700;
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="heroComp">
      <div className="imageComp">
        <img src="/HeroComp.jpg" alt="" />
      </div>
      <div className="compWrapper">
        <motion.div
          className="compContainer"
          variants={compVariants}
          initial="initial"
          ref={ref}
          animate={isMobile ? "animate" : isInView ? "animate" : "initial"}
        >
          <motion.h1 className="titleH1" variants={compVariants}>
            Con 15 años de experiencia, transformamos el caos en control.
          </motion.h1>
          <motion.h2>
            Somos su socio estratégico en gestión de proyectos.
          </motion.h2>
          <div className="box">
            <motion.h3 className="titleH3" variants={compVariants}>
              Cada día de retraso no es solo un inconveniente en el calendario;
              es un golpe directo a su rentabilidad y a la moral de su equipo.
              La mala organización y la falta de un método claro son como una
              sangría lenta pero constante.
            </motion.h3>
            <motion.h3 className="titleH3" variants={compVariants}>
              Generan ineficiencias que se manifiestan en reuniones
              interminables que no llegan a ninguna parte, en equipos trabajando
              en tareas contradictorias y en decisiones que se toman a ciegas.
              Esto inevitablemente conduce a retrabajos costosos y a la
              frustración generalizada. Pero el daño más grave es invisible: la
              pérdida de ventajas competitivas en el mercado.
            </motion.h3>
            <motion.h3 className="titleH3" variants={compVariants}>
              Mientras su equipo está ocupado apagando incendios, sus
              competidores están lanzando nuevos productos y capturando la cuota
              de mercado que podría haber sido suya. El verdadero costo no está
              en las herramientas que no funcionan, sino en la estrategia de
              ejecución que no existe, dejando a su empresa vulnerable y
              estancada.
            </motion.h3>
          </div>
          <motion.div className="buttons2" variants={compVariants}>
            <motion.a className="button2" href="#" variants={compVariants}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M371.8 82.4C359.8 87.4 352 99 352 112L352 192L240 192C142.8 192 64 270.8 64 368C64 481.3 145.5 531.9 164.2 542.1C166.7 543.5 169.5 544 172.3 544C183.2 544 192 535.1 192 524.3C192 516.8 187.7 509.9 182.2 504.8C172.8 496 160 478.4 160 448.1C160 395.1 203 352.1 256 352.1L352 352.1L352 432.1C352 445 359.8 456.7 371.8 461.7C383.8 466.7 397.5 463.9 406.7 454.8L566.7 294.8C579.2 282.3 579.2 262 566.7 249.5L406.7 89.5C397.5 80.3 383.8 77.6 371.8 82.6z" />
              </svg>
              Nosotros
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
