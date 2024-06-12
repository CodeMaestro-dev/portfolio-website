import HeroSection from "../components/HeroSection"
import Skills from "../components/Skills"
import Works from "../components/Works"
import ContactMe from "../components/ContactMe"

export default function Home() {
  return (
    <div className="bg-[#101017] pt-[174px] font-mono">
      <HeroSection />
      <Skills />
      <Works />
      <ContactMe />
    </div>
  )
}
