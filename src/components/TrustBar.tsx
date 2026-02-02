import { FileCheck, Award, MapPin } from "lucide-react";

const trustItems = [
  {
    icon: FileCheck,
    title: "Договор по ГОСТ",
    description: "Официальный договор с гарантией",
  },
  {
    icon: Award,
    title: "Паспорт скважины",
    description: "Полный комплект документов",
  },
  {
    icon: MapPin,
    title: "Бесплатный выезд",
    description: "Замер и консультация на месте",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-foreground py-6 md:py-8">
      <div className="container-industrial">
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 text-background"
              >
                <div className="flex-shrink-0 w-12 h-12 border-2 border-primary flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base">{item.title}</div>
                  <div className="text-background/60 text-xs md:text-sm">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
