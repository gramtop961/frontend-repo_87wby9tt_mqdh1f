export default function ActivityFeed() {
  const activities = [];

  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-4 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[#1E293B] font-semibold">Recent Activity</h3>
        <span className="text-xs text-slate-500">Auto-refresh</span>
      </div>
      {activities.length === 0 ? (
        <div className="py-10 grid place-items-center text-center">
          <img
            src="https://illustrations.popsy.co/white/farmer.svg"
            alt="No activity"
            className="h-24 mb-3 opacity-90"
            loading="lazy"
          />
          <p className="text-slate-600 font-medium">No recent activity yet</p>
          <p className="text-slate-500 text-sm mt-1">Start by getting crop advice or checking weather.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-2">Type</th>
                <th className="py-2">Date</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((a, idx) => (
                <tr key={idx} className="border-t border-slate-100">
                  <td className="py-2">{a.type}</td>
                  <td className="py-2">{a.date}</td>
                  <td className="py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      a.status === "Healthy"
                        ? "bg-emerald-50 text-emerald-700"
                        : a.status === "Warning"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-blue-50 text-blue-700"
                    }`}>{a.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
