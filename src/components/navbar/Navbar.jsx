import { motion } from "framer-motion";

import { Sidebar } from "../sidebar/Sidebar";
import "./navBar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/Logo-Arelis-Bastidas-Black.png" alt="" className="logo" />
        </motion.span>
        <div className="social">
          <a href="#">
            <p>Home</p>
          </a>
          <a href="#">
            Sobre Mi
          </a>
          <a href="#">
            <p>Servicios</p>
          </a>
          <a href="#">
            <p>Blog</p>
          </a>
        </div>
      </div>
    </div>
  );
};
