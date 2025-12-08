import './Services.scss'
import { motion } from 'framer-motion'

export const Services = () => {
  return (
    <motion.div className='services'>
        <motion.div className="textContainer">
            <p>I focus on helping your brand grow <br />
             and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="../" alt="" />
            </div>
        </motion.div>
        <motion.div className="listContainer"></motion.div>
    </motion.div>
  )
}
