import { motion } from "framer-motion";
export const MovingBeam = () => {
  const svgWidth = 236;
  const svgHeight = 68;
  const svgPath =
    "M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 90.6569 32 89 32H0.5";
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 ${svgWidth} ${svgHeight}"
      fill="none"
    >
      <motion.path d={svgPath} stroke="url(#paint0_linear)" />
      <defs>
        <motion.linearGradient
          initial={{
            x1: 280,
            x2: 400.5,
            y1: 0,
            y2: 50,
          }}
          animate={{
            x1: -100,
            x2: -100,
            y1: 0,
            y2: 0,
          }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          id="paint0_linear"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2EB9DF" strokeOpacity="0" />
          <stop stopColor="#2EB9DF" />
          <stop offset="1" stopColor="#9E00FF" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
