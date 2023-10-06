import { Variants, motion } from "framer-motion";
import useBreakpoint from "../../hooks/useBreakpoint";

const buttonStyles = {
  yellow: "bg-userYellow",
  red: "bg-userRed",
};

const animationVariants: Variants = {
  hiddenRight: {
    opacity: 0,
    x: "-1rem",
  },
  hiddenLeft: {
    opacity: 0,
    x: "1rem",
  },
  animateRight: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.8,
    },
  },
};

const learnMoreUnderlineVariants: Variants = {
  hiddenRight: {
    opacity: 0,
    width: 0,
  },
  hiddenLeft: {
    opacity: 0,
    width: 0,
  },
  animateRight: {
    opacity: 0.4,
    width: "100%",
    transition: {
      delay: 4,
      duration: 1,
      ease: "backOut",
    },
  },
};

interface Props {
  heading: string;
  text: string;
  buttonColor?: "yellow" | "red";
  animationLeft?: boolean;
}

function PlainBrandInformationCard({
  heading,
  text,
  buttonColor = "yellow",
  animationLeft = false,
}: Props) {
  const { isBelowMd } = useBreakpoint("md");

  const viewportMarginSelector = () => (isBelowMd ? "-100px" : "-300px");

  const baseButtonStyles = `
    absolute bottom-0 left-1/2 h-2 w-[110%] -translate-x-1/2 rounded-full opacity-40 
    ${buttonStyles[buttonColor]}`;

  return (
    <motion.section
      variants={animationVariants}
      initial={animationLeft ? "hiddenLeft" : "hiddenRight"}
      whileInView="animateRight"
      viewport={{ margin: viewportMarginSelector(), once: true }}
      className="
        mx-auto flex min-h-full max-w-lg flex-col items-center justify-center px-7 text-center md:items-start
        md:text-left"
    >
      <motion.h2
        variants={animationVariants}
        className="font-userHeading text-3xl font-black text-userDarkHeadingColor lg:text-5xl"
      >
        {heading}
      </motion.h2>
      <motion.p
        variants={animationVariants}
        className="mt-8 text-lg text-userTextColor lg:mt-10 lg:text-[19px]"
      >
        {text}
      </motion.p>
      <motion.button
        variants={animationVariants}
        type="button"
        className="relative mt-14 font-userHeading font-black tracking-wider text-userDarkHeadingColor"
      >
        <p className="relative z-10">LEARN MORE</p>
        <motion.div
          className={baseButtonStyles}
          variants={learnMoreUnderlineVariants}
        />
      </motion.button>
    </motion.section>
  );
}

PlainBrandInformationCard.defaultProps = {
  buttonColor: "yellow",
  animationLeft: false,
};

export default PlainBrandInformationCard;
