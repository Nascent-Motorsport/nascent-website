"use client";

import Link from "next/link";
import {
  Paintbrush,
  Palette,
  Star,
  Download,
  Share2,
  Layers,
  Sparkles,
} from "lucide-react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import "../styles/pages.css";
import "../styles/DetailVisuals.css";

const editorFeatures = [
  {
    icon: Palette,
    title: "Base Paint",
    description:
      "Start with any color — or literally millions of them. Tune hue, gloss, and metallic finish to set your car's foundation.",
  },
  {
    icon: Paintbrush,
    title: "Patterns & Stripes",
    description:
      "Layer race stripes, gradients, and geometric patterns across the bodywork, nose, and mirrors.",
  },
  {
    icon: Star,
    title: "Sponsors & Numbers",
    description:
      "Pick sponsor slots, style your racing number, and place decals with precision placement tools.",
  },
  {
    icon: Share2,
    title: "Share with the Grid",
    description:
      "Publish your design to the community gallery, browse others' creations, and import liveries onto your own car.",
  },
];

const steps = [
  { icon: Layers, title: "Pick a Base", text: "Choose a team, chassis, and starting colors." },
  { icon: Star, title: "Style It", text: "Stripes, gradients, decals — review in 3D." },
  { icon: Share2, title: "Race & Share", text: "Save, publish, and show it off on the grid." },
];

export default function LiveriesPage() {
  return (
    <div className="page">
      <SiteNav />

      <section className="page-hero">
        <div className="page-hero-content">
          <p className="page-hero-eyebrow">
            <Sparkles size={14} /> Livery Editor
          </p>
          <h1 className="page-hero-title">
            Make Your Car <span>Unmistakably</span> Yours
          </h1>
          <p className="page-hero-subtitle">
            Millions of color combinations, layered patterns, sponsor placements,
            and your number. With the full livery editor, no two cars on the grid
            ever have to look the same.
          </p>
          <div className="page-hero-actions">
            <Link href="/download" className="btn btn-primary btn-lg">
              <Download size={20} /> Start Designing
            </Link>
          </div>
          <div className="page-hero-stats">
            <div className="page-hero-stat">
              <span className="page-hero-stat-value">∞</span>
              <span className="page-hero-stat-label">Combinations</span>
            </div>
            <div className="page-hero-stat">
              <span className="page-hero-stat-value">4</span>
              <span className="page-hero-stat-label">Layers</span>
            </div>
            <div className="page-hero-stat">
              <span className="page-hero-stat-value">3D</span>
              <span className="page-hero-stat-label">Preview</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="split split-reverse">
            <div className="split-visual">
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
            <div className="split-content">
              <p className="section-eyebrow">The Editor</p>
              <h2 className="section-title">Built Like a Designer&apos;s Tool</h2>
              <p className="section-subtitle">
                A proper editor instead of a set of presets. Every panel of the
                car is paintable, every layer is adjustable, and everything renders
                live.
              </p>
              <div className="detail-grid" style={{ gridTemplateColumns: "1fr" }}>
                {editorFeatures.map((feature) => (
                  <div key={feature.title} className="detail-card">
                    <div className="detail-card-icon">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="detail-card-title">{feature.title}</h3>
                    <p className="detail-card-desc">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="page-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">How It Works</p>
            <h2 className="section-title">Three Steps to the Grid</h2>
            <p className="section-subtitle">
              From blank bodywork to a social-media-worthy paint job in minutes.
            </p>
          </div>
          <div className="detail-grid">
            {steps.map((step) => (
              <div key={step.title} className="detail-card">
                <div className="detail-card-icon">
                  <step.icon size={26} />
                </div>
                <h3 className="detail-card-title">{step.title}</h3>
                <p className="detail-card-desc">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">Community Gallery</p>
            <h2 className="section-title">Style on the Grid</h2>
            <p className="section-subtitle">
              The best community liveries show up everywhere — browse, borrow, and
              get inspired before you build your own.
            </p>
          </div>
          <div className="tracks-grid">
            {["Team Redline", "Midnight Strike", "Gold Standard", "Velvet Storm", "Sunset Drifter", "Carbon Ghost"].map((name) => (
              <div key={name} className="track-card" style={{ textAlign: "center" }}>
                <div className="livery-preview" style={{ padding: "24px 16px" }}>
                  <div className="car-body" style={{ maxWidth: "100%", height: 64 }}>
                    {name === "Team Redline" && (<><div className="car-stripe" /><div className="car-number" style={{ fontSize: 24 }}>7</div></>)}
                    {name === "Midnight Strike" && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#111 40%,#e10600 40%)" }} />}
                    {name === "Gold Standard" && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#d4a017,#b8860b)" }} />}
                    {name === "Velvet Storm" && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#4b0082,#8a2be2)" }} />}
                    {name === "Sunset Drifter" && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#ff4d00,#ffd166)" }} />}
                    {name === "Carbon Ghost" && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#2a2a2f,#888)" }} />}
                  </div>
                </div>
                <h3 className="track-name" style={{ marginTop: 16, fontSize: 16 }}>{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="cta-band">
            <h2>Time to Build Yours</h2>
            <p>Join thousands of designers already building their dream race cars.</p>
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