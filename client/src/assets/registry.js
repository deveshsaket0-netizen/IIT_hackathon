import clayPot from "./bases/clay-pot.png.png";
import orchidSeed from "./plants/seed.png.png";
import orchidBloom from "./plants/bloom.png.png";

export const bases = {
  "clay-pot": clayPot,
};

export const plants = {
  "biolume-orchid": {
    seed: orchidSeed,
    bloom: orchidBloom,
  },
};

export function resolvePlantImage(species, stage) {
  return plants[species]?.[stage] ?? null;
}

export function resolveBaseImage(baseId) {
  return bases[baseId] ?? null;
}