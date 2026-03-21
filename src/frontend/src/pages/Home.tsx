import { Link } from "@tanstack/react-router";
import { ChevronRight, Globe, Shield, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { CharacterCard } from "../components/CharacterCard";
import { EmberParticles } from "../components/EmberParticles";
import { useAllCharacters } from "../hooks/useQueries";

const FEATURES = [
  {
    icon: Shield,
    title: "EXCITING BATTLE MODES",
    desc: "Solo, Duo, or Squad — conquer the island your way and outlast 49 enemies.",
  },
  {
    icon: Globe,
    title: "GLOBAL COMMUNITY",
    desc: "12 legendary characters from 12 nations, each with unique world-class skills.",
  },
  {
    icon: Trophy,
    title: "DOMINATE RANKINGS",
    desc: "Climb the global leaderboard. Only the best survive. Is that you?",
  },
];

export function Home() {
  const { data: characters = [] } = useAllCharacters();
  const featured = characters.slice(0, 3);

  return (
    <main className="min-h-screen pt-16">
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.06 0.01 265) 0%, oklch(0.10 0.015 265) 60%, oklch(0.08 0.02 40) 100%)",
        }}
      >
        <img
          src="/assets/generated/lobby-bg.dim_1400x800.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.25 }}
        />

        <EmberParticles count={18} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold tracking-widest"
                style={{
                  background: "oklch(0.22 0.08 25 / 0.6)",
                  border: "1px solid oklch(0.78 0.15 70 / 0.4)",
                  color: "oklch(0.78 0.15 70)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                SEASON 1 — LIVE NOW
              </div>

              <h1
                className="font-display leading-none"
                style={{
                  fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                  color: "oklch(0.95 0.005 265)",
                }}
              >
                CHOOSE YOUR
                <br />
                <span
                  style={{
                    color: "oklch(0.78 0.15 70)",
                    textShadow: "0 0 40px oklch(0.78 0.15 70 / 0.5)",
                  }}
                >
                  LEGEND.
                </span>
                <br />
                DOMINATE THE
                <br />
                WORLD.
              </h1>

              <p
                className="text-base max-w-md"
                style={{ color: "oklch(0.70 0.01 265)" }}
              >
                12 celebrity warriors from across the globe. One island. Last
                one standing becomes a Global Legend.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/play" data-ocid="home.primary_button">
                  <button
                    type="button"
                    className="cta-button px-8 py-3 text-lg rounded flex items-center gap-2"
                  >
                    PLAY FREE
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/legends" data-ocid="home.secondary_button">
                  <button
                    type="button"
                    className="px-8 py-3 text-lg font-display tracking-widest rounded"
                    style={{
                      border: "1px solid oklch(0.70 0.01 265 / 0.4)",
                      color: "oklch(0.70 0.01 265)",
                      background: "transparent",
                    }}
                  >
                    MEET THE LEGENDS
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{ background: "oklch(0.78 0.15 70 / 0.15)" }}
                />
                <img
                  src="/assets/generated/hero-character.dim_600x900.png"
                  alt="Hero Legend"
                  className="relative z-10 max-h-[60vh] md:max-h-[75vh] object-contain"
                  style={{
                    filter: "drop-shadow(0 0 40px oklch(0.78 0.15 70 / 0.3))",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, oklch(0.08 0.01 265) 0%, transparent 100%)",
          }}
        />
      </section>

      <div className="px-8">
        <div className="section-divider max-w-4xl mx-auto py-4">
          <span
            className="font-display text-sm tracking-widest"
            style={{ color: "oklch(0.78 0.15 70)" }}
          >
            ✦ GAME LOBBY ✦
          </span>
        </div>
      </div>

      <section
        className="py-16 px-4 relative"
        style={{ background: "oklch(0.08 0.01 265)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "oklch(0.95 0.005 265)",
              }}
            >
              MEET THE LEGENDS
            </h2>
            <p className="mt-2" style={{ color: "oklch(0.70 0.01 265)" }}>
              Extraordinary warriors. Extraordinary abilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {featured.map((char, i) => (
              <CharacterCard
                key={char.id.toString()}
                character={char}
                index={i}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/legends" data-ocid="home.secondary_button">
              <button
                type="button"
                className="cta-button px-8 py-3 text-base rounded inline-flex items-center gap-2"
              >
                VIEW ALL LEGENDS
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-16 px-4"
        style={{ background: "oklch(0.07 0.01 265)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="hud-bracket panel-surface rounded p-6 space-y-3"
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center"
                  style={{
                    background: "oklch(0.22 0.08 25 / 0.6)",
                    border: "1px solid oklch(0.78 0.15 70 / 0.4)",
                  }}
                >
                  <feat.icon
                    className="w-5 h-5"
                    style={{ color: "oklch(0.78 0.15 70)" }}
                  />
                </div>
                <h3
                  className="font-display text-xl tracking-wider"
                  style={{ color: "oklch(0.95 0.005 265)" }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.70 0.01 265)" }}
                >
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer
        className="py-8 px-4 text-center"
        style={{
          borderTop: "1px solid oklch(0.78 0.15 70 / 0.15)",
          background: "oklch(0.06 0.01 265)",
        }}
      >
        <p className="text-xs" style={{ color: "oklch(0.50 0.01 265)" }}>
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "oklch(0.78 0.15 70)" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </main>
  );
}
