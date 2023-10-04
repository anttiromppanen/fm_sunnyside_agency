import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileNav from "./MobileNav";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => setIsOpen((state) => !state);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="relative flex justify-between pt-8"
    >
      <img src={logo} alt="Logo" />
      <MobileMenuToggle setOpen={handleMenuClick} />
      {isOpen && <MobileNav />}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <button type="button">About</button>
          </li>
          <li>
            <button type="button">Services</button>
          </li>
          <li>
            <button type="button">Project</button>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}

export default Navbar;
