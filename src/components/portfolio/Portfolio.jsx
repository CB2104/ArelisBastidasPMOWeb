import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Project One",
    img: "https://images.pexels.com/photos/34343524/pexels-photo-34343524.jpeg",
    desc: "Minim et consectetur excepteur reprehenderit ipsum sit qui et velit. Et voluptate sunt incididunt magna nulla nulla ea esse. ",
  },
  {
    id: 2,
    title: "Project Two",
    img: "https://images.pexels.com/photos/34995709/pexels-photo-34995709.jpeg",
    desc: "Minim et consectetur excepteur reprehenderit ipsum sit qui et velit. Et voluptate sunt incididunt magna nulla nulla ea esse. ",
  },
  {
    id: 3,
    title: "Project Three",
    img: "https://images.pexels.com/photos/23180911/pexels-photo-23180911.jpeg",
    desc: "Minim et consectetur excepteur reprehenderit ipsum sit qui et velit. Et voluptate sunt incididunt magna nulla nulla ea esse. ",
  },
  {
    id: 4,
    title: "Project Four",
    img: "https://images.pexels.com/photos/32315178/pexels-photo-32315178.jpeg",
    desc: "Minim et consectetur excepteur reprehenderit ipsum sit qui et velit. Et voluptate sunt incididunt magna nulla nulla ea esse. ",
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
    <section >
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

export const Portfolio = () => {
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
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
