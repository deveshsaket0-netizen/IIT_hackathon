import { useEffect, useState } from "react";

const FALLBACK = {
  user: {
    name: "Elara Vane",
    title: "Bloomseeker",
    level: 14,
    exp: 320,
    expToNext: 900,
    avatarUrl: null,
  },
  plant: {
    name: "Biolume Orchid",
    species: "biolume-orchid",
    stage: "seed",
    growthPercent: 62,
    baseId: "clay-pot",
  },
  stats: { strength: 48, intellect: 71, health: 60 },
  streak: {
    current: 11,
    longest: 19,
    days: Array.from({ length: 16 }, (_, i) => i < 11),
  },
  habits: [
    { id: "h1", title: "Morning run", category: "strength", streak: 6, progress: 80, completed: true },
    { id: "h2", title: "Read 20 pages", category: "intellect", streak: 11, progress: 100, completed: true },
    { id: "h3", title: "Hydration", category: "health", streak: 3, progress: 40, completed: false },
    { id: "h4", title: "Mobility stretch", category: "strength", streak: 2, progress: 20, completed: false },
    { id: "h5", title: "Study session", category: "intellect", streak: 4, progress: 55, completed: false },
    { id: "h6", title: "Wind-down journal", category: "health", streak: 11, progress: 90, completed: true },
  ],
};

export function useDashboardData({ endpoint = "/api/dashboard", auto = true } = {}) {
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
  }, [endpoint, auto]);

  const toggleHabit = (id) => {
    setData((prev) =>
      prev
        ? {
            ...prev,
            habits: prev.habits.map((h) =>
              h.id === id ? { ...h, completed: !h.completed } : h
            ),
          }
        : prev
    );
  };

  return { data, loading, error, refetch, toggleHabit };
}