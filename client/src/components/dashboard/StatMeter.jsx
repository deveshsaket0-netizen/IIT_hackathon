import { colors, statCategories } from "../../theme/tokens";
import { IconDumbbell, IconBook, IconDroplet } from "./icons";

const ICONS = {
  strength: IconDumbbell,
  intellect: IconBook,
  health: IconDroplet,
};

export default function StatMeter({ category, value, max = 100 }) {
  const cfg = statCategories[category];
  const Icon = ICONS[category];
  const pct = Math.min(100, Math.round((value / max) * 100));

  return (
    <div
      className="group flex items-center gap-2.5 sm:gap-3 rounded-lg -mx-1.5 px-1.5 py-1 transition-colors duration-200 hover:bg-white/[0.03]"
      style={{ color: cfg.color }}
    >
      <div
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center shrink-0 transition-all duration-200 group-hover:shadow-[0_0_16px_currentColor]"
        style={{ background: cfg.soft, color: cfg.color }}
      >
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between">
          <span className="text-xs sm:text-sm" style={{ color: colors.ink }}>{cfg.label}</span>
          <span className="text-[11px] sm:text-xs font-mono" style={{ color: colors.inkMuted }}>{value}</span>
        </div>
        <div
          className="h-1.5 sm:h-2 rounded-full overflow-hidden mt-1 border"
          style={{ background: "#0a1512", borderColor: colors.hairline }}
        >
          <div
            className="h-full rounded-full transition-all duration-500 group-hover:shadow-[0_0_10px_currentColor]"
            style={{ width: `${pct}%`, background: cfg.color, color: cfg.color }}
          />
        </div>
      </div>
    </div>
  );
}