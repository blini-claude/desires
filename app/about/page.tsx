export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="px-5 md:px-10 pt-12 md:pt-20 pb-32 max-w-[1400px]">
      <div className="mb-12">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">
          About
        </p>
        <h1 className="font-display uppercase text-[clamp(64px,14vw,240px)] mt-2 leading-[0.85]">
          A Label<br />For Want.
        </h1>
      </div>

      <div className="grid md:grid-cols-12 gap-x-6 gap-y-12">
        <div className="md:col-span-7 space-y-6 text-[16px] md:text-[18px] leading-relaxed text-ink-soft">
          <p>
            Desires is a small streetwear label working in batches small enough
            to know each piece by name. Cut, sewn, and finished by people in the
            same room, on the same week, before they go anywhere.
          </p>
          <p>
            We don&apos;t do seasons. We do drops when a thing is ready. Some
            land twice a year, some four times, some never.
          </p>
          <p>
            Every garment is built around one idea: the want you can&apos;t shake
            until you&apos;re wearing it.
          </p>
        </div>

        <aside className="md:col-span-5 md:pl-10 md:border-l md:border-line space-y-8 text-[12px] font-mono uppercase tracking-[0.2em]">
          <div>
            <p className="text-muted mb-3">Made In</p>
            <p>Portugal · Italy · Japan</p>
          </div>
          <div>
            <p className="text-muted mb-3">Studio</p>
            <p>
              Los Angeles, CA<br />
              By appointment.
            </p>
          </div>
          <div>
            <p className="text-muted mb-3">Press · Wholesale</p>
            <p>hello@desires.today</p>
          </div>
        </aside>
      </div>

      <div className="mt-32 border-t border-line pt-10">
        <p className="font-display uppercase text-[clamp(36px,6vw,86px)] leading-[1.02] max-w-[18ch]">
          Wear loud. Last long.
        </p>
      </div>
    </section>
  );
}
