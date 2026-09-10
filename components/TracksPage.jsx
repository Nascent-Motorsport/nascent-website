"use client";

import Link from "next/link";
import { Flag, Timer, Route, Download, ChevronRight, MapPinned, Gauge } from "lucide-react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import "../styles/pages.css";

const tracks = [
  { name: "Silverstone Circuit", country: "United Kingdom", length: "5.89 km", turns: 18, difficulty: "Medium" },
  { name: "Monza", country: "Italy", length: "5.79 km", turns: 11, difficulty: "Low" },
  { name: "Spa-Francorchamps", country: "Belgium", length: "7.00 km", turns: 19, difficulty: "High" },
  { name: "Suzuka", country: "Japan", length: "5.81 km", turns: 18, difficulty: "High" },
  { name: "Monaco", country: "Monaco", length: "3.34 km", turns: 19, difficulty: "Extreme" },
  { name: "Interlagos", country: "Brazil", length: "4.31 km", turns: 15, difficulty: "Medium" },
  { name: "Barcelona", country: "Spain", length: "4.66 km", turns: 14, difficulty: "Medium" },
  { name: "Yas Marina", country: "Abu Dhabi", length: "5.28 km", turns: 16, difficulty: "Low" },
  { name: "Melbourne", country: "Australia", length: "5.30 km", turns: 14, difficulty: "Medium" },
  { name: "Shanghai", country: "China", length: "5.45 km", turns: 16, difficulty: "Medium" },
  { name: "Red Bull Ring", country: "Austria", length: "4.32 km", turns: 10, difficulty: "Low" },
];

const categories = [
  { icon: MapPinned, title: "Street Circuits", text: "Canyons of concrete, unforgiving walls, and zero margin for error. The purest test of nerve on the calendar." },
  { icon: Flag, title: "Classic Venues", text: "Historic tracks that built the sport — sweeping curves with half a century of racing folklore baked into the tarmac." },
  { icon: Gauge, title: "Modern Temples", text: "Purpose-built, high-speed facilities designed to challenge aerodynamics and reward raw commitment." },
];

export default function TracksPage() {
  return (
    <div className="page">
      <SiteNav />

      <section className="page-hero">
        <div className="page-hero-content">
          <p className="page-hero-eyebrow">
            <Flag size={14} /> The Circuit Calendar
          </p>
          <h1 className="page-hero-title">
            More Than <span>40 Circuits</span> to Master
          </h1>
          <p className="page-hero-subtitle">
            Street canyons, historic classics, and modern speed temples across 5
            continents. Every track is laser-scanned and tuned for authentic
            racing on your phone.
          </p>
          <div className="page-hero-actions">
            <a href="#all-tracks" className="btn btn-primary btn-lg">
              Browse All Tracks <ChevronRight size={18} />
            </a>
            <Link href="/download" className="btn btn-ghost btn-lg">
              <Download size={20} /> Play Them All
            </Link>
          </div>
          <div className="page-hero-stats">
            <div className="page-hero-stat">
              <span className="page-hero-stat-value">40+</span>
              <span className="page-hero-stat-label">Tracks</span>
            </div>
            <div className="page-hero-stat">
              <span className="page-hero-stat-value">5</span>
              <span className="page-hero-stat-label">Continents</span>
            </div>
            <div className="page-hero-stat">
              <span className="page-hero-stat-value">19</span>
              <span className="page-hero-stat-label">Max Turns</span>
            </div>
          </div>
        </div>
      </section>

      <section id="all-tracks" className="page-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">The Full Calendar</p>
            <h2 className="section-title">Tracks in Detail</h2>
            <p className="section-subtitle">
              A sample of the circuits available at launch. More are added every
              season.
            </p>
          </div>
          <div className="chip-row">
            <span className="chip"><strong>40+</strong> circuits</span>
            <span className="chip"><strong>12</strong> shown here</span>
            <span className="chip"><strong>3</strong> layout styles</span>
          </div>
          <div className="tracks-grid">
            {tracks.map((track) => (
              <div key={track.name} className="track-card">
                <div className="track-top">
                  <Flag size={16} />
                  <span>{track.country}</span>
                </div>
                <h3 className="track-name">{track.name}</h3>
                <div className="track-difficulty">Difficulty: {track.difficulty}</div>
                <div className="track-meta">
                  <span><Timer size={14} /> {track.length}</span>
                  <span><Route size={14} /> {track.turns} turns</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="page-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">Layout Styles</p>
            <h2 className="section-title">Three Kinds of Challenge</h2>
            <p className="section-subtitle">
              Whatever your driving style, there&apos;s a circuit that plays to it — and one that punishes it.
            </p>
          </div>
          <div className="detail-grid">
            {categories.map((category) => (
              <div key={category.title} className="detail-card">
                <div className="detail-card-icon">
                  <category.icon size={26} />
                </div>
                <h3 className="detail-card-title">{category.title}</h3>
                <p className="detail-card-desc">{category.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="cta-band">
            <h2>Learn Every Corner</h2>
            <p>Download Nascent Motorsport and start learning the calendar today.</p>
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