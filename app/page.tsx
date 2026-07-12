import { Hero } from '@/sections/hero/Hero';
import { About } from '@/sections/about/About';
import { Experience } from '@/sections/experience/Experience';
import { Projects } from '@/sections/projects/Projects';
import { Skills } from '@/sections/skills/Skills';
import { Certifications } from '@/sections/certifications/Certifications';
import { Roadmap } from '@/sections/roadmap/Roadmap';
import { Contact } from '@/sections/contact/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Roadmap />
      <Contact />
    </main>
  );
}
