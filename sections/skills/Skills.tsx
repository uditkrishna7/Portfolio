import { skills } from '@/content/skills';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';

export function Skills() {
  const groups = [
    ['Programming', skills.programming],
    ['Web Development', skills.webDevelopment],
    ['Automation', skills.automation],
    ['AI', skills.ai],
    ['Content Management', skills.contentManagement],
    ['Databases', skills.databases],
    ['Frameworks', skills.frameworks],
    ['Tools', skills.tools],
    ['Soft Skills', skills.softSkills]
  ] as const;

  return (
    <section className="border-b border-slate-200 py-24">
      <Container>
        <Heading as="h2" className="mb-10 text-3xl sm:text-4xl">
          Skills
        </Heading>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {groups.map(([title, items]) => (
            <Card key={title} className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
