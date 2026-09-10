"use client";

import {
  Download,
  Smartphone,
  HardDrive,
  ShieldCheck,
  Cpu,
  Wifi,
  PlaySquare,
} from "lucide-react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import "../styles/pages.css";
import "../styles/DownloadPage.css";

const APK_URL = "/downloads/nascent-motorsport.apk";

const installSteps = [
  { title: "Download the APK", text: "Tap the Download APK button on this page to save the installer to your device." },
  { title: "Allow unknown sources", text: "Open Settings → Apps → Special access → Install unknown apps, and allow your browser or file manager." },
  { title: "Open the installer", text: "Find the APK in your Downloads folder and open it. Confirm any prompts to install." },
  { title: "Launch the game", text: "Open Nascent Motorsport from your app drawer and start racing. No account needed to begin." },
];

const requirements = [
  { icon: Cpu, title: "OS", text: "Android 8.0 (Oreo) or newer" },
  { icon: HardDrive, title: "Storage", text: "~1 GB free space for install + updates" },
  { icon: Wifi, title: "Online play (Optional)", text: "Stable connection required for multiplayer." },
  { icon: Smartphone, title: "Device", text: "Any modern phone or tablet that runs Android — mid-tier and up recommended" },
];

const faqs = [
  { q: "Is the APK free?", a: "Yes. Nascent Motorsport is free to download and play!" },
  { q: "Will my progress carry over?", a: "Progress is saved to your device. We are soon applying an account system for cross-platform." },
  { q: "Why not Google Play?", a: "The early builds are distributed as APKs so we can hand you new builds faster. A store release is planned soon. We are still looking for funds to upload to Google Play and App Store soon." },
  { q: "Is it safe to install?", a: "Our APKs are signed by the Nascent build pipeline. Only download from this official page or the discord server to avoid altered copies." },
  { q: "Why isn't it available for iPhone?", a: "The iOS distrubution is currently under build. Since the build type is different, it still needs to be developed under iOS restrictions, which is super difficult due to Apple's heavy reastrictions." },
  { q: "When I play multiplayer, my phone gets hot and the game lags. What do I do?", a: "This is due to P2P (player to player) connection, meaning you and your opponent(s)'s phones are used to create the connection. Lowering your graphics settings should help. Once basic multiplayer works, servers will be used to make multiplayer suit all devices and regions." }
];

export default function DownloadPage() {
  return (
    <div className="page">
      <SiteNav />

      <section className="page-hero download-hero">
        <div className="page-hero-content">
          <p className="page-hero-eyebrow">
            <PlaySquare size={14} /> Get the Game
          </p>
          <h1 className="page-hero-title">
            Download <span>Nascent</span> Motorsport
          </h1>
          <p className="page-hero-subtitle">
            The full game, ready to race in minutes. Grab the APK below and hit the
            track — free, direct, and updated regularly.
          </p>
        </div>
      </section>

      <div className="page-section" style={{ paddingTop: "100px" }}>
        <div className="page-section-inner">
          <div className="apk-download-card">
            <h2 className="apk-download-title">Android APK</h2>
            <p className="apk-download-desc">
              Latest build for Android devices. Tap the button and your download
              starts immediately.
            </p>
            <a href={APK_URL} download className="btn btn-primary apk-large-button">
              <Download size={26} /> Download APK
            </a>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-item-value">v0.0.2</div>
                <div className="info-item-label">Version</div>
              </div>
              <div className="info-item">
                <div className="info-item-value">~133 MB</div>
                <div className="info-item-label">File size</div>
              </div>
              <div className="info-item">
                <div className="info-item-value">Android</div>
                <div className="info-item-label">Platform</div>
              </div>
              <div className="info-item">
                <div className="info-item-value">2026</div>
                <div className="info-item-label">Updated</div>
              </div>
            </div>
          </div>

          <div className="store-buttons">
            <a href="#" className="btn btn-store">
              <Download size={24} />
              <span>
                Google Play
                <br />
                <strong>Coming Soon</strong>
              </span>
            </a>
            <a href="#" className="btn btn-store">
              <Download size={24} />
              <span>
                App Store
                <br />
                <strong>Coming Soon</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
<section className="page-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">Setup</p>
            <h2 className="section-title">How to Install</h2>
            <p className="section-subtitle">
              Four quick steps and you are on track — the whole process takes
              under a minute.
            </p>
          </div>
          <ol className="steps-list">
            {installSteps.map((step) => (
              <li key={step.title}>
                <div>
                  <strong>{step.title}. </strong>
                  {step.text}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">Requirements</p>
            <h2 className="section-title">What You Need</h2>
            <p className="section-subtitle">
              Built to run smoothly on phones, not just flagships.
            </p>
          </div>
          <div className="req-grid">
            {requirements.map((req) => (
              <div key={req.title} className="req-item">
                <req.icon size={22} />
                <div>
                  <h4>{req.title}</h4>
                  <p>{req.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <div className="req-item">
              <ShieldCheck size={22} />
              <div>
                <h4>Security</h4>
                <p>
                  Signed APK verified through the Nascent build pipeline. <strong>Download
                  only from this page or the discord server.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section-inner">
          <div className="page-section-header">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">Before You Download</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-item">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}