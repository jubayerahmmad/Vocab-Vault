import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import logo from "../assets/reading.png";
const Footer = () => {
  return (
    <footer className="footer footer-center bg-cyan-100 text-black p-10">
      <aside>
        <img className="h-16 w-16" src={logo} alt="" />
        <h3 className="font-bold text-2xl text-cyan-500">Vocab Vault</h3>
        <p className="text-lg font-semibold text-gray-500">
          Unlock your vocabulary potential with Vocab Vault, your ultimate
          language learning companion.
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaFacebook size={28}></FaFacebook>
          </a>
          <a>
            <FaInstagram size={28}></FaInstagram>
          </a>
          <a>
            <FaTwitter size={28}></FaTwitter>
          </a>
        </div>
      </nav>

      <p className="flex">
        <span className="font-bold text-cyan-700">Vocab Vault</span> ©
        {new Date().getFullYear()} - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
