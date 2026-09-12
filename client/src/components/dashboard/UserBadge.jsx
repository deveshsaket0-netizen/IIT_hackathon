import { colors } from "../../theme/tokens";
import { IconUser } from "./icons";

export default function UserBadge({ user }) {
  const { name, title, level, exp, expToNext, avatarUrl } = user;
  const pct = Math.min(100, Math.round((exp / expToNext) * 100));

  return (
    <div
      className="group rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 border transition-all duration-300 hover:-translate-y-0.5"
      style={{ background: colors.panel, borderColor: colors.hairline }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 26px #e0a53f3d")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div
        className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center border transition-all duration-300 group-hover:shadow-[0_0_18px_#6fae6a66] group-hover:border-[#6fae6a]"
        style={{ background: colors.panelRaised, borderColor: colors.hairline }}
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <IconUser className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.inkMuted }} />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="text-sm sm:text-base truncate" style={{ color: colors.ink }}>
            <span style={{ color: colors.bloom }}>Lv.{level}</span>{" "}
            <span className="font-serif">{name}</span>
          </h2>
          <span
            className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full border shrink-0"
            style={{ color: colors.inkMuted, borderColor: colors.hairline }}
          >
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1.5 sm:mt-2">
          <span className="text-[10px] sm:text-xs font-mono" style={{ color: colors.inkMuted }}>
            {exp}/{expToNext}
          </span>
          <div
            className="flex-1 h-1.5 sm:h-2 rounded-full overflow-hidden border"
            style={{ background: "#0a1512", borderColor: colors.hairline }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${pct}%`, background: colors.bloom, boxShadow: "0 0 10px #e0a53f99" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}