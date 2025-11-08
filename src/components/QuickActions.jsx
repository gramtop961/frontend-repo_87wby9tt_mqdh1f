import { Leaf, ScanLine, CloudSun } from "lucide-react";

const actions = [
  {
    title: "Get Crop Advise",
    description: "Smart suggestions based on soil and weather",
    icon: Leaf,
    gradient: "from-emerald-500 to-[#3B7A57]",
  },
  {
    title: "Detect Plant Disease",
    description: "Upload a photo for instant diagnosis",
    icon: ScanLine,
    gradient: "from-amber-400 to-amber-600",
  },
  {
    title: "Check Weather",
    description: "Forecast and insights for your farm",
    icon: CloudSun,
    gradient: "from-sky-400 to-[#03A9F4]",
  },
];

export default function QuickActions() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {actions.map((a) => (
        <button
          key={a.title}
          className={`group relative overflow-hidden rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-lg transition-all bg-gradient-to-br ${a.gradient} text-left`}
        >
          <div className="p-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">{a.title}</p>
                <p className="text-white/90 text-sm mt-1">{a.description}</p>
              </div>
              <span className="h-12 w-12 rounded-xl bg-white/20 grid place-items-center">
                <a.icon className="h-6 w-6" />
              </span>
            </div>
          </div>
        </button>
      ))}
    </section>
  );
}
