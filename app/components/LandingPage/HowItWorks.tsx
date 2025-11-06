
export default function HowItWorks() {
  const steps = [
    { num: "1", title: "Send Securely", desc: "Your message is encrypted before it leaves your device." },
    { num: "2", title: "Travel Safely", desc: "It passes through our secure servers — without being stored." },
    { num: "3", title: "Arrive Privately", desc: "Only the recipient can decrypt and read your message." },
  ];

  return (
    <section className="px-8 md:px-16 py-20 bg-[#0F172A] text-center">
      <h2 className="text-4xl font-bold mb-10">Your Messages. Your Privacy.</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
        {steps.map((s) => (
          <div key={s.num} className="flex-1">
            <div className="text-emerald-400 text-5xl font-bold mb-4">{s.num}</div>
            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
