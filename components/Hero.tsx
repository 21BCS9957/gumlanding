export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-bg px-6 pt-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center justify-center">
          <div className="rounded-full border border-dark-border bg-dark-card px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-text-muted">
            For Founders & Business Owners Serious About YouTube Growth
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="mt-12 font-playfair font-black leading-[1.05] tracking-tight text-justify md:text-center">
          <span className="block text-[clamp(3rem,6vw,5rem)] gradient-headline">
            We'll Drive Revenue From Your
          </span>
          <span className="block text-[clamp(3rem,6vw,5rem)] gradient-headline">
            YouTube In 30 Days. Organically.
          </span>
          <span className="block text-[clamp(3rem,6vw,5rem)] gradient-headline italic">
            Or We Work For Free.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base text-text-muted max-w-sm mx-auto mt-6">
          90 days or we keep working for free. No lock-in. Month on month.
        </p>
      </div>
    </section>
  );
}
