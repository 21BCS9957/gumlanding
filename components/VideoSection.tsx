export default function VideoSection() {
  return (
    <section className="bg-dark-bg py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Video Placeholder */}
        <div className="relative rounded-2xl bg-dark-card border border-dark-border aspect-video flex items-center justify-center">
          {/* Play Button */}
          <div className="flex flex-col items-center gap-4">
            <button className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center hover:bg-brand-yellow-hover transition-colors duration-200 cursor-pointer group">
              {/* Play Triangle */}
              <div className="w-0 h-0 border-l-[16px] border-l-dark-bg border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
            </button>
            <span className="text-xs uppercase tracking-[0.15em] text-text-muted mt-3">
              WATCH — 3.5 MINUTES
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col items-center">
          <a
            href="https://app.reclaim.ai/m/arsh-growumedia"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-lg bg-brand-yellow text-dark-bg font-bold py-5 rounded-xl text-lg text-center hover:bg-brand-yellow-hover transition-colors duration-200 cursor-pointer"
          >
            Book Your Free Channel Audit →
          </a>
          
          {/* Micro-copy */}
          <p className="text-sm text-text-muted mt-4 text-center">
            Takes 30 seconds · No commitment · Walk away with video ideas regardless
          </p>
        </div>
      </div>
    </section>
  );
}
