const wells = [
  { x: 25, y: 30, depth: 45 },
  { x: 45, y: 55, depth: 62 },
  { x: 70, y: 25, depth: 38 },
  { x: 60, y: 70, depth: 55 },
  { x: 30, y: 75, depth: 48 },
  { x: 80, y: 50, depth: 72 },
  { x: 15, y: 50, depth: 41 },
];

const GeoMap = () => {
  return (
    <section className="section-padding bg-background" id="geography">
      <div className="container-industrial">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="heading-large mb-4">
            География <span className="text-primary">работ</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Работаем по всей Москве и Московской области. 
            На карте — реальные скважины с указанием глубины.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative border-2 border-foreground bg-secondary overflow-hidden">
          {/* Stylized Map Background */}
          <div className="aspect-[16/9] md:aspect-[21/9] relative">
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Center Circle (Moscow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 border-2 border-foreground/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 border-2 border-foreground/10 rounded-full" />

            {/* Well Markers */}
            {wells.map((well, index) => (
              <div
                key={index}
                className="absolute group cursor-pointer"
                style={{
                  left: `${well.x}%`,
                  top: `${well.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Marker */}
                <div className="relative">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-40" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-foreground text-background px-3 py-2 text-sm font-bold whitespace-nowrap">
                    Глубина: {well.depth}м
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
                </div>
              </div>
            ))}

            {/* Moscow Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-20">
              <div className="text-sm font-bold uppercase tracking-wider text-foreground/40">
                Москва
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-8 border-2 border-foreground">
          <div className="p-6 text-center border-r border-foreground last:border-r-0">
            <div className="text-3xl md:text-4xl font-black text-primary">500+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Скважин</div>
          </div>
          <div className="p-6 text-center border-r border-foreground last:border-r-0">
            <div className="text-3xl md:text-4xl font-black text-primary">150м</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Макс. глубина</div>
          </div>
          <div className="p-6 text-center border-r border-foreground last:border-r-0">
            <div className="text-3xl md:text-4xl font-black text-primary">50+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Районов</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl md:text-4xl font-black text-primary">12</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Лет работы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoMap;
