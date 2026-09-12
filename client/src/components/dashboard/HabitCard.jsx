import { colors, statCategories } from "../../theme/tokens";
import { IconDumbbell, IconBook, IconDroplet, IconFlame } from "./icons";

const ICONS = {
  strength: IconDumbbell,
  intellect: IconBook,
  health: IconDroplet,
};

export default function HabitCard({ habit, onToggle }) {
  const { id, title, category, streak, progress, completed } = habit;
  const cfg = statCategories[category];
  const Icon = ICONS[category];

  return (
    <div
      className="group rounded-lg pl-3 pr-3 py-2.5 sm:py-3 flex items-center gap-3 border border-transparent transition-all duration-200 hover:-translate-y-0.5"
      style={{ background: colors.panel, borderLeft: `3px solid ${cfg.color}`, color: cfg.color }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 20px ${cfg.color}40`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center shrink-0 transition-all duration-200 group-hover:shadow-[0_0_14px_currentColor]"
        style={{ background: cfg.soft, color: cfg.color }}
      >
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs sm:text-sm truncate" style={{ color: colors.ink }}>{title}</span>
          <span className="flex items-center gap-1 text-[10px] sm:text-xs font-mono shrink-0" style={{ color: colors.inkMuted }}>
            <IconFlame className="w-3 h-3" style={{ color: colors.bloom }} />
            {streak}
          </span>
        </div>
        <div className="h-1 sm:h-1.5 rounded-full overflow-hidden mt-1.5" style={{ background: "#0a1512" }}>
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: cfg.color }} />
        </div>
      </div>

      <button
        onClick={() => onToggle?.(id)}
        aria-pressed={completed}
        aria-label={completed ? `Mark ${title} incomplete` : `Mark ${title} complete`}
        className="w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center border shrink-0 text-[10px] sm:text-xs transition-all duration-200 hover:scale-110"
        style={{
          borderColor: completed ? cfg.color : colors.hairline,
          background: completed ? cfg.color : "transparent",
          color: completed ? colors.canvas : "transparent",
          boxShadow: completed ? `0 0 10px ${cfg.color}80` : "none",
        }}
      >
        ✓
      </button>
    </div>
  );
}