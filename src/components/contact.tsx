import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin } from 'lucide-react';
import { LeetcodeIcon } from '@/components/icons/leetcode';

export function Contact() {
  return (
    <section aria-labelledby="contact-heading">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle id="contact-heading" className="text-3xl font-bold font-headline">Get In Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out. Let's build something amazing together!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="mailto:amol64546@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/amolnakhate" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/amol64546" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://leetcode.com/u/amol64546/" target="_blank" rel="noopener noreferrer">
                <LeetcodeIcon className="mr-2 h-4 w-4" /> LeetCode
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
