import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Star, Zap } from "lucide-react";
import { motion } from "motion/react";
import { EmberParticles } from "../components/EmberParticles";
import { StatBar } from "../components/StatBar";
import { useCharacterById } from "../hooks/useQueries";

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

export function LegendDetail() {
  const { id } = useParams({ from: "/legends/$id" });
  const { data: character, isLoading } = useCharacterById(BigInt(id));

  if (isLoading) {
    return (
      <main
        className="min-h-screen pt-20 px-4"
        style={{ background: "oklch(0.08 0.01 265)" }}
      >
        <div
          className="max-w-4xl mx-auto py-8 space-y-6"
          data-ocid="legend_detail.loading_state"
        >
          <Skeleton
            className="h-8 w-32"
            style={{ background: "oklch(0.15 0.01 265)" }}
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Skeleton
              className="h-80"
              style={{ background: "oklch(0.15 0.01 265)" }}
            />
            <Skeleton
              className="h-80"
              style={{ background: "oklch(0.15 0.01 265)" }}
            />
          </div>
        </div>
      </main>
    );
  }

  if (!character) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center" data-ocid="legend_detail.error_state">
          <p
            className="font-display text-3xl"
            style={{ color: "oklch(0.70 0.01 265)" }}
          >
            LEGEND NOT FOUND
          </p>
          <Link to="/legends">
            <button type="button" className="cta-button mt-4 px-6 py-2 rounded">
              BACK TO ROSTER
            </button>
          </Link>
        </div>
      </main>
    );
  }

  const gradClass =
    GRAD_CLASSES[(Number(character.id) - 1) % GRAD_CLASSES.length];

  return (
    <main
      className="min-h-screen pt-20 pb-16 px-4"
      style={{ background: "oklch(0.08 0.01 265)" }}
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/legends" data-ocid="legend_detail.link">
          <motion.button
            type="button"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm mb-6 mt-4"
            style={{ color: "oklch(0.70 0.01 265)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO ROSTER
          </motion.button>
        </Link>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div
              className={`hud-bracket rounded overflow-hidden relative ${gradClass}`}
              style={{ height: 300 }}
            >
              <EmberParticles count={6} />
              <div className="absolute top-4 right-4 text-3xl">
                {character.countryFlag}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  role="img"
                  aria-label={`${character.name} character art`}
                  viewBox="0 0 100 90"
                  width={160}
                  height={160}
                  style={{ opacity: 0.9 }}
                >
                  <title>{character.name}</title>
                  <circle
                    cx="50"
                    cy="20"
                    r="14"
                    fill="oklch(0.95 0.005 265 / 0.15)"
                    stroke="oklch(0.78 0.15 70 / 0.5)"
                    strokeWidth="2"
                  />
                  <path
                    d="M50,8 C62,8 72,18 72,32 C72,42 66,48 60,54 L62,85 L38,85 L40,54 C34,48 28,42 28,32 C28,18 38,8 50,8Z"
                    fill="oklch(0.95 0.005 265 / 0.15)"
                    stroke="oklch(0.78 0.15 70 / 0.5)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background:
                    "linear-gradient(0deg, oklch(0.07 0.01 265 / 0.9) 0%, transparent 100%)",
                }}
              />
            </div>

            <div className="panel-surface hud-bracket rounded p-5 space-y-3">
              <h1
                className="font-display text-4xl"
                style={{ color: "oklch(0.95 0.005 265)" }}
              >
                {character.name}
              </h1>
              <p
                className="font-display text-lg"
                style={{ color: "oklch(0.78 0.15 70)" }}
              >
                {character.countryFlag} {character.country}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.70 0.01 265)" }}
              >
                {character.bio}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="panel-surface hud-bracket rounded p-5 space-y-4">
              <h2
                className="font-display text-xl tracking-wider flex items-center gap-2"
                style={{ color: "oklch(0.78 0.15 70)" }}
              >
                <Star className="w-4 h-4" />
                COMBAT STATS
              </h2>
              <div
                className="h-px"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.78 0.15 70 / 0.4), transparent)",
                }}
              />
              <div className="space-y-3">
                <StatBar
                  label="SPEED"
                  value={Number(character.stats.speed)}
                  delay={0}
                />
                <StatBar
                  label="STRENGTH"
                  value={Number(character.stats.strength)}
                  delay={0.1}
                />
                <StatBar
                  label="STEALTH"
                  value={Number(character.stats.stealth)}
                  delay={0.2}
                />
                <StatBar
                  label="SPECIAL"
                  value={Number(character.stats.specialRating)}
                  delay={0.3}
                />
              </div>
            </div>

            <div
              className="hud-bracket rounded p-5 space-y-3"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.18 0.06 50) 0%, oklch(0.14 0.04 40) 100%)",
                border: "1px solid oklch(0.78 0.15 70 / 0.5)",
                boxShadow:
                  "0 0 20px oklch(0.78 0.15 70 / 0.15), inset 0 1px 0 oklch(0.78 0.15 70 / 0.1)",
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center"
                  style={{
                    background: "oklch(0.78 0.15 70 / 0.15)",
                    border: "1px solid oklch(0.78 0.15 70 / 0.5)",
                  }}
                >
                  <Zap
                    className="w-4 h-4"
                    style={{ color: "oklch(0.78 0.15 70)" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest"
                    style={{ color: "oklch(0.78 0.15 70 / 0.6)" }}
                  >
                    SPECIAL ABILITY
                  </p>
                  <h3
                    className="font-display text-xl"
                    style={{ color: "oklch(0.78 0.15 70)" }}
                  >
                    {character.specialAbility.abilityName}
                  </h3>
                </div>
              </div>
              <div
                className="h-px"
                style={{ background: "oklch(0.78 0.15 70 / 0.3)" }}
              />
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.85 0.005 265)" }}
              >
                {character.specialAbility.abilityDescription}
              </p>
            </div>

            <Link to="/play" data-ocid="legend_detail.primary_button">
              <button
                type="button"
                className="cta-button w-full py-4 text-xl rounded mt-2"
              >
                SELECT THIS LEGEND
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
