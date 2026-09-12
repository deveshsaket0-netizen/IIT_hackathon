import { useState } from "react";
import { colors } from "../theme/tokens";
import { useDashboardData } from "../hooks/useDashboardData";
import { resolveBaseImage, resolvePlantImage } from "../assets/registry";
import NavBar from "../components/dashboard/NavBar";
import UserBadge from "../components/dashboard/UserBadge";
import PlantShowcase from "../components/dashboard/PlantShowcase";
import StatBar from "../components/dashboard/StatBar";
import StreakTracker from "../components/dashboard/StreakTracker";
import HabitList from "../components/dashboard/HabitList";

export default function Dashboard() {
  const { data, loading, error, toggleHabit } = useDashboardData({
    endpoint: "/api/dashboard",
  });
  const [activeTab, setActiveTab] = useState("home");

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center text-sm font-mono"
        style={{ background: colors.canvas, color: colors.inkMuted }}
      >
        Loading greenhouse…
      </div>
    );
  }

  if (!data) {
    return (
      <div
        className="min-h-screen flex items-center justify-center text-sm font-mono px-6 text-center"
        style={{ background: colors.canvas, color: colors.inkMuted }}
      >
        Couldn't reach the greenhouse. Try again shortly.
      </div>
    );
  }

  const { user, plant, stats, streak, habits } = data;

  return (
    <div
      className="min-h-screen font-sans flex justify-center pb-28"
      style={{ background: colors.canvas, color: colors.ink }}
    >
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-5xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex flex-col gap-4 sm:gap-6">

        <header className="flex items-center justify-between px-1">
          <span className="font-serif text-lg sm:text-2xl" style={{ color: colors.ink }}>
            Field Journal
          </span>
          {error && (
            <span className="text-[10px] sm:text-xs font-mono" style={{ color: colors.bloom }}>
              offline data
            </span>
          )}
        </header>

        <UserBadge user={user} />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-4 sm:gap-6">
          <div className="flex flex-col gap-4 sm:gap-6">
            <PlantShowcase
              name={plant.name}
              stage={plant.stage}
              growthPercent={plant.growthPercent}
              baseImageUrl={resolveBaseImage(plant.baseId)}
              plantImageUrl={resolvePlantImage(plant.species, plant.stage)}
            />
            <StreakTracker streak={streak} />
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <StatBar stats={stats} />
            <HabitList habits={habits} onToggle={toggleHabit} />
          </div>
        </div>
      </div>

      <NavBar active={activeTab} onNavigate={setActiveTab} />
    </div>
  );
}