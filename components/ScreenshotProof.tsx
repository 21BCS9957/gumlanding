type ScreenshotSlot = {
  label: string;
  helper: string;
  className?: string;
  src?: string;
};

const topSlots: ScreenshotSlot[] = [
  {
    label: "Screenshot 01",
    helper: "Replace with actual image",
  },
  {
    label: "Screenshot 02",
    helper: "Replace with actual image",
  },
  {
    label: "Screenshot 03",
    helper: "Replace with actual image",
  },
  {
    label: "Screenshot 04",
    helper: "Replace with actual image",
  },
];

const bottomSlots: ScreenshotSlot[] = [
  {
    label: "Screenshot 07",
    helper: "Replace with actual image",
  },
  {
    label: "Screenshot 08",
    helper: "Replace with actual image",
  },
  {
    label: "Screenshot 09",
    helper: "Replace with actual image",
  },
  {
    label: "Screenshot 10",
    helper: "Replace with actual image",
  },
];

const sideSlots: ScreenshotSlot[] = [
  {
    label: "Screenshot 05",
    helper: "Replace with actual image",
  },
  {
    label: "Screenshot 06",
    helper: "Replace with actual image",
  },
];

const featuredSlot: ScreenshotSlot = {
  label: "Featured Screenshot — Dashboard / Analytics",
  helper: "Replace with actual image — wider format",
  className: "min-h-[320px] md:min-h-[420px]",
};

function ScreenshotCard({ label, helper, className = "", src }: ScreenshotSlot) {
  return (
    <div
      className={`group relative min-h-[220px] overflow-hidden rounded-lg border border-dark-border bg-dark-card/80 shadow-[0_20px_80px_rgba(0,0,0,0.22)] ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full min-h-[inherit] flex-col items-center justify-center px-6 text-center">
          <div className="text-sm font-black uppercase tracking-[0.16em] text-[#D7D0C2]">
            {label}
          </div>
          <div className="mt-3 text-sm font-semibold text-text-dim">
            {helper}
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.07),transparent_46%)]" />
    </div>
  );
}

export default function ScreenshotProof() {
  return (
    <section className="bg-dark-bg px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
            PROOF IN NUMBERS
          </div>
          <h2 className="mt-6 font-manrope text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            <span className="block gradient-headline">
              The results speak for themselves.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Analytics dashboards, client messages, revenue screenshots — real data from real channels we run.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {topSlots.map((slot) => (
              <ScreenshotCard key={slot.label} {...slot} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr_1fr]">
            <ScreenshotCard {...sideSlots[0]} />
            <ScreenshotCard {...featuredSlot} />
            <ScreenshotCard {...sideSlots[1]} />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bottomSlots.map((slot) => (
              <ScreenshotCard key={slot.label} {...slot} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
