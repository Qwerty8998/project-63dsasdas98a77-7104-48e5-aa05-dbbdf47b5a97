import { useState, useMemo } from "react";
import { MessageCircle, Layers, Home, Factory, Mountain, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const WHATSAPP_PHONE = "79001234567"; // Replace with actual phone

type SoilType = "sand" | "clay" | "rock";
type PurposeType = "dacha" | "house" | "industrial";

const soilOptions: { value: SoilType; label: string; icon: typeof Layers; priceMultiplier: number }[] = [
  { value: "sand", label: "Песок", icon: Layers, priceMultiplier: 1 },
  { value: "clay", label: "Глина", icon: Mountain, priceMultiplier: 1.2 },
  { value: "rock", label: "Скала / Известняк", icon: TreePine, priceMultiplier: 1.5 },
];

const purposeOptions: { value: PurposeType; label: string; icon: typeof Home; basePrice: number }[] = [
  { value: "dacha", label: "Для дачи", icon: TreePine, basePrice: 2500 },
  { value: "house", label: "Для частного дома", icon: Home, basePrice: 3000 },
  { value: "industrial", label: "Промышленный узел", icon: Factory, basePrice: 4000 },
];

const Calculator = () => {
  const [soil, setSoil] = useState<SoilType>("clay");
  const [purpose, setPurpose] = useState<PurposeType>("house");
  const [depth, setDepth] = useState([50]);

  const price = useMemo(() => {
    const soilOption = soilOptions.find((s) => s.value === soil);
    const purposeOption = purposeOptions.find((p) => p.value === purpose);
    if (!soilOption || !purposeOption) return 0;
    return Math.round(purposeOption.basePrice * soilOption.priceMultiplier * depth[0]);
  }, [soil, purpose, depth]);

  const handleWhatsAppClick = () => {
    const soilLabel = soilOptions.find((s) => s.value === soil)?.label || "";
    const purposeLabel = purposeOptions.find((p) => p.value === purpose)?.label || "";
    
    const message = encodeURIComponent(
      `Здравствуйте! Я с сайта. Нужен расчет бурения. Объект: ${purposeLabel}, Грунт: ${soilLabel}, Глубина: ${depth[0]}м. Сориентируйте по срокам и итоговой цене?`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, "_blank");
  };

  return (
    <section className="section-padding bg-secondary" id="calculator">
      <div className="container-industrial">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="heading-large mb-4">
            Узнайте точную глубину
            <br />
            <span className="text-primary">и стоимость онлайн</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Заполните параметры и получите предварительный расчёт. Точную стоимость уточнит мастер.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Calculator Form */}
          <div className="space-y-8">
            {/* Soil Type */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-4">
                Тип грунта
              </label>
              <div className="grid grid-cols-3 gap-3">
                {soilOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = soil === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => setSoil(option.value)}
                      className={`p-4 border-2 transition-all duration-200 text-left ${
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-foreground bg-background hover:bg-muted"
                      }`}
                    >
                      <Icon className="w-6 h-6 mb-2" />
                      <span className="block font-bold text-sm">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Purpose */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-4">
                Назначение
              </label>
              <div className="grid grid-cols-3 gap-3">
                {purposeOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = purpose === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => setPurpose(option.value)}
                      className={`p-4 border-2 transition-all duration-200 text-left ${
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-foreground bg-background hover:bg-muted"
                      }`}
                    >
                      <Icon className="w-6 h-6 mb-2" />
                      <span className="block font-bold text-sm">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Depth Slider */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-4">
                Предполагаемая глубина: <span className="text-primary">{depth[0]} метров</span>
              </label>
              <div className="py-4">
                <Slider
                  value={depth}
                  onValueChange={setDepth}
                  min={10}
                  max={150}
                  step={5}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>10м</span>
                <span>150м</span>
              </div>
            </div>
          </div>

          {/* Price Display & CTA */}
          <div className="lg:pl-8">
            <div className="card-industrial bg-foreground text-background p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-sm uppercase tracking-wider text-background/60">
                  Примерная стоимость
                </span>
                <div className="mt-4 mb-2">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-black text-primary">
                    от {price.toLocaleString("ru-RU")}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-background ml-2">₽</span>
                </div>
                <p className="text-background/60 text-sm">
                  Финальная цена зависит от геологии на участке
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={handleWhatsAppClick}
                  className="w-full group"
                >
                  <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
                  Отправить расчёт мастеру
                </Button>
                <p className="text-center text-background/40 text-xs">
                  Ответим в течение 15 минут
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
