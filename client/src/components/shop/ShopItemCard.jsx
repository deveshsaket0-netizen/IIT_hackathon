import { colors } from "../../theme/tokens";
import { IconCoin, IconLock, IconSprout } from "../dashboard/icons";

export default function ShopItemCard({ item, imageUrl, coins, onBuy, onEquip }) {
  const { id, name, price, owned, equipped } = item;
  const canAfford = coins >= price;

  return (
    <div
      className="group rounded-xl border p-3 sm:p-4 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
      style={{ background: colors.panel, borderColor: equipped ? colors.fern : colors.hairline }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 24px #6fae6a33")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div
        className="relative aspect-square rounded-lg border overflow-hidden flex items-center justify-center"
        style={{ background: colors.panelRaised, borderColor: colors.hairline }}
      >
        <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l transition-colors duration-300 group-hover:border-[#6fae6a]" style={{ borderColor: colors.hairline }} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r transition-colors duration-300 group-hover:border-[#6fae6a]" style={{ borderColor: colors.hairline }} />

        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-3/4 h-3/4 object-contain transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <IconSprout className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: colors.inkMuted }} />
        )}

        {!owned && (
          <div
            className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px]"
            style={{ background: "#0e1a1566" }}
          >
            <IconLock className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.inkMuted }} />
          </div>
        )}
      </div>

      <div>
        <p className="text-xs sm:text-sm truncate" style={{ color: colors.ink }}>{name}</p>
        {price > 0 ? (
          <div className="flex items-center gap-1 mt-0.5">
            <IconCoin className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: colors.bloom }} />
            <span className="text-[11px] sm:text-xs font-mono" style={{ color: colors.inkMuted }}>{price}</span>
          </div>
        ) : (
          <span className="text-[11px] sm:text-xs font-mono" style={{ color: colors.inkMuted }}>starter item</span>
        )}
      </div>

      {equipped ? (
        <button
          disabled
          className="w-full rounded-lg py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono border"
          style={{ borderColor: colors.fern, color: colors.fern, background: "#6fae6a1a" }}
        >
          Equipped
        </button>
      ) : owned ? (
        <button
          onClick={() => onEquip?.(id)}
          className="w-full rounded-lg py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono border transition-all duration-200 hover:shadow-[0_0_16px_#6fae6a4d]"
          style={{ borderColor: colors.hairline, color: colors.ink }}
        >
          Equip
        </button>
      ) : (
        <button
          onClick={() => onBuy?.(id)}
          disabled={!canAfford}
          className="w-full rounded-lg py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono border transition-all duration-200 disabled:opacity-40 enabled:hover:shadow-[0_0_16px_#e0a53f4d]"
          style={{
            borderColor: canAfford ? colors.bloom : colors.hairline,
            color: canAfford ? colors.bloom : colors.inkMuted,
          }}
        >
          {canAfford ? "Buy" : "Not enough coins"}
        </button>
      )}
    </div>
  );
}
