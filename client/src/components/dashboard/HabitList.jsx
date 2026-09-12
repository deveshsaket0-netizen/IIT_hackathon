import { colors } from "../../theme/tokens";
import HabitCard from "./HabitCard";

export default function HabitList({ habits, onToggle }) {
  const done = habits.filter((h) => h.completed).length;

  return (
    <div
      className="rounded-xl p-4 sm:p-5 border flex flex-col gap-2.5 sm:gap-3 transition-shadow duration-300 hover:shadow-[0_0_24px_#2f4a3d80]"
      style={{ background: colors.panel, borderColor: colors.hairline }}
    >
      <div className="flex items-baseline justify-between mb-1">
        <h3 className="text-xs sm:text-sm tracking-wide" style={{ color: colors.inkMuted }}>Today's habits</h3>
        <span className="text-[11px] sm:text-xs font-mono" style={{ color: colors.inkMuted }}>
          {done}/{habits.length}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
        {habits.map((h) => (
          <HabitCard key={h.id} habit={h} onToggle={onToggle} />
        ))}
      </div>
    </div>
  );
}