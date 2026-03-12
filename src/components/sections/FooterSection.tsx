import { Facebook, Instagram, Mail, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FooterSection = () => {
  return (
  <footer className="relative z-10 py-16 px-6">

  <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-10 text-muted-foreground whitespace-nowrap">

    {/* Logo */}
    <a
      href="https://azteac.com"
      target="_blank"
      rel="noopener noreferrer"
      className="azteac-container"
    >
      <span className="azteac-text">
        AZTEAC <span className="ml-2 text-sm opacity-70">© 2026</span>
      </span>
    </a>

    {/* nav */}
    <nav className="flex gap-8 font-label text-sm">
      <a href="#home" className="hover:text-white transition">Home</a>
      <a href="#services" className="hover:text-white transition">Services</a>
      <a href="#about" className="hover:text-white transition">About</a>
      <a href="#contact" className="hover:text-white transition">Contact</a>
    </nav>

    {/* icons */}
    <div className="flex gap-6 text-gray-300">
      <a href="https://www.facebook.com/share/1DhpaAyUMz/" target="_blank" className="hover:text-white transition">
        <Facebook size={22} strokeWidth={1.6}/>
      </a>

      <a href="https://www.instagram.com/azteac_/" target="_blank" className="hover:text-white transition">
        <Instagram size={22} strokeWidth={1.6}/>
      </a>

      <a href="mailto:contact@azteac.com" className="hover:text-white transition">
        <Mail size={22} strokeWidth={1.6}/>
      </a>

      <a href="https://www.linkedin.com/company/azteac" target="_blank" className="hover:text-white transition">
        <Linkedin size={22} strokeWidth={1.6}/>
      </a>

      <a href="https://wa.me/201028468901" target="_blank">
        <FaWhatsapp size={22}/>
      </a>
    </div>

  </div>

</footer>
  );
};

export default FooterSection;