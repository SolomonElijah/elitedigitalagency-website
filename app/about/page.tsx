import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutTimeline from "@/components/sections/about/AboutTimeline";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us — Elite Digital Agency",
  description:
    "Learn about Elite Digital Agency — our story, mission, values, team, and the journey that made us a trusted digital partner for 50+ clients worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutTimeline />
      <AboutCTA />
    </>
  );
}