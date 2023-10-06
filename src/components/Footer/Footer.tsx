import logo from "../../assets/images/logo.svg";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-userFooterBgColor pb-20 pt-16 md:py-24">
      <img
        src={logo}
        alt="Logo"
        className="filter-dark-green scale-[1.3] md:scale-150"
      />

      <nav className="mt-10 text-lg text-userFooterTextColor opacity-80 lg:mt-14 lg:text-xl">
        <ul className="flex gap-x-14">
          <li>
            <button type="button" className="hover:text-white">
              About
            </button>
          </li>
          <li>
            <button type="button" className="hover:text-white">
              Services
            </button>
          </li>
          <li>
            <button type="button" className="hover:text-white">
              Projects
            </button>
          </li>
        </ul>
      </nav>

      <ul className="mt-20 flex gap-x-6 lg:mt-24">
        <li>
          <button type="button" className="group">
            <img src={facebookIcon} alt="Facebook" />
          </button>
        </li>
        <li>
          <button type="button">
            <img src={instagramIcon} alt="Instagram" />
          </button>
        </li>
        <li>
          <button type="button">
            <img src={twitterIcon} alt="Twitter" />
          </button>
        </li>
        <li>
          <button type="button">
            <img src={pinterestIcon} alt="Pinterest" />
          </button>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
