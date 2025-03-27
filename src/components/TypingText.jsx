import { motion } from "framer-motion";

const TypingText = ({ text, speed = 0.05, className }) => {
  const textArray = text.split("");

  return (
    <motion.p
      initial="hidden" 
      animate="visible" 
      variants={{
        visible: { transition: { staggerChildren: speed } }
      }}
      className={className}
    >
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;