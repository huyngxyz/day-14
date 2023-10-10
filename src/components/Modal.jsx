import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function Modal({ projects, modal }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);

  const cursor = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 50,
    mass: 0.5,
  };

  const smoothMouse = {
    x: useSpring(cursor.x, spring),
    y: useSpring(cursor.y, spring),
  };

  const trackCursor = (e) => {
    // calculating the middle point of the modal container
    const containerWidth = modalContainer.current.offsetWidth / 2;
    const containerHeight = modalContainer.current.offsetHeight / 2;
    const { clientY, clientX } = e;

    const cursorX = clientX - containerHeight;
    const cursorY = clientY - containerWidth;

    cursor.x.set(cursorX);
    cursor.y.set(cursorY);
  };

  const sliderAnim = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
    closed: {
      scale: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },

    },
  };

  useEffect(() => {
    window.addEventListener("mousemove", trackCursor);

    return () => {
      window.removeEventListener("mousemove", trackCursor);
    };
  });

  return (
    <motion.div
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      variants={sliderAnim}
      initial="initial"
      animate={active ? "animate" : "closed"}
      ref={modalContainer}
      className=" pointer-events-none w-52 h-52 absolute overflow-hidden rounded-md"
    >
      <div
        style={{
          transform: `translateY(${index * -100}%)`,
        }}
        className="absolute h-full w-full"
      >
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
                className="h-full w-full object-cover rounded-md"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
