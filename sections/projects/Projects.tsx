import { projects } from '@/content/projects';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AssetImage } from '@/components/ui/AssetImage';

export function Projects() {
  return (
    <AnimatedSection id="projects" className="border-b border-white/10 py-24">
      <Container>
        <Heading as="h2" className="mb-10 text-3xl sm:text-4xl">
          Projects
        </Heading>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="space-y-5 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_20px_80px_rgba(96,165,250,0.12)]">
              {project.imageSrc ? (
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
                  <AssetImage
                    src={project.imageSrc}
                    alt={`${project.title} preview`}
                    className="aspect-[16/10]"
                    fallbackClassName="aspect-[16/10]"
                    fallbackLabel={`${project.title} preview`}
                  />
                </div>
              ) : null}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
                <p className="leading-7 text-slate-400">{project.description}</p>
              </div>
              <div className="space-y-3 text-sm text-slate-400">
                <p><span className="font-semibold text-slate-100">Problem:</span> {project.problem}</p>
                <p><span className="font-semibold text-slate-100">Solution:</span> {project.solution}</p>
                <p><span className="font-semibold text-slate-100">Architecture:</span> {project.architecture}</p>
                <p><span className="font-semibold text-slate-100">Challenges:</span> {project.challenges}</p>
                <p><span className="font-semibold text-slate-100">Lessons Learned:</span> {project.lessons}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
