import { colors } from "../theme/tokens";
import { useShopData } from "../hooks/useShopData";
import { resolveBaseImage } from "../assets/registry";
import NavBar from "../components/dashboard/NavBar";
import CoinBalance from "../components/shop/CoinBalance";
import ShopItemCard from "../components/shop/ShopItemCard";

export default function Shop() {
  const { data, loading, error, purchase, equip } = useShopData({
    endpoint: "/api/shop",
  });

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center text-sm font-mono"
        style={{ background: colors.canvas, color: colors.inkMuted }}
      >
        Loading market…
      </div>
    );
  }

  if (!data) {
    return (
      <div
        className="min-h-screen flex items-center justify-center text-sm font-mono px-6 text-center"
        style={{ background: colors.canvas, color: colors.inkMuted }}
      >
        Couldn't reach the market. Try again shortly.
      </div>
    );
  }

  const { coins, items } = data;

  return (
    <div
      className="min-h-screen font-sans flex justify-center pb-28"
      style={{ background: colors.canvas, color: colors.ink }}
    >
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-5xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex flex-col gap-4 sm:gap-6">

        <header className="flex items-center justify-between px-1">
          <span className="font-serif text-lg sm:text-2xl" style={{ color: colors.ink }}>
            Market
          </span>
          <CoinBalance coins={coins} />
        </header>

        {error && (
          <span className="text-[10px] sm:text-xs font-mono px-1" style={{ color: colors.bloom }}>
            offline data
          </span>
        )}

        <div>
          <h3 className="text-xs sm:text-sm tracking-wide mb-3 px-1" style={{ color: colors.inkMuted }}>
            Bases
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {items
              .filter((item) => item.type === "base")
              .map((item) => (
                <ShopItemCard
                  key={item.id}
                  item={item}
                  coins={coins}
                  imageUrl={resolveBaseImage(item.id)}
                  onBuy={purchase}
                  onEquip={equip}
                />
              ))}
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  );
}