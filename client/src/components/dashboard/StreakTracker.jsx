import { colors } from "../../theme/tokens";
import { IconFlame } from "./icons";

export default function StreakTracker({ streak }) {
  const { current, longest, days } = streak;

  return (
    <div
      className="rounded-xl p-4 sm:p-5 border flex flex-col gap-3 sm:gap-4 transition-shadow duration-300 hover:shadow-[0_0_24px_#2f4a3d80]"
      style={{ background: colors.panel, borderColor: colors.hairline }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xs sm:text-sm tracking-wide" style={{ color: colors.inkMuted }}>Streak garden</h3>
        <div className="flex items-center gap-1 text-xs sm:text-sm font-mono" style={{ color: colors.bloom }}>
          <IconFlame className="w-3.5 h-3.5 sm:w-4 sm:h-4 drop-shadow-[0_0_6px_#e0a53f80]" />
          {current} days
        </div>
      </div>

      <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-16 gap-1.5 sm:gap-2">
        {days.map((grown, i) => (
          <div
            key={i}
            title={`Day ${i + 1}`}
            className="aspect-square rounded-sm transition-all duration-200 hover:scale-125 hover:z-10 hover:shadow-[0_0_10px_#6fae6a99] cursor-default"
            style={{
              background: grown ? colors.fern : colors.panelRaised,
              border: `1px solid ${colors.hairline}`,
              opacity: grown ? 1 : 0.5,
            }}
          />
        ))}
      </div>

      <p className="text-[11px] sm:text-xs font-mono" style={{ color: colors.inkMuted }}>
        Longest run: {longest} days
      </p>
    </div>
  );
}