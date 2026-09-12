import { colors } from "../../theme/tokens";
import { IconSprout } from "./icons";

export default function PlantShowcase({ name, stage, growthPercent, baseImageUrl, plantImageUrl }) {
  return (
    <div className="flex flex-col items-center py-4 sm:py-6">
      <div
        className="group relative w-44 h-56 sm:w-56 sm:h-72 rounded-t-[999px] border-x border-t overflow-hidden transition-all duration-300 hover:-translate-y-1"
        style={{ background: colors.panelRaised, borderColor: colors.hairline }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px #6fae6a40")}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        <span className="absolute top-2 left-2 w-2 h-2 border-t border-l transition-colors duration-300 group-hover:border-[#6fae6a] z-20" style={{ borderColor: colors.hairline }} />
        <span className="absolute top-2 right-2 w-2 h-2 border-t border-r transition-colors duration-300 group-hover:border-[#6fae6a] z-20" style={{ borderColor: colors.hairline }} />

        {baseImageUrl && (
          <img
            src={baseImageUrl}
            alt=""
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 object-contain z-0"
          />
        )}

        {plantImageUrl ? (
          <img
            src={plantImageUrl}
            alt={name}
            className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-2/3 object-contain z-10 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-end gap-2 pb-10 transition-transform duration-300 group-hover:scale-105"
            style={{ color: colors.inkMuted }}
          >
            <IconSprout className="w-10 h-10 sm:w-14 sm:h-14 group-hover:drop-shadow-[0_0_10px_#6fae6a]" />
            <span className="text-[10px] sm:text-xs font-mono">plant asset — {stage}</span>
          </div>
        )}

        {!baseImageUrl && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-8 rounded-t-md" style={{ background: colors.hairline, opacity: 0.5 }} />
        )}
      </div>

      <div className="mt-3 sm:mt-4 text-center">
        <p className="font-serif text-sm sm:text-lg" style={{ color: colors.ink }}>{name}</p>
        <p className="text-[11px] sm:text-sm font-mono mt-0.5" style={{ color: colors.inkMuted }}>
          {stage} · {growthPercent}% grown
        </p>
      </div>
    </div>
  );
}