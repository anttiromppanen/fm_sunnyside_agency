import { motion } from "framer-motion";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import Navbar from "./Navbar";

function Header() {
  return (
    <header
      className="
      min-h-[100dvh] bg-userHeaderBgMobile bg-cover bg-center
      bg-no-repeat px-6 md:min-h-screen md:bg-userHeaderBgDesktop md:px-12"
    >
      <Navbar />
      <div className="mt-24 flex flex-col items-center gap-y-14 text-center">
        <h1 className="font-userHeading text-5xl font-bold tracking-[.1em] text-white">
          WE ARE CREATIVES
        </h1>
        <motion.img
          src={arrowDown}
          alt="Arrow down"
          animate={{ y: "2rem" }}
          initial={{ y: 0 }}
          transition={{
            repeatType: "mirror",
            repeat: Infinity,
            duration: 1,
            repeatDelay: 2,
            delay: 1,
          }}
        />
      </div>
    </header>
  );
}

export default Header;
