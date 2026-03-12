import { Facebook, Instagram, Mail, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="relative z-10 py-10 px-6">

      <div className="
      max-w-6xl mx-auto
      flex flex-col
      md:flex-row
      items-center
      justify-between
      gap-8
      text-gray-300
      text-center
      md:text-left
      ">

        {/* logo */}
        <div className="text-sm tracking-widest">
          AZTEAC © {new Date().getFullYear()}
        </div>

        {/* nav */}
        <nav className="
        flex
        flex-wrap
        justify-center
        md:justify-center
        gap-6
        text-xs
        md:text-sm
        tracking-wider
        ">
          <a href="#home" className="hover:text-white transition">HOME</a>
          <a href="#services" className="hover:text-white transition">SERVICES</a>
          <a href="#about" className="hover:text-white transition">ABOUT</a>
          <a href="#contact" className="hover:text-white transition">CONTACT</a>
        </nav>

        {/* icons */}
        <div className="
        flex
        justify-center
        items-center
        gap-5
        text-gray-300
        ">

          <a href="https://www.facebook.com/share/1DhpaAyUMz/" target="_blank" className="hover:text-white transition">
            <Facebook size={20}/>
          </a>

          <a href="https://www.instagram.com/azteac_/" target="_blank" className="hover:text-white transition">
            <Instagram size={20}/>
          </a>

          <a href="mailto:contact@azteac.com" className="hover:text-white transition">
            <Mail size={20}/>
          </a>

          <a href="https://www.linkedin.com/company/azteac" target="_blank" className="hover:text-white transition">
            <Linkedin size={20}/>
          </a>

          <a href="https://wa.me/201028468901" target="_blank" className="hover:text-white transition">
            <FaWhatsapp size={20}/>
          </a>

        </div>

      </div>

    </footer>
  );
};

export default FooterSection;