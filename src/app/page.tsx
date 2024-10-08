import ExperienceSection from "@/components/section/ExperienceSection";
import FAQSection from "@/components/section/FAQSection";
import IconAutoScroll from "@/components/section/IconAutoScroll";
import IntroSection1 from "@/components/section/IntroSection1";
import ParallaxSection from "@/components/section/ParallaxSection";
import ShinningSectionText from "@/components/section/ShinningSectionText";
import SkillsSection from "@/components/section/SkillsSection";

const icons = [
  "public/next.svg",
  "/next.svg",
  "/next.svg",
  "/next.svg",
  "/next.svg",
  "/next.svg",
  "/next.svg",
  "/next.svg",
  "/next.svg",
]

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-[1080px]">
      <IntroSection1 />
      <section className="md:pb-8 pb-4 px-8 pt-16">
        <IconAutoScroll icons={icons} />
      </section>
      <ShinningSectionText />
      <ParallaxSection />
      <SkillsSection />
      <ExperienceSection />
      <FAQSection />
    </main>
  );
}
