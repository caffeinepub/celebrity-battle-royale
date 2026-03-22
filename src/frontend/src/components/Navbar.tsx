import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Sword, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "HOME" },
  { to: "/play", label: "GAME" },
  { to: "/legends", label: "LEGENDS" },
  { to: "/leaderboard", label: "RANKINGS" },
];

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.06 0.01 265 / 0.98) 0%, oklch(0.08 0.01 265 / 0.92) 100%)",
        borderBottom: "1px solid oklch(0.78 0.15 70 / 0.3)",
        boxShadow: "0 2px 24px oklch(0.78 0.15 70 / 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
          <div
            className="w-9 h-9 rounded flex items-center justify-center"
            style={{
              background: "oklch(0.22 0.08 25)",
              border: "1px solid oklch(0.78 0.15 70 / 0.6)",
            }}
          >
            <Sword
              className="w-5 h-5"
              style={{ color: "oklch(0.78 0.15 70)" }}
            />
          </div>
          <div className="leading-none">
            <div
              className="font-display text-xl"
              style={{ color: "oklch(0.78 0.15 70)" }}
            >
              HEROIC
            </div>
            <div
              className="font-display text-xs tracking-[0.25em]"
              style={{ color: "oklch(0.70 0.01 265)" }}
            >
              WAR
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-bold tracking-widest transition-colors ${isActive ? "nav-link-active" : ""}`}
                style={{
                  color: isActive
                    ? "oklch(0.78 0.15 70)"
                    : "oklch(0.70 0.01 265)",
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.15em",
                  fontSize: "0.9rem",
                }}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/play"
          className="hidden md:block"
          data-ocid="nav.primary_button"
        >
          <button
            type="button"
            className="cta-button px-5 py-2 text-sm rounded"
          >
            PLAY NOW
          </button>
        </Link>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          style={{ color: "oklch(0.78 0.15 70)" }}
          data-ocid="nav.toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid oklch(0.78 0.15 70 / 0.2)" }}
          >
            <div
              className="px-4 py-4 flex flex-col gap-4"
              style={{ background: "oklch(0.06 0.01 265 / 0.98)" }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-xl tracking-widest py-1"
                  style={{
                    color:
                      location.pathname === link.to
                        ? "oklch(0.78 0.15 70)"
                        : "oklch(0.70 0.01 265)",
                  }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/play"
                onClick={() => setOpen(false)}
                data-ocid="nav.primary_button"
              >
                <button
                  type="button"
                  className="cta-button px-5 py-2 text-sm rounded w-full"
                >
                  PLAY NOW
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
