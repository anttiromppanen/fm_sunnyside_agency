import { Variants, motion } from "framer-motion";

const animationVariants: Variants = {
  hidden: { opacity: 0, x: "-1rem" },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const authorAnimationVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

interface Props {
  text: string;
  author: string;
  position: string;
  img: string;
}

function TestimonialItem({ text, author, position, img }: Props) {
  return (
    <article className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <img src={img} alt="Emily" className="scale-50 rounded-full" />
        <motion.p
          variants={animationVariants}
          className="max-w-xs text-lg text-userTextColor"
        >
          {text}
        </motion.p>
      </div>
      <motion.div variants={authorAnimationVariants}>
        <p className="mt-8 font-userHeading text-lg font-black">{author}</p>
        <p className="mt-2 text-sm text-userTextColor opacity-60">{position}</p>
      </motion.div>
    </article>
  );
}

export default TestimonialItem;
