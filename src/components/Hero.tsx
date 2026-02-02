import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-drilling.jpg";

const WHATSAPP_PHONE = "79001234567"; // Replace with actual phone

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Здравствуйте! Я с сайта. Хочу узнать стоимость бурения скважины. Сориентируйте по срокам и цене?"
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Буровая установка"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      {/* Content */}
      <div className="container-industrial relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="inline-block border-2 border-primary bg-primary px-4 py-2 mb-8 animate-fade-in">
            <span className="text-primary-foreground font-bold uppercase tracking-wider text-sm">
              Бурение за 1 день
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="heading-massive text-background mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Профессиональное
            <br />
            <span className="text-primary">бурение скважин</span>
            <br />
            в Москве
          </h1>

          {/* Subheadline */}
          <p 
            className="text-xl md:text-2xl text-background/80 max-w-2xl mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Собственный парк техники, паспорт скважины и гарантия на воду до 10 лет. 
            <span className="text-primary font-semibold"> Оплата только после появления чистой воды.</span>
          </p>

          {/* CTA Button */}
          <div 
            className="animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={handleWhatsAppClick}
              className="group"
            >
              <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
              Рассчитать стоимость в WhatsApp
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t-2 border-background/20 max-w-xl animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary">500+</div>
              <div className="text-background/60 text-sm uppercase tracking-wider mt-1">Скважин</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary">10</div>
              <div className="text-background/60 text-sm uppercase tracking-wider mt-1">Лет гарантии</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-primary">1</div>
              <div className="text-background/60 text-sm uppercase tracking-wider mt-1">День работы</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-pulse-industrial">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
