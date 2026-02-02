import { Ruler, Gauge, Truck } from "lucide-react";
import rig1Image from "@/assets/drilling-rig-1.jpg";
import rig2Image from "@/assets/drilling-rig-2.jpg";

const equipment = [
  {
    image: rig1Image,
    name: "УРБ-2А2",
    description: "Мобильная буровая установка на базе грузовика",
    specs: [
      { icon: Ruler, label: "Глубина бурения", value: "до 200м" },
      { icon: Gauge, label: "Диаметр", value: "до 300мм" },
      { icon: Truck, label: "Ширина прохода", value: "2.5м" },
    ],
  },
  {
    image: rig2Image,
    name: "Малогабаритная установка",
    description: "Компактная техника для участков с ограниченным доступом",
    specs: [
      { icon: Ruler, label: "Глубина бурения", value: "до 100м" },
      { icon: Gauge, label: "Диаметр", value: "до 200мм" },
      { icon: Truck, label: "Ширина прохода", value: "1.5м" },
    ],
  },
];

const Equipment = () => {
  return (
    <section className="section-padding bg-background" id="equipment">
      <div className="container-industrial">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="heading-large mb-4">
            Наша <span className="text-primary">техника</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Собственный парк буровых установок. Подберём технику под ваш участок — 
            даже если проезд всего 1.5 метра.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="card-industrial p-0 overflow-hidden group"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-black mb-2">{item.name}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>

                {/* Specs */}
                <div className="space-y-3">
                  {item.specs.map((spec, specIndex) => {
                    const Icon = spec.icon;
                    return (
                      <div
                        key={specIndex}
                        className="flex items-center justify-between py-2 border-b border-border last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-primary" />
                          <span className="text-sm text-muted-foreground">{spec.label}</span>
                        </div>
                        <span className="font-bold">{spec.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className="mt-12 p-6 md:p-8 bg-primary text-primary-foreground border-2 border-primary">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-wider opacity-80 mb-1">Важно</div>
              <div className="text-xl md:text-2xl font-bold">
                Проезд всего 1.5 метра? Не проблема!
              </div>
            </div>
            <div className="text-sm md:text-base opacity-80 max-w-md">
              Малогабаритная установка проходит через любые ворота и калитки. 
              Бурим даже в самых стеснённых условиях.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
