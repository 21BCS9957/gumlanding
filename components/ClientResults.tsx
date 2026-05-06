export default function ClientResults() {
  return (
    <section className="bg-dark-bg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-yellow">
          CLIENT RESULTS
        </div>

        {/* Heading */}
        <h2 className="mt-6 font-manrope font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-left md:text-left">
          <span className="block gradient-headline">Real channels.</span>
          <span className="block gradient-headline">Real business outcomes.</span>
        </h2>

        {/* Subtext */}
        <p className="max-w-xl text-text-muted text-base mt-4">
          Across D2C, SaaS, finance, wellness, and content — the same research-first system produces the same compounding results.
        </p>

        {/* Featured Case Study 01 */}
        <div className="mt-12 rounded-2xl border border-dark-border bg-dark-card overflow-hidden flex flex-col lg:flex-row">
          {/* Left Half - Video */}
          <div className="lg:w-1/2 bg-dark-card-2 min-h-[340px] flex items-center justify-center relative">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center">
                <div className="w-0 h-0 border-l-[16px] border-l-dark-bg border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
              </div>
              <span className="text-xs text-text-muted">Client interview — embed here</span>
            </div>
          </div>

          {/* Right Half - Content */}
          <div className="lg:w-1/2 p-10 flex flex-col justify-center gap-4">
            {/* Labels */}
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
                CASE STUDY 01
              </span>
              <span className="text-xs text-text-muted">D2C · HAIR CARE</span>
            </div>

            {/* Metric Box */}
            <div className="inline-flex items-center bg-brand-yellow-muted border border-brand-yellow-border rounded-lg px-4 py-2 w-fit">
              <span className="text-2xl font-bold text-brand-yellow">$45K</span>
              <span className="text-sm text-text-muted ml-2">
                direct revenue · one video · month one
              </span>
            </div>

            {/* Title */}
            <h3 className="font-manrope font-black text-xl leading-tight gradient-headline text-left md:text-left">
              Andrew Verbinnen — Anagen Hair Care
            </h3>

            {/* Body Text */}
            <div className="space-y-3 text-sm text-text-muted leading-relaxed">
              <p>
                Andrew had a hair care product and a group of freelancers running his YouTube. Each one delivering their piece, none talking to each other, zero research behind any decision. Months of consistent output. Nothing moved.
              </p>
              <p>
                His fourth video with us drove 200,000 views and $45,000 in direct product revenue — in a single month. No paid ads. One video. Because for the first time, someone figured out which video to make before anyone touched a camera. YouTube then monetised his channel — the platform now pays him every month just to keep posting.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Case Study 02 */}
          <div className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden">
            {/* Video Top */}
            <div className="bg-dark-card-2 aspect-video flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-dark-bg border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-xs text-text-muted">Case study video — embed here</span>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-8 space-y-4">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
                  CASE STUDY 02
                </span>
                <span className="text-xs text-text-muted">B2B SAAS</span>
              </div>

              <div className="inline-flex items-center bg-brand-yellow-muted border border-brand-yellow-border rounded-lg px-4 py-2 w-fit flex-wrap">
                <span className="text-lg font-bold text-brand-yellow">500K views</span>
                <span className="text-sm text-text-muted ml-2">
                  · 90 days · 33% more demos
                </span>
              </div>

              <h3 className="font-manrope font-black text-xl leading-tight gradient-headline text-left md:text-left">
                Vista Social — B2B SaaS Platform
              </h3>

              <p className="text-sm text-text-muted leading-relaxed">
                Vista Social had a full content team producing YouTube videos every single week. Consistent output. Zero business results from any of it. 90 days after we stepped in — 500,000 views, 33% more qualified demo requests. Same team. Completely different system behind it.
              </p>
            </div>
          </div>

          {/* Case Study 03 */}
          <div className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden">
            {/* Video Top */}
            <div className="bg-dark-card-2 aspect-video flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[16px] border-l-dark-bg border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-xs text-text-muted">Case study video — embed here</span>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-8 space-y-4">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
                  CASE STUDY 03
                </span>
                <span className="text-xs text-text-muted">WELLNESS · PERSONAL BRAND</span>
              </div>

              <div className="inline-flex items-center bg-brand-yellow-muted border border-brand-yellow-border rounded-lg px-4 py-2 w-fit flex-wrap">
                <span className="text-lg font-bold text-brand-yellow">14X revenue growth</span>
                <span className="text-sm text-text-muted ml-2">
                  · $1.4K → $20K/month
                </span>
              </div>

              <h3 className="font-manrope font-black text-xl leading-tight gradient-headline text-left md:text-left">
                Adison Briana — Yoga & Wellness
              </h3>

              <p className="text-sm text-text-muted leading-relaxed">
                Started at 824K subscribers with $1,400/month in revenue. Nine months later — 1.49 million subscribers, 154 million views, $20,000 per month. A 14X revenue increase driven entirely by a research-first content system, not by posting more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
