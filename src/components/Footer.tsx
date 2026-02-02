import { MessageCircle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_PHONE = "79001234567"; // Replace with actual phone

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Здравствуйте! Я с сайта. Хочу узнать стоимость бурения скважины."
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="section-padding border-b border-background/10">
        <div className="container-industrial text-center">
          <h2 className="heading-large text-background mb-4">
            Готовы начать?
          </h2>
          <p className="text-xl text-background/60 max-w-2xl mx-auto mb-8">
            Свяжитесь с нами прямо сейчас — получите бесплатную консультацию 
            и расчёт стоимости за 15 минут.
          </p>
          <Button
            variant="hero"
            size="xl"
            onClick={handleWhatsAppClick}
            className="group"
          >
            <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
            Написать в WhatsApp
          </Button>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12">
        <div className="container-industrial">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <div className="text-2xl font-black mb-4">
                БУРОВЫЕ<span className="text-primary">ПРО</span>
              </div>
              <p className="text-background/60 text-sm leading-relaxed">
                Профессиональное бурение скважин на воду в Москве и Московской области. 
                Работаем с 2012 года.
              </p>
            </div>

            {/* Contacts */}
            <div>
              <div className="font-bold uppercase tracking-wider text-sm mb-4">Контакты</div>
              <div className="space-y-3">
                <a 
                  href="tel:+79001234567" 
                  className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+7 (900) 123-45-67</span>
                </a>
                <div className="flex items-center gap-3 text-background/60">
                  <MapPin className="w-5 h-5" />
                  <span>Москва и МО</span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <div className="font-bold uppercase tracking-wider text-sm mb-4">Режим работы</div>
              <div className="space-y-2 text-background/60 text-sm">
                <div className="flex justify-between">
                  <span>Пн—Пт</span>
                  <span className="text-background">8:00 — 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Сб—Вс</span>
                  <span className="text-background">9:00 — 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10 py-6">
        <div className="container-industrial flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <div>© 2025 БУРОВЫЕПРО. Все права защищены.</div>
          <div>ИНН 7700000000 | ОГРН 1237700000000</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
