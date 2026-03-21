import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { Character } from "../backend.d";
import { StatBar } from "./StatBar";

const GRAD_CLASSES = [
  "card-avatar-grad-1",
  "card-avatar-grad-2",
  "card-avatar-grad-3",
  "card-avatar-grad-4",
  "card-avatar-grad-5",
  "card-avatar-grad-6",
  "card-avatar-grad-7",
  "card-avatar-grad-8",
  "card-avatar-grad-9",
  "card-avatar-grad-10",
  "card-avatar-grad-11",
  "card-avatar-grad-12",
];

const SILHOUETTES = [
  "M50,10 C60,10 70,20 70,35 C70,45 65,50 60,55 L60,80 L40,80 L40,55 C35,50 30,45 30,35 C30,20 40,10 50,10Z",
  "M50,8 C62,8 72,18 72,32 C72,42 66,48 60,54 L62,80 L38,80 L40,54 C34,48 28,42 28,32 C28,18 38,8 50,8Z",
  "M50,12 C58,12 66,20 66,32 C66,40 62,46 58,52 L60,80 L40,80 L42,52 C38,46 34,40 34,32 C34,20 42,12 50,12Z",
];

interface Props {
  character: Character;
  index: number;
  compact?: boolean;
}

export function CharacterCard({ character, index, compact = false }: Props) {
  const gradClass =
    GRAD_CLASSES[Number(character.id - 1n) % GRAD_CLASSES.length];
  const silhouette = SILHOUETTES[Number(character.id) % SILHOUETTES.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="hud-bracket panel-surface rounded overflow-hidden cursor-pointer group"
      style={{
        boxShadow: "0 4px 24px oklch(0 0 0 / 0.4)",
        transition: "box-shadow 0.3s",
      }}
    >
      <Link to="/legends/$id" params={{ id: character.id.toString() }}>
        <div
          className={`relative flex items-center justify-center overflow-hidden ${gradClass}`}
          style={{ height: compact ? 140 : 180 }}
        >
          <div
            className="absolute top-3 right-3 text-2xl z-10 rounded px-1 py-0.5"
            style={{
              background: "oklch(0 0 0 / 0.5)",
              border: "1px solid oklch(0.78 0.15 70 / 0.4)",
              backdropFilter: "blur(4px)",
              lineHeight: 1.2,
            }}
          >
            {character.countryFlag}
          </div>

          <svg
            role="img"
            aria-label={`${character.name} silhouette`}
            viewBox="0 0 100 90"
            width={compact ? 80 : 110}
            height={compact ? 80 : 110}
            style={{ opacity: 0.85 }}
          >
            <title>{character.name}</title>
            <path
              d={silhouette}
              fill="oklch(0.95 0.005 265 / 0.15)"
              stroke="oklch(0.78 0.15 70 / 0.5)"
              strokeWidth="1.5"
            />
            <circle
              cx="50"
              cy="20"
              r="12"
              fill="oklch(0.95 0.005 265 / 0.12)"
              stroke="oklch(0.78 0.15 70 / 0.4)"
              strokeWidth="1.5"
            />
          </svg>

          <div
            className="absolute bottom-0 left-0 right-0 h-12"
            style={{
              background:
                "linear-gradient(0deg, oklch(0.13 0.015 40) 0%, transparent 100%)",
            }}
          />
        </div>

        <div className="p-3 space-y-2">
          <div>
            <h3
              className="font-display text-xl leading-tight"
              style={{ color: "oklch(0.95 0.005 265)" }}
            >
              {character.name}
            </h3>
            <p className="text-xs" style={{ color: "oklch(0.78 0.15 70)" }}>
              {character.countryFlag} {character.country}
            </p>
          </div>

          {!compact && (
            <p
              className="text-xs leading-relaxed line-clamp-2"
              style={{ color: "oklch(0.70 0.01 265)" }}
            >
              {character.bio}
            </p>
          )}

          <div className="space-y-1.5 pt-1">
            <StatBar
              label="SPEED"
              value={Number(character.stats.speed)}
              delay={index * 0.05}
            />
            <StatBar
              label="STRENGTH"
              value={Number(character.stats.strength)}
              delay={index * 0.05 + 0.1}
            />
            <StatBar
              label="STEALTH"
              value={Number(character.stats.stealth)}
              delay={index * 0.05 + 0.2}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
