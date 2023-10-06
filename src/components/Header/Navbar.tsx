import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileNav from "./MobileNav";
import StyledButton from "../StyledButton";

const buttonStyles =
  "hover:underline underline-offset-8 decoration-4 focus:underline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => setIsOpen((state) => !state);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="relative flex flex-wrap items-center justify-between pt-8"
    >
      <img src={logo} alt="Logo" className="md:h-[37px] md:w-[174px]" />
      <MobileMenuToggle setOpen={handleMenuClick} />
      {isOpen && <MobileNav />}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-x-12 text-lg text-white">
          <li>
            <button type="button" className={buttonStyles}>
              About
            </button>
          </li>
          <li>
            <button type="button" className={buttonStyles}>
              Services
            </button>
          </li>
          <li>
            <button type="button" className={buttonStyles}>
              Project
            </button>
          </li>
          <li>
            <StyledButton color="white" text="CONTACT" />
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}

export default Navbar;
