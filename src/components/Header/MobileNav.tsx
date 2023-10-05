import { motion } from "framer-motion";
import StyledButton from "../StyledButton";

function MobileNav() {
  return (
    <motion.nav
      variants={{
        open: { opacity: 1 },
        closed: { opacity: 0 },
      }}
      transition={{ duration: 0.2 }}
      initial="closed"
      className="
        absolute right-0 top-28 z-10 flex w-full justify-center
        bg-white py-11 text-center text-xl text-userTextColor transition-all"
    >
      <div
        className="absolute -top-6 right-0 h-6 w-6"
        style={{
          background: "linear-gradient(-45deg, white 50%, transparent 50%)",
        }}
      />
      <ul className="flex flex-col gap-y-10">
        <li>
          <button type="button">About</button>
        </li>
        <li>
          <button type="button">Services</button>
        </li>
        <li>
          <button type="button">Projects</button>
        </li>
        <li>
          <StyledButton color="yellow" text="CONTACT" />
        </li>
      </ul>
    </motion.nav>
  );
}

export default MobileNav;
