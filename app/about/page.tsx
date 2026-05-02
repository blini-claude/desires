export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="pw" style={{ paddingTop: 120, paddingBottom: 100, maxWidth: 1100 }}>
      <header className="mb-12">
        <p className="vc-desc" style={{ color: "rgba(0,0,0,0.55)" }}>About</p>
        <h1 className="vc-title" style={{ color: "#000", marginTop: 6 }}>A Label For Want.</h1>
      </header>

      <div className="grid md:grid-cols-12 gap-x-8 gap-y-10">
        <div className="md:col-span-7 space-y-5">
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

        <aside className="md:col-span-5 md:pl-10 md:border-l md:border-line space-y-8">
          <div>
            <p className="vc-desc" style={{ color: "rgba(0,0,0,0.55)", textTransform: "uppercase", marginBottom: 6 }}>Made In</p>
            <p>Portugal · Italy · Japan</p>
          </div>
          <div>
            <p className="vc-desc" style={{ color: "rgba(0,0,0,0.55)", textTransform: "uppercase", marginBottom: 6 }}>Studio</p>
            <p>Los Angeles, CA<br />By appointment.</p>
          </div>
          <div>
            <p className="vc-desc" style={{ color: "rgba(0,0,0,0.55)", textTransform: "uppercase", marginBottom: 6 }}>Press · Wholesale</p>
            <p>hello@desires.today</p>
          </div>
        </aside>
      </div>

      <div className="mt-24 border-t border-line pt-10">
        <p className="vc-title" style={{ color: "#000" }}>Wear loud. Last long.</p>
      </div>
    </section>
  );
}
