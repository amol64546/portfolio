import { Code, Dribbble, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Profolio. All Rights Reserved.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4"/></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub"><Github className="h-4 w-4"/></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Dribbble"><Dribbble className="h-4 w-4"/></a>
            </Button>
        </div>
      </div>
    </footer>
  );
}
