import { colors } from "../../theme/tokens";
import { IconCoin } from "../dashboard/icons";

export default function CoinBalance({ coins }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 transition-all duration-300 hover:shadow-[0_0_20px_#e0a53f4d]"
      style={{ background: colors.panel, borderColor: colors.hairline }}
    >
      <IconCoin className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.bloom }} />
      <span className="font-mono text-sm sm:text-base" style={{ color: colors.ink }}>
        {coins.toLocaleString()}
      </span>
    </div>
  );
}
