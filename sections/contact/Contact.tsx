import { profile } from '@/content/profile';
import { socialLinks } from '@/content/social';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { Button } from '@/components/ui/Button';

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <Heading as="h2" className="mb-10 text-3xl sm:text-4xl">
          Contact
        </Heading>
        <Card className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-lg leading-8 text-slate-300">
              I’m interested in thoughtful opportunities and meaningful collaborations in operations, content systems, web development, and emerging AI work.
            </p>
            <ul className="space-y-2 text-slate-400">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-100 underline decoration-slate-500 underline-offset-4">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" placeholder="Your email" />
            <TextArea label="Message" placeholder="Tell me about your project or idea" />
            <Button>Send Message</Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
