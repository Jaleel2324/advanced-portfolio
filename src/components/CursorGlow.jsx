import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 250,
        y: position.y - 250,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 25,
        mass: 0.5,
      }}
      className="pointer-events-none fixed top-0 left-0 z-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
    />
  );
}

export default CursorGlow;