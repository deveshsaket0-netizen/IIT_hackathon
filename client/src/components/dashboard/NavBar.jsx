import { colors, navItems as defaultItems } from "../../theme/tokens";
import { IconLeaf, IconSprout, IconSatchel, IconMarket, IconUser } from "./icons";

const ICONS = {
  home: IconLeaf,
  plant: IconSprout,
  inventory: IconSatchel,
  market: IconMarket,
  profile: IconUser,
};

export default function NavBar({ active = "home", onNavigate, items = defaultItems }) {
  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md md:max-w-2xl lg:max-w-4xl px-4 sm:px-8 py-3 flex justify-between items-center border-t z-20 backdrop-blur-sm"
      style={{ background: "#0e1a15e6", borderColor: colors.hairline }}
    >
      {items.map(({ key, label }) => {
        const Icon = ICONS[key] ?? IconLeaf;
        const isActive = key === active;
        return (
          <button
            key={key}
            onClick={() => onNavigate?.(key)}
            className="group flex flex-col items-center gap-1 px-2 sm:px-4 py-1 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: isActive ? colors.fern : colors.inkMuted }}
          >
            <Icon
              className="w-5 h-5 transition-all duration-200 group-hover:drop-shadow-[0_0_8px_currentColor]"
              style={{ color: isActive ? colors.fern : "inherit" }}
            />
            <span className="text-[10px] tracking-wide transition-colors duration-200 group-hover:text-[#6fae6a]">
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}