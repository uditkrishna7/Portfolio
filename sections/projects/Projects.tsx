import { projects } from '@/content/projects';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';

export function Projects() {
  return (
    <section id="projects" className="border-b border-slate-200 py-24">
      <Container>
        <Heading as="h2" className="mb-10 text-3xl sm:text-4xl">
          Projects
        </Heading>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="space-y-5">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="leading-7 text-slate-600">{project.description}</p>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <p><span className="font-semibold text-slate-900">Problem:</span> {project.problem}</p>
                <p><span className="font-semibold text-slate-900">Solution:</span> {project.solution}</p>
                <p><span className="font-semibold text-slate-900">Architecture:</span> {project.architecture}</p>
                <p><span className="font-semibold text-slate-900">Challenges:</span> {project.challenges}</p>
                <p><span className="font-semibold text-slate-900">Lessons Learned:</span> {project.lessons}</p>
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
    </section>
  );
}
