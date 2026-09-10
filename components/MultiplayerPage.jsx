"use client";

import Link from "next/link";
import {
  Users,
  Download,
  Globe,
  Trophy,
  Zap,
  ShieldCheck,
  Swords,
  Star,
} from "lucide-react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import "../styles/pages.css";
import "../styles/DetailVisuals.css";

const rankedSteps = [
  {
    icon: Zap,
    title: "Qualify",
    description:
      "Set your best lap in a short qualifying window. Grid position is decided here — one mistake and you start the race behind your rivals.",
  },
  {
    icon: Swords,
    title: "Race",
    description:
      "Battling door to door for every position. Racecraft, tyre management and patience decide who makes it to the flag.",
  },
  {
    icon: Trophy,
    title: "Climb",
    description:
      "Earn ranking points based on finishing position and race quality. Reach the top tiers to unlock exclusive liveries and events.",
  },
];

const weeklyEvents = [
  { icon: Trophy, title: "Weekly Time Attack", text: "One track, one car, seven days to set the fastest lap. Global leaderboard bragging rights are on the line." },
  { icon: Globe, title: "GP Series", text: "A structured championship across the real-world calendar, with points, weather shifts, and a live standings table." },
  { icon: Star, title: "Community Cups", text: "Dev-run private events with special rule sets — spec series, reversed grids, and endurance stints." },
];

export default function MultiplayerPage() {
  return (
    <div className="page">
      <SiteNav />

      <section className="page-hero">
        <div className="page-hero-content">
          <p className="page-hero-eyebrow">
            <Globe size={14} /> Online Racing
          </p>
          <h1 className="page-hero-title">
            Race <span>Anyone, Anywhere</span> in Real Time
          </h1>
          <p className="page-hero-subtitle">
            Real-time lobbies with up to 20 drivers, a global ranked ladder, and
            weekly events built for the F1 community. No waiting around — the grid
            is always forming.
          </p>
          <div className="page-hero-actions">
            <Link href="/download" className="btn btn-primary btn-lg">
              <Download size={20} /> Join the Grid
            </Link>
          </div>
          <div className="page-hero-stats">
            <div className="page-hero-stat">
              <span className="page-hero-stat-value">20</span>
              <span className="page-hero-stat-label">Driver lobbies</span>
            </div>
            <div className="page-hero-stat">
              <span className="page-hero-stat-value">24/7</span>
              <span className="page-hero-stat-label">Matchmaking</span>
            </div>
            <div className="page-hero-stat">
              <span className="page-hero-stat-value">Live</span>
              <span className="page-hero-stat-label">Standings</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="split">
            <div className="split-content">
              <p className="section-eyebrow">The Ladder</p>
              <h2 className="section-title">How Ranking Works</h2>
              <p className="section-subtitle">
                A transparent three-step loop: qualify, race, climb. Your rank
                reflects consistency and racecraft, not just raw pace.
              </p>
              <div className="detail-grid" style={{ gridTemplateColumns: "1fr" }}>
                {rankedSteps.map((step) => (
                  <div key={step.title} className="detail-card">
                    <div className="detail-card-icon">
                      <step.icon size={24} />
                    </div>
                    <h3 className="detail-card-title">{step.title}</h3>
                    <p className="detail-card-desc">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="split-visual">
              <div className="visual-card">
                <div className="visual-card-header">
                  <span className="live-dot" /> Live Race
                </div>
                <div className="race-grid">
                  <div className="race-row race-row-1"><span>P1</span> V. Rossi</div>
                  <div className="race-row"><span>P2</span> K. Tanaka</div>
                  <div className="race-row"><span>P3</span> L. Silva</div>
                  <div className="race-row"><span>P4</span> M. Chen</div>
                  <div className="race-row"><span>P5</span> A. Novak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="page-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">Competition</p>
            <h2 className="section-title">Events &amp; Championships</h2>
            <p className="section-subtitle">
              Beyond ranked racing, the calendar is packed with recurring events
              for every level of driver.
            </p>
          </div>
          <div className="detail-grid">
            {weeklyEvents.map((event) => (
              <div key={event.title} className="detail-card">
                <div className="detail-card-icon">
                  <event.icon size={26} />
                </div>
                <h3 className="detail-card-title">{event.title}</h3>
                <p className="detail-card-desc">{event.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="split split-reverse">
            <div className="split-visual">
              <div className="visual-card">
                <div className="visual-card-header">
                  <Users size={16} /> Private Lobby
                </div>
                <div className="race-grid">
                  <div className="race-row"><span>P1</span> You</div>
                  <div className="race-row"><span>P2</span> Friend A</div>
                  <div className="race-row"><span>P3</span> Friend B</div>
                  <div className="race-row"><span>P4</span> Friend C</div>
                </div>
              </div>
            </div>
            <div className="split-content">
              <p className="section-eyebrow">With Friends</p>
              <h2 className="section-title">Private Lobbies &amp; Customs</h2>
              <p className="section-subtitle">
                Run your own lobby with hand-picked friends. Full control over the
                grid, rules, and format — from casual virtual GPs to endurance stints.
              </p>
              <ul className="check-list">
                <li><Users size={18} /> Invite-only rooms up to 20</li>
                <li><Zap size={18} /> Custom race settings &amp; formats</li>
                <li><Trophy size={18} /> Owner-managed grids</li>
                <li><Globe size={18} /> Cross-device lobbies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">Fair Play</p>
            <h2 className="section-title">Clean Racing, Rewarded</h2>
            <p className="section-subtitle">
              Built-in detection keeps racing fair for everyone on the grid.
            </p>
          </div>
          <div className="detail-grid">
            <div className="detail-card">
              <div className="detail-card-icon"><ShieldCheck size={26} /></div>
              <h3 className="detail-card-title">Safety Rating</h3>
              <p className="detail-card-desc">
                Track your driving behavior across every session. Consistent, clean
                racing unlocks better lobbies and larger grids.
              </p>
            </div>
            <div className="detail-card">
              <div className="detail-card-icon"><Users size={26} /></div>
              <h3 className="detail-card-title">Penalty System</h3>
              <p className="detail-card-desc">
                Corner cutting, collisions, and track-limit abuse are detected and
                penalized automatically — in sprint and feature race lengths.
              </p>
            </div>
            <div className="detail-card">
              <div className="detail-card-icon"><Globe size={26} /></div>
              <h3 className="detail-card-title">Regional Fairness</h3>
              <p className="detail-card-desc">
                Dedicated servers near you keep ping low and racing honest, in
                whatever region you call home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="cta-band">
            <h2>See You on the Grid?</h2>
            <p>Download now and join the Nascent online community today.</p>
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