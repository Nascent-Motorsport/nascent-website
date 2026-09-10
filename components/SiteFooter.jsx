import Link from "next/link";
import { Download } from "lucide-react";
import "../styles/SiteChrome.css";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="logo-mark"><img src="/icon.png" /></span>
          <span className="logo-text">
            NASCENT
            <br />
            MOTORSPORT
          </span>
        </div>
        <div className="footer-links">
          <Link href="/features">Features</Link>
          <Link href="/tracks">Tracks</Link>
          <Link href="/multiplayer">Multiplayer</Link>
          <Link href="/liveries">Liveries</Link>
          <Link href="/download" className="flex" style={{gap: "5px"}} >
            <Download size={14} style={{ verticalAlign: "middle"}} /> Download
            APK
          </Link>
        </div>
        <p className="footer-copy">© 2026 Nascent Motorsport. All rights reserved.</p>
      </div>
    </footer>
  );
}