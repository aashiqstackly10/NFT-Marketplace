function StatCard({ color, value, label }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-card p-4">
      <div className={`h-10 w-10 rounded-full ${color}`} />
      <div>
        <p className="font-semibold">{value}</p>
        <p className="text-[10px] text-gray-400">{label}</p>
      </div>
    </div>
  );
}

export default StatCard;