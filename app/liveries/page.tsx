import type { Metadata } from "next";
import LiveriesPage from "../../components/LiveriesPage";

export const metadata: Metadata = {
  title: "Liveries | Nascent Motorsport",
  description:
    "Design a car that's unmistakably yours. Full livery editor with millions of color combinations, patterns, sponsors and racing numbers in Nascent Motorsport.",
};

export default function Page() {
  return <LiveriesPage />;
}