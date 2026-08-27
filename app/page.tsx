import FramerNav from '@/components/framer-nav';
import FramerHero from '@/components/framer-hero';
import ImageWheel from '@/components/image-wheel';
import FramerProjects from '@/components/framer-projects';
import FramerExperience from '@/components/framer-experience';
import FramerSkills from '@/components/framer-skills';
import FramerFooter from '@/components/framer-footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <FramerNav />
      <FramerHero />
      <ImageWheel />
      <FramerProjects />
      <FramerExperience />
      <FramerSkills />
      <FramerFooter />
    </main>
  );
}
