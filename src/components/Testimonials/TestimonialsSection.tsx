import { Variants, motion } from "framer-motion";
import TestimonialItem from "./TestimonialItem";
import emilyImg from "../../assets/images/image-emily.jpg";
import thomasImg from "../../assets/images/image-thomas.jpg";
import jennieImg from "../../assets/images/image-jennie.jpg";

const animationVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1.5,
      delayChildren: 0.5,
    },
  },
};

function TestimonialsSection() {
  return (
    <section className="px-7 py-16 text-center lg:py-40">
      <h2
        className="
        font-userHeading tracking-[0.2em] text-userGrayHeadingColor sm:text-xl sm:font-black lg:tracking-[0.3em]"
      >
        CLIENT TESTIMONIALS
      </h2>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
        mx-auto mt-8 flex max-w-screen-xl auto-rows-fr grid-cols-3 flex-col gap-x-10 gap-y-8 
        md:grid lg:mt-12 lg:gap-x-8"
      >
        <TestimonialItem
          text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          author="Emily R."
          position="Marketing Director"
          img={emilyImg}
        />
        <TestimonialItem
          text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          author="Thomas S."
          position="Chief Operating Officer"
          img={thomasImg}
        />
        <TestimonialItem
          text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          author="Jennie F."
          position="Business Owner"
          img={jennieImg}
        />
      </motion.div>
    </section>
  );
}

export default TestimonialsSection;
