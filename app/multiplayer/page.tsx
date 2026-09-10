import type { Metadata } from "next";
import MultiplayerPage from "../../components/MultiplayerPage";

export const metadata: Metadata = {
  title: "Multiplayer | Nascent Motorsport",
  description:
    "Race anyone, anywhere in real time. Online lobbies up to 20 drivers, global ranked matchmaking, weekly events and private lobbies in Nascent Motorsport.",
};

export default function Page() {
  return <MultiplayerPage />;
}