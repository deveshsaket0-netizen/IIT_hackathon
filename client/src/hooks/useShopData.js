import { useEffect, useState } from "react";

const FALLBACK = {
  coins: 240,
  items: [
    { id: "clay-pot", name: "Clay Pot", type: "base", price: 0, owned: true, equipped: true },
    { id: "stone-planter", name: "Stone Planter", type: "base", price: 150, owned: false, equipped: false },
    { id: "moonlit-urn", name: "Moonlit Urn", type: "base", price: 300, owned: false, equipped: false },
    { id: "driftwood-crate", name: "Driftwood Crate", type: "base", price: 220, owned: false, equipped: false },
  ],
};

export function useShopData({ endpoint = "/api/shop", auto = true } = {}) {
  const [data, setData] = useState(auto ? null : FALLBACK);
  const [loading, setLoading] = useState(auto);
  const [error, setError] = useState(null);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(endpoint, { credentials: "include" });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err);
      setData((prev) => prev ?? FALLBACK);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auto) refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, auto]);

  const purchase = (itemId) => {
    setData((prev) => {
      if (!prev) return prev;
      const item = prev.items.find((i) => i.id === itemId);
      if (!item || item.owned || prev.coins < item.price) return prev;
      return {
        ...prev,
        coins: prev.coins - item.price,
        items: prev.items.map((i) => (i.id === itemId ? { ...i, owned: true } : i)),
      };
    });
  };

  const equip = (itemId) => {
    setData((prev) => {
      if (!prev) return prev;
      const target = prev.items.find((i) => i.id === itemId);
      if (!target || !target.owned) return prev;
      return {
        ...prev,
        items: prev.items.map((i) =>
          i.type === target.type ? { ...i, equipped: i.id === itemId } : i
        ),
      };
    });
  };

  return { data, loading, error, refetch, purchase, equip };
}
