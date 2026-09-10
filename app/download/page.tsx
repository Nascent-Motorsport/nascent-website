import type { Metadata } from "next";
import DownloadPage from "../../components/DownloadPage";

export const metadata: Metadata = {
  title: "Download | Nascent Motorsport",
  description:
    "Download the Nascent Motorsport APK for Android and hit the track — free, direct, and updated regularly. Install steps, requirements and FAQ included.",
};

export default function Page() {
  return <DownloadPage />;
}