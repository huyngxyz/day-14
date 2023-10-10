import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Modal({ projects, modal }) {
  const { active, index } = modal;
  const modalContainer = useRef(null)



  const sliderAnim = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1,
        transition: {duration: 0.2, ease: [0.16, 1, 0.3, 1]}
    },
    closed: {
        scale: 0
    }
  }

  return (
    <motion.div variants={sliderAnim} initial="initial" animate={active ? 'animate' : 'closed'} ref={modalContainer} className="overflow-hidden pointer-events-none w-96 h-80 absolute  ">
      <div style={{ transform: `translateY(${index * -100}%)` }} className="absolute h-full w-full">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className=" h-full w-full flex items-center justify-center"
            >
              <img
                src={`src/assets/images/${project.src}`}
                width={300}
                height={0}
                className="h-full object-cover rounded-sm"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
