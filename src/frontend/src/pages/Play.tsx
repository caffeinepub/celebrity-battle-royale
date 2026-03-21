import { Link } from "@tanstack/react-router";
import { ChevronRight, Crosshair, User, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { EmberParticles } from "../components/EmberParticles";

const MODES = [
  {
    id: "solo",
    label: "SOLO",
    icon: User,
    players: "1 Player",
    desc: "You versus 49 others. No backup. No mercy. Pure skill decides who survives.",
    tagline: "LONE WOLF",
    color: "oklch(0.65 0.18 35)",
  },
  {
    id: "duo",
    label: "DUO",
    icon: Users,
    players: "2 Players",
    desc: "Team up with one ally. Coordinate attacks, share resources, and dominate the island together.",
    tagline: "TWIN BLADES",
    color: "oklch(0.78 0.15 70)",
  },
  {
    id: "squad",
    label: "SQUAD",
    icon: Crosshair,
    players: "4 Players",
    desc: "Full squad tactics. Assign roles, flank from multiple angles, and steamroll every opponent.",
    tagline: "ELITE UNIT",
    color: "oklch(0.65 0.15 140)",
  },
];

export function Play() {
  const [selected, setSelected] = useState<string | null>("duo");

  return (
    <main
      className="min-h-screen pt-20 pb-16 px-4"
      style={{ background: "oklch(0.08 0.01 265)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative py-10">
          <EmberParticles count={10} />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2"
          >
            <p
              className="font-display tracking-[0.3em] text-sm"
              style={{ color: "oklch(0.78 0.15 70)" }}
            >
              BATTLE CONFIGURATION
            </p>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "oklch(0.95 0.005 265)",
              }}
            >
              SELECT GAME MODE
            </h1>
            <p className="text-sm" style={{ color: "oklch(0.70 0.01 265)" }}>
              Choose how you enter the battle. Every mode, different glory.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {MODES.map((mode, i) => {
            const isSelected = selected === mode.id;
            return (
              <motion.div
                key={mode.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(mode.id)}
                className="cursor-pointer rounded overflow-hidden"
                data-ocid={`play.item.${i + 1}`}
                style={{
                  background: isSelected
                    ? "linear-gradient(160deg, oklch(0.18 0.06 50) 0%, oklch(0.14 0.04 40) 100%)"
                    : "linear-gradient(135deg, oklch(0.13 0.015 40) 0%, oklch(0.17 0.018 38) 100%)",
                  border: `1px solid ${isSelected ? "oklch(0.78 0.15 70 / 0.8)" : "oklch(0.78 0.15 70 / 0.2)"}`,
                  boxShadow: isSelected
                    ? "0 0 30px oklch(0.78 0.15 70 / 0.25), inset 0 1px 0 oklch(0.78 0.15 70 / 0.15)"
                    : "none",
                  transition: "all 0.2s",
                }}
              >
                <div
                  className="h-1"
                  style={{
                    background: isSelected
                      ? mode.color
                      : "oklch(0.20 0.01 265)",
                  }}
                />

                <div className="p-6 space-y-4">
                  <div
                    className="w-14 h-14 rounded flex items-center justify-center"
                    style={{
                      background: isSelected
                        ? "oklch(0.22 0.08 25 / 0.7)"
                        : "oklch(0.15 0.01 265)",
                      border: `1px solid ${isSelected ? "oklch(0.78 0.15 70 / 0.5)" : "oklch(0.30 0.01 265)"}`,
                    }}
                  >
                    <mode.icon
                      className="w-7 h-7"
                      style={{
                        color: isSelected ? mode.color : "oklch(0.60 0.01 265)",
                      }}
                    />
                  </div>

                  <div>
                    <p
                      className="text-xs tracking-widest mb-0.5"
                      style={{
                        color: isSelected ? mode.color : "oklch(0.50 0.01 265)",
                        fontFamily: "'Bebas Neue', sans-serif",
                      }}
                    >
                      {mode.tagline}
                    </p>
                    <h3
                      className="font-display text-3xl"
                      style={{
                        color: isSelected
                          ? "oklch(0.95 0.005 265)"
                          : "oklch(0.80 0.005 265)",
                      }}
                    >
                      {mode.label}
                    </h3>
                    <p
                      className="text-xs tracking-wider"
                      style={{
                        color: isSelected
                          ? "oklch(0.78 0.15 70)"
                          : "oklch(0.50 0.01 265)",
                      }}
                    >
                      {mode.players}
                    </p>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: isSelected
                        ? "oklch(0.75 0.005 265)"
                        : "oklch(0.55 0.01 265)",
                    }}
                  >
                    {mode.desc}
                  </p>

                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <button
                        type="button"
                        className="cta-button w-full py-3 text-base rounded flex items-center justify-center gap-2"
                        data-ocid="play.primary_button"
                      >
                        ENTER BATTLE
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/legends" data-ocid="play.link">
            <button
              type="button"
              className="text-sm font-display tracking-widest"
              style={{ color: "oklch(0.70 0.01 265)" }}
            >
              ← CHANGE YOUR LEGEND
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
