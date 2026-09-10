import type { Metadata } from "next";
import FeaturesPage from "../../components/FeaturesPage";

export const metadata: Metadata = {
  title: "Features | Nascent Motorsport",
  description:
    "Explore every way to race in Nascent Motorsport — quick race, time trial, championship, online multiplayer and private lobbies.",
};

export default function Page() {
  return <FeaturesPage />;
}