import { colors } from "../../theme/tokens";
import StatMeter from "./StatMeter";

export default function StatBar({ stats }) {
  return (
    <div
      className="rounded-xl p-4 sm:p-5 border flex flex-col gap-3 sm:gap-4 transition-shadow duration-300 hover:shadow-[0_0_24px_#2f4a3d80]"
      style={{ background: colors.panel, borderColor: colors.hairline }}
    >
      <h3 className="text-xs sm:text-sm tracking-wide" style={{ color: colors.inkMuted }}>Attributes</h3>
      <StatMeter category="strength" value={stats.strength} />
      <StatMeter category="intellect" value={stats.intellect} />
      <StatMeter category="health" value={stats.health} />
    </div>
  );
}