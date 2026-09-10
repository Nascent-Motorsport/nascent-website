"use client";

import { state } from "../app/variables/state";
import Link from "next/link";
import {
  Gauge,
  Users,
  Palette,
  Map,
  Play,
  Download,
  Trophy,
  Flag,
  Timer,
  ChevronRight,
  Gamepad2,
  Globe,
  Paintbrush,
  Route,
  Star,
  Zap,
} from "lucide-react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import "../styles/Homepage.css";
import { useEffect, useRef, useState } from "react";

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(entry.target);
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

let timetables = ["V. Rossi", "K.Tanaka", "L. Silva", "M. Chen", "A. Novak"];

const tracks = [
  {
    name: "Silverstone Circuit",
    country: "United Kingdom",
    length: "5.89 km",
    turns: 18,
  },
  { name: "Monza", country: "Italy", length: "5.79 km", turns: 11 },
  {
    name: "Spa-Francorchamps",
    country: "Belgium",
    length: "7.00 km",
    turns: 19,
  },
  { name: "Suzuka", country: "Japan", length: "5.81 km", turns: 18 },
  { name: "Monaco", country: "Monaco", length: "3.34 km", turns: 19 },
  { name: "Interlagos", country: "Brazil", length: "4.31 km", turns: 15 },
  { name: "Barcelona", country: "Spain", length: "4.66 km", turns: 14 },
  { name: "Yas Marina", country: "Abu Dhabi", length: "5.28 km", turns: 16 },
];

const features = [
  {
    icon: Gauge,
    title: "Single Player",
    description:
      "Take on the grid in singleplayer, racing in time trials and ghost laps. Analyze your performance and reach faster times.",
    href: "/features",
  },
  {
    icon: Users,
    title: "Multiplayer",
    description:
      "Race head-to-head online with friends from anywhere. Real-time lobbies, all on your phone.",
    href: "/multiplayer",
  },
  {
    icon: Palette,
    title: "Custom Liveries",
    description:
      "Custom liveries based on your choice. Choose colors, patterns, sponsors, and numbers to make your car truly yours.",
    href: "/liveries",
  },
  {
    icon: Map,
    title: "Plenty of Tracks",
    description:
      "Over 40 circuits from every corner of the globe. Iconic street circuits, historic venues, and modern purpose-built tracks.",
    href: "/tracks",
  },
];

export default function Homepage() {
  const elementRef = useRef(null);
  const isVisible = useIsVisible(elementRef);

  return (
    <div className="homepage">
      <SiteNav />

      <section id="top" className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/gameplay.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">AVAILABLE ON MOBILE</p>
          <h1 className="hero-title">
            Feel the <span>Rush</span>
            <br />
            of the Grid.
          </h1>
          <p className="hero-subtitle">
            {
              "The ultimate F1 simulator for your pocket. Race the world's greatest circuits, battle rivals online, and build a car that's uniquely yours. All made simple for your phone."
            }
          </p>
          <div className="hero-actions">
            <Link href="/download" className="btn btn-primary btn-lg">
              <Download size={20} /> Download Now
            </Link>
            <Link href="/features" className="btn btn-ghost btn-lg">
              <Play size={20} /> Explore
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <Trophy size={20} />
              <span className="hero-stat-value">40+</span>
              <span className="hero-stat-label">Tracks</span>
            </div>
            <div className="hero-stat">
              <Users size={20} />
              <span className="hero-stat-value">{state.playerCount}+</span>
              <span className="hero-stat-label">Player Count</span>
            </div>
            <div className="hero-stat">
              <Palette size={20} />
              <span className="hero-stat-value">∞</span>
              <span className="hero-stat-label">Liveries</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <ChevronRight size={24} className="scroll-arrow" />
        </div>
      </section>

      <section id="features" className="section features-section">
        <div className="section-header">
          <p className="section-eyebrow">Game Modes</p>
          <h2 className="section-title">Every Way to Race</h2>
          <p className="section-subtitle">
            {
              "From solo championships to full online grids, there's a mode for every kind of racer."
            }
          </p>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} ref={elementRef} className={`feature-card feature-animate ${isVisible ? 'is-visible' : ''}`}>
              <div className="feature-icon">
                <f.icon size={28} />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.description}</p>
              <Link href={f.href} className="feature-link">
                Learn more <ChevronRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="tracks" className="section tracks-section">
        <div className="section-header">
          <p className="section-eyebrow">The World Awaits</p>
          <h2 className="section-title">Plenty of Tracks</h2>
          <p className="section-subtitle">
            Over 40 legendary circuits across 5 continents. From street canyons
            to high-speed temples of speed.
          </p>
        </div>
        <div className="tracks-grid">
          {tracks.map((t) => (
            <div key={t.name} className="track-card">
              <div className="track-top">
                <Flag size={18} />
                <span className="track-country">{t.country}</span>
              </div>
              <h3 className="track-name">{t.name}</h3>
              <div className="track-meta">
                <span>
                  <Timer size={14} /> {t.length}
                </span>
                <span>
                  <Route size={14} /> {t.turns} turns
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="tracks-more">
          <Link href="/tracks" className="btn btn-outline">
            See All 40+ Tracks <ChevronRight size={16} />
          </Link>
        </div>
      </section>
      <section id="multiplayer" className="section multiplayer-section">
        <div className="split">
          <div className="split-content">
            <p className="section-eyebrow">Multiplayer</p>
            <h2 className="section-title">Race the World</h2>
            <p className="section-subtitle">{}</p>
            <ul className="check-list">
              <li>
                <Zap size={18} /> Real-time online racing
              </li>
              <li>
                <Globe size={18} /> Live Global Timetables
              </li>
              <li>
                <Users size={18} /> Private lobbies with friends
              </li>
            </ul>
            <Link href="/multiplayer" className="btn btn-primary">
              Join the Grid
            </Link>
          </div>
          <div className="split-visual multiplayer-visual">
            <div className="visual-card">
              <div className="visual-card-header">
                <span className="live-dot" /> Global Timetables
              </div>
              <div className="race-grid">
                {timetables.map((name, index) => (
                  <div className={`race-row race-row-${index}`} key={index}>
                    <span>{index + 1}</span>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="liveries" className="section liveries-section">
        <div className="split split-reverse">
          <div className="split-content">
            <p className="section-eyebrow">Custom Liveries</p>
            <h2 className="section-title">Make It Yours</h2>
            <p className="section-subtitle">
              Unleash your creativity with the livery editor. Choose from
              millions of color combinations, add sponsors, patterns, and your
              racing number.
            </p>
            <ul className="check-list">
              <li>
                <Paintbrush size={18} /> Full paint editor
              </li>
              <li>
                <Palette size={18} /> Millions of color combos
              </li>
              <li>
                <Star size={18} /> Sponsor & decal placement
              </li>
              <li>
                <Gamepad2 size={18} /> Share liveries with the community
              </li>
            </ul>
            <Link href="/liveries" className="btn btn-primary">
              Start Designing
            </Link>
          </div>
          <div className="split-visual livery-visual">
            <div className="livery-preview">
              <div className="car-body">
                <div className="car-stripe" />
                <div className="car-number">27</div>
              </div>
              <div className="livery-swatches">
                <span className="swatch swatch-red" />
                <span className="swatch swatch-white" />
                <span className="swatch swatch-black" />
                <span className="swatch swatch-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="section download-section">
        <div className="download-card">
          <h2 className="download-title">Ready to Race?</h2>
          <p className="download-subtitle">
            Download Nascent Motorsport today and hit the track.
          </p>
          <div>
            <Link href="/download" className="btn btn-primary btn-lg">
              <Download size={20} /> Get the Game
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
