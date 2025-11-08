import { ArrowUpRight, Leaf, TriangleAlert, MessageSquare } from "lucide-react";

const cards = [
  {
    title: "Total Predictions",
    value: "1,248",
    icon: ArrowUpRight,
    color: "from-[#3B7A57] to-[#8BC34A]",
  },
  {
    title: "Crops Advise",
    value: "532",
    icon: Leaf,
    color: "from-emerald-400 to-[#3B7A57]",
  },
  {
    title: "Diseases Detected",
    value: "37",
    icon: TriangleAlert,
    color: "from-amber-400 to-amber-600",
  },
  {
    title: "AI Interactions",
    value: "3,904",
    icon: MessageSquare,
    color: "from-sky-400 to-[#03A9F4]",
  },
];

export default function MetricCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((c) => (
        <article
          key={c.title}
          className="rounded-2xl p-4 bg-gradient-to-br text-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow"
          style={{ backgroundImage: undefined }}
        >
          <div className={`bg-gradient-to-br ${c.color} rounded-xl p-4 min-h-[120px] flex items-center justify-between`}>
            <div>
              <p className="text-sm/5 opacity-90">{c.title}</p>
              <p className="text-2xl sm:text-3xl font-semibold mt-2">{c.value}</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-white/20 grid place-items-center">
              <c.icon className="h-6 w-6" />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
