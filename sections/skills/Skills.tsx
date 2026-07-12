import { skills } from '@/content/skills';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';

export function Skills() {
  const groups = [
    ['Programming', skills.programming],
    ['Frameworks', skills.frameworks],
    ['Content Management', skills.contentManagement],
    ['Databases', skills.databases],
    ['Professional', skills.professional]
  ] as const;

  return (
    <section className="border-b border-white/10 py-24">
      <Container>
        <Heading as="h2" className="mb-10 text-3xl sm:text-4xl">
          Skills
        </Heading>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {groups.map(([title, items]) => (
            <Card key={title} className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
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
