import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../heroServ/HeroServ.scss";

const textVariants = {
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

export const HeroServ = () => {
  const ref = useRef();

  const isMobile = window.innerWidth <= 700;
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="hero2">
      <div className="imageContainer2">
        <img src="/heroServ.jpg" alt="" />
      </div>
      <div className="wrapper2">
        <motion.div
          className="textContainer2"
          variants={textVariants}
          initial="initial"
          ref={ref}
          animate={isMobile ? "animate" : isInView ? "animate" : "initial"}
        >
          <motion.h1 className="titleH1" variants={textVariants}>
            El costo oculto de la mala gestión: Plazos incumplidos y
            oportunidades pérdidas.
          </motion.h1>
          <motion.h3 className="titleH3" variants={textVariants}>
            Cada día de retraso no es solo un inconveniente en el calendario; es
            un golpe directo a su rentabilidad y a la moral de su equipo. La
            mala organización y la falta de un método claro son como una sangría
            lenta pero constante.
          </motion.h3>
          <motion.h3 className="titleH3" variants={textVariants}>
            Generan ineficiencias que se manifiestan en reuniones interminables
            que no llegan a ninguna parte, en equipos trabajando en tareas
            contradictorias y en decisiones que se toman a ciegas. Esto
            inevitablemente conduce a retrabajos costosos y a la frustración
            generalizada. Pero el daño más grave es invisible: la pérdida de
            ventajas competitivas en el mercado.
          </motion.h3>
          <motion.h3 className="titleH3" variants={textVariants}>
            Mientras su equipo está ocupado apagando incendios, sus competidores
            están lanzando nuevos productos y capturando la cuota de mercado que
            podría haber sido suya. El verdadero costo no está en las
            herramientas que no funcionan, sino en la estrategia de ejecución
            que no existe, dejando a su empresa vulnerable y estancada.
          </motion.h3>
          <motion.div className="buttons2" variants={textVariants}>
            <motion.a
              className="button2"
              href="#"
              variants={textVariants}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 512C128 547.3 156.7 576 192 576L341.5 576C358.5 576 374.8 569.3 386.8 557.3L493.3 450.7C505.3 438.7 512 422.4 512 405.4L512 128C512 92.7 483.3 64 448 64L192 64C156.7 64 128 92.7 128 128L128 512zM336 517.5L336 424C336 410.7 346.7 400 360 400L453.5 400L336 517.5zM281 169L233 217C223.6 226.4 208.4 226.4 199.1 217C189.8 207.6 189.7 192.4 199.1 183.1L247.1 135.1C256.5 125.7 271.7 125.7 281 135.1C290.3 144.5 290.4 159.7 281 169zM377 201L265 313C255.6 322.4 240.4 322.4 231.1 313C221.8 303.6 221.7 288.4 231.1 279.1L343 167C352.4 157.6 367.6 157.6 376.9 167C386.2 176.4 386.3 191.6 376.9 200.9z"/></svg>
              Servicio PMO
            </motion.a>
            <motion.a
              className="button2"
              href="#"
              variants={textVariants}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z"/></svg> 
              Capacitación Corporativa
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
