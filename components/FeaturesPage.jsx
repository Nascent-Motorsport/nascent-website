"use client";

import Link from "next/link";
import {
  Gauge,
  Users,
  Palette,
  Map,
  Play,
  Download,
  Trophy,
  Sparkles,
  Gamepad2,
  ChevronRight,
  Clock,
} from "lucide-react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import "../styles/pages.css";
import "../styles/DetailVisuals.css";

const gameModes = [
  {
    icon: Clock,
    title: "Quick Race",
    description:
      "Jump straight into the action. Pick any unlocked track and car, choose your conditions, and race immediately — no setup required.",
    points: [
      "Full grid or one-on-one",
      "Weather & time-of-day options",
      "Adjustable lap count and assists",
    ],
  },
  {
    icon: Gauge,
    title: "Time Trial",
    description:
      "The pursuit of perfection. Set hot laps against the clock, race your own ghost, and compare against global leaderboards.",
    points: [
      "Ghost lap replays",
      "Global & friends leaderboards",
      "Optimal-line telemetry overlay",
    ],
  },
  {
    icon: Trophy,
    title: "Championship",
    description:
      "A full season across the world's greatest circuits. Manage tyre wear, fuel, and strategy over multiple race weekends.",
    points: [
      "Sprint and feature race formats",
      "Practice, qualifying & race sessions",
      "Standings and points tracking",
    ],
  },
  {
    icon: Users,
    title: "Online Multiplayer",
    description:
      "Real-time lobbies with up to 20 drivers. Qualify, race wheel-to-wheel, and climb the ranks against players worldwide.",
    points: [
      "Ranked matchmaking",
      "Cross-device lobbies",
      "Penalty & safety systems",
    ],
  },
  {
    icon: Gamepad2,
    title: "Private Lobbies",
    description:
      "Race with friends in private rooms. Configure rules, restrict cars, and run your own series or casual races.",
    points: [
      "Custom race settings",
      "Invite-only rooms",
      "Spectator mode",
    ],
  },
];

const pillarFeatures = [
  {
    icon: Users,
    title: "Multiplayer",
    text: "Head-to-head online racing with real-time lobbies and ranked matchmaking.",
    href: "/multiplayer",
  },
  {
    icon: Map,
    title: "Tracks",
    text: "Over 40 circuits across 5 continents, from street canyons to historic speed temples.",
    href: "/tracks",
  },
  {
    icon: Palette,
    title: "Custom Liveries",
    text: "Design a car that is unmistakably yours with the full livery editor.",
    href: "/liveries",
  },
];

export default function FeaturesPage() {
  return (
    <div className="page">
      <SiteNav />

      <section className="page-hero">
        <div className="page-hero-content">
          <p className="page-hero-eyebrow">
            <Sparkles size={14} /> Game Features
          </p>
          <h1 className="page-hero-title">
            Built for <span>Every Kind</span> of Racer
          </h1>
          <p className="page-hero-subtitle">
            From your first hot lap to the final round of a championship, Nascent
            Motorsport gives you the modes, tools, and details that make racing a
            craft instead of a chore.
          </p>
          <div className="page-hero-actions">
            <Link href="/download" className="btn btn-primary btn-lg">
              <Download size={20} /> Get the Game
            </Link>
            <a href="#gameplay" className="btn btn-ghost btn-lg">
              <Play size={20} /> Watch Gameplay
            </a>
          </div>
        </div>
      </section>

      <section id="gameplay" className="page-section gameplay-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">Gameplay Preview</p>
            <h2 className="section-title">See It in Motion</h2>
            <p className="section-subtitle">
              A look at real in-game footage — on-track action, racecraft, and the
              pace of a full grid.
            </p>
          </div>
          <div className="gameplay-frame">
            <span className="gameplay-badge">
              <Play size={14} /> Game Preview
            </span>
            <video autoPlay muted loop playsInline controls preload="metadata">
              <source src="/gameplay.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">Game Modes</p>
            <h2 className="section-title">Five Ways to Race</h2>
            <p className="section-subtitle">
              Every mode is tuned for its own kind of challenge — casual laps,
              serious competition, or full-blown seasons.
            </p>
          </div>
          <div className="detail-grid">
            {gameModes.map((mode) => (
              <div key={mode.title} className="detail-card">
                <div className="detail-card-icon">
                  <mode.icon size={26} />
                </div>
                <h3 className="detail-card-title">{mode.title}</h3>
                <p className="detail-card-desc">{mode.description}</p>
                <ul className="detail-card-list">
                  {mode.points.map((point) => (
                    <li key={point}>
                      <ChevronRight size={16} /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="page-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">Explore More</p>
            <h2 className="section-title">The Full Experience</h2>
            <p className="section-subtitle">
              The features here are just the beginning — dig into each pillar of
              the game in full detail.
            </p>
          </div>
          <div className="detail-grid">
            {pillarFeatures.map((feature) => (
              <div key={feature.title} className="detail-card">
                <div className="detail-card-icon">
                  <feature.icon size={26} />
                </div>
                <h3 className="detail-card-title">{feature.title}</h3>
                <p className="detail-card-desc">{feature.text}</p>
                <Link href={feature.href} className="card-link">
                  Explore {feature.title} <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="cta-band">
            <h2>Ready to Start Racing?</h2>
            <p>Download the game and thousands of players will be waiting on the grid.</p>
            <Link href="/download" className="btn btn-primary btn-lg">
              <Download size={20} /> Download Now
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}