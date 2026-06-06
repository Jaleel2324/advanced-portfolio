import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="fixed inset-0 z-[999] bg-[#050816] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-blue-500 border-t-transparent"
        />

        <h1 className="text-3xl font-black">Jaleel.dev</h1>
        <p className="text-gray-400 mt-2">Building premium web systems...</p>
      </div>
    </motion.div>
  );
}

export default Loader;