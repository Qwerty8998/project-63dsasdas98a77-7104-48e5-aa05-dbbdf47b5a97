import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_PHONE = "79001234567";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Здравствуйте! Я с сайта. Хочу узнать стоимость бурения скважины."
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, "_blank");
  };

  const navLinks = [
    { href: "#calculator", label: "Калькулятор" },
    { href: "#equipment", label: "Техника" },
    { href: "#process", label: "Процесс" },
    { href: "#geography", label: "География" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background border-b-2 border-foreground py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-industrial">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl md:text-2xl font-black">
            <span className={isScrolled ? "text-foreground" : "text-background"}>
              БУРОВЫЕ
            </span>
            <span className="text-primary">ПРО</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-background"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant={isScrolled ? "industrial" : "hero"}
              size="default"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-background"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-background"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b-2 border-foreground">
            <nav className="container-industrial py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-bold uppercase tracking-wider text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="industrial"
                size="default"
                onClick={handleWhatsAppClick}
                className="w-full mt-4"
              >
                <MessageCircle className="w-4 h-4" />
                Написать в WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
