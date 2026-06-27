import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import cn from "@/util/cn";

export default function Butterfly({ className, initialDirection, onReady  }){
  const [position, setPosition] = useState({x: 0, y:0});
  const [velocity, setVelocity] = useState({ x: initialDirection === "right" ? 2 : -2, y: 2 });
  const [direction, setDirection] = useState(initialDirection === "right" ? "0deg" : "180deg")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializePosition = () => {
      const initialX = Math.random() * (window.innerWidth - 40);
      const initialY = Math.random() * (window.innerHeight - 40);
      setPosition({ x: initialX, y: initialY });
    };

    initializePosition();
    setLoading(false);
    onReady();
  }, [])

  useEffect(() => {
    const updatePosition = () => {
      const newPosition = {
        x: position.x + velocity.x,
        y: position.y + velocity.y,
      };

      if (newPosition.x <= 0 || newPosition.x + 40 >= window.innerWidth) {
        if(newPosition.x <= 0){
            setDirection("0deg")
        }
        if(newPosition.x + 40 >= window.innerWidth){
            setDirection("180deg")
        }
        setVelocity((prevVelocity) => ({ ...prevVelocity, x: -prevVelocity.x }));
      }
      if (newPosition.y <= 0 || newPosition.y + 40 >= window.innerHeight) {
        setVelocity((prevVelocity) => ({ ...prevVelocity, y: -prevVelocity.y }));
      }
      setPosition(newPosition);
    };

    const animationId = setInterval(updatePosition, 16);

    return () => clearInterval(animationId);
  }, [position, velocity]);

  if(loading){
    return null;
  }

  return (
    <motion.div
        initial={{}}
        className={cn("absolute", direction, className)}
        style={{
            left: position.x,
            top: position.y,
            rotate: direction
        }}
        animate={{
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration: 0.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            loop: Infinity,
            repeatDelay: 1,
        }}
    >
      <div className="fill-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 132 200"
          width="40"
          height="40"
          className="text-white"
        >
          <g className="butterfly__wing origin-center animate-[flutterButterfly_150ms_alternate_infinite]">
            <path d="M75.13 100s59.42 41.22 56.79 82.78c-.77 12.12-6.14 19.32-23.41 16.67C59.79 191.97 55.75 131.44 64 100h11.13Z"/>
            <path d="M68.22 100c1.15 19.13-4.22 72.17-29.35 70.47-23.04-1.56-40.43-16.38-38.76-28.04 2.69-18.75 39.33-41.3 47.58-42.43h20.53Z"/>
          </g>
          <g className="butterfly__wing origin-center animate-[flutterButterfly_150ms_alternate_infinite]">
            <path d="M75.13 100s59.42-41.22 56.79-82.78C131.15 5.1 125.78-2.1 108.51.55 59.79 8.03 55.75 68.56 64 100h11.13Z"/>
            <path d="M68.22 100C69.37 80.87 64 27.83 38.87 29.53 15.83 31.09-1.56 45.91.11 57.57 2.8 76.32 39.44 98.87 47.69 100h20.53Z"/>
          </g>
          <g className="butterfly__body">
            <path d="M82.59 102.81a4.806 4.806 0 0 0 3.85 1.92c2.65 0 4.8-2.12 4.8-4.74s-2.15-4.74-4.8-4.74c-1.58 0-2.98.76-3.85 1.92-2.69-1.17-7.01-1.92-11.88-1.92-3.19 0-6.15.33-8.56.88-2.42-.55-5.37-.88-8.56-.88-4.22 0-8.03.57-10.72 1.48-2.69-.91-6.5-1.48-10.72-1.48-8.16 0-14.77 2.12-14.77 4.74s6.61 4.74 14.77 4.74c4.22 0 8.03-.57 10.72-1.48 2.69.91 6.5 1.48 10.72 1.48 3.19 0 6.15-.33 8.56-.88 2.42.55 5.37.88 8.56.88 4.87 0 9.19-.76 11.88-1.92Z"/>
            <path d="M89.97 101.73s0-.1.01-.15c.08-.51.56-.85 1.08-.77 12.36 1.97 28.14 10.97 33.05 23.76a.933.933 0 0 1-.55 1.2.94.94 0 0 1-1.21-.54c-4.66-12.14-19.75-20.7-31.59-22.59a.931.931 0 0 1-.79-.91Z"/>
            <path d="M89.97 98.27s0 .1.01.15c.08.51.56.85 1.08.77 12.36-1.97 28.14-10.97 33.05-23.76a.933.933 0 0 0-.55-1.2.94.94 0 0 0-1.21.54c-4.66 12.14-19.75 20.7-31.59 22.59-.46.07-.79.47-.79.91Z"/>
          </g>
        </svg>
      </div>
    </motion.div>
  );
};