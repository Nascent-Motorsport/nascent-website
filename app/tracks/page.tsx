import type { Metadata } from "next";
import TracksPage from "../../components/TracksPage";

export const metadata: Metadata = {
  title: "Tracks | Nascent Motorsport",
  description:
    "Over 40 circuits across 5 continents in Nascent Motorsport — street circuits, classic venues, and modern high-speed temples of speed.",
};

export default function Page() {
  return <TracksPage />;
}