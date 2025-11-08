import { Settings, User } from "lucide-react";

export default function HeaderBar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-[#3B7A57] shadow-md grid place-items-center">
            <span className="text-white font-semibold">C</span>
          </div>
          <div className="leading-tight">
            <h1 className="text-xl sm:text-2xl font-semibold text-[#1E293B]">CropMind</h1>
            <p className="text-xs text-slate-500">AI Farming Platform</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="h-10 w-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all grid place-items-center"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5 text-slate-600" />
          </button>
          <button className="h-10 px-4 rounded-2xl bg-[#8BC34A] text-[#1E293B] font-medium shadow-md hover:brightness-110 transition-all">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>Welcome, Farmer</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
