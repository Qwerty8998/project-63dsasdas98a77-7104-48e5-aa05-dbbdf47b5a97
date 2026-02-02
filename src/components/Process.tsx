import { Truck, Drill, Droplets, FileText } from "lucide-react";
import cleanWaterImage from "@/assets/clean-water.jpg";

const steps = [
  {
    number: "01",
    icon: Truck,
    title: "Заезд на участок",
    description: "Выезд мастера, оценка геологии и условий работы. Подбор оптимальной техники.",
  },
  {
    number: "02",
    icon: Drill,
    title: "Бурение",
    description: "Работа буровой установки до достижения водоносного слоя. Обычно занимает 1 день.",
  },
  {
    number: "03",
    icon: Droplets,
    title: "Прокачка",
    description: "Промывка скважины до визуально чистой воды. Проверка дебита и качества.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Документы",
    description: "Оформление паспорта скважины, акта выполненных работ и гарантийного талона.",
  },
];

const Process = () => {
  return (
    <section className="section-padding bg-secondary" id="process">
      <div className="container-industrial">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Section Header */}
            <div className="mb-10">
              <h2 className="heading-large mb-4">
                Прозрачный
                <br />
                <span className="text-primary">процесс работы</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                От первого звонка до чистой воды — 4 простых шага. 
                Вы платите только после того, как увидите результат.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-5 group"
                  >
                    {/* Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 border-2 border-foreground bg-background flex items-center justify-center relative transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                        <span className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                          {step.number}
                        </span>
                        <Icon className="w-7 h-7 transition-colors group-hover:text-primary-foreground" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="border-2 border-foreground overflow-hidden">
              <img
                src={cleanWaterImage}
                alt="Чистая вода из скважины"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 border-2 border-primary">
              <div className="text-4xl md:text-5xl font-black">100%</div>
              <div className="text-sm uppercase tracking-wider opacity-80">
                Результат
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
