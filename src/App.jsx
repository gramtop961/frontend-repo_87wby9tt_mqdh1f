import HeaderBar from "./components/HeaderBar";
import MetricCards from "./components/MetricCards";
import QuickActions from "./components/QuickActions";
import ActivityFeed from "./components/ActivityFeed";

function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1E293B] flex flex-col">
      <HeaderBar />

      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Hero / Login teaser */}
        <section className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
          <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Welcome to CropMind</h2>
              <p className="text-slate-600 mt-2">
                A modern, mobile-first farming dashboard focused on clean design and smooth experience. Connect your account to start getting crop advice, detect diseases, and monitor weather.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="h-11 px-5 rounded-2xl bg-[#8BC34A] text-[#1E293B] font-medium shadow-md hover:brightness-110 transition-all">
                  Login
                </button>
                <button className="h-11 px-5 rounded-2xl bg-[#FFC107] text-[#1E293B] font-medium shadow-md hover:brightness-110 transition-all">
                  Create Demo
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-3">Demo: username "farmer" • password "cropmind"</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-xl p-6">
              <MetricCards />
            </div>
          </div>
        </section>

        <QuickActions />

        <ActivityFeed />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 inset-x-0 md:hidden bg-white/90 backdrop-blur border-t border-slate-200">
        <ul className="grid grid-cols-5 text-xs">
          {[
            { label: "Home", icon: "🏠" },
            { label: "Crop", icon: "🌿" },
            { label: "Disease", icon: "🧪" },
            { label: "Weather", icon: "☀️" },
            { label: "Chat", icon: "💬" },
          ].map((i) => (
            <li key={i.label} className="py-2">
              <button className="mx-auto grid place-items-center gap-0.5">
                <span className="text-lg leading-none">{i.icon}</span>
                <span>{i.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;
