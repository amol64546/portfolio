import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ArrowRight, Dribbble, Github, Linkedin, User, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const skills = [
  "UI/UX Design", "Web Development", "React", "Next.js", "TypeScript", 
  "Figma", "Node.js", "Project Management", "Agile Methodologies"
];

const experience = [
  {
    role: "Senior Product Designer",
    company: "Creative Inc.",
    period: "2020 - Present",
    description: "Leading design on key projects, mentoring junior designers, and implementing a new design system that increased consistency and development speed by 20%."
  },
  {
    role: "UX/UI Designer",
    company: "Tech Solutions",
    period: "2017 - 2020",
    description: "Designed and shipped multiple features for a suite of B2B applications. Conducted user research and usability testing to inform design decisions."
  },
  {
    role: "Junior Web Developer",
    company: "Web Wizards",
    period: "2015 - 2017",
    description: "Developed and maintained client websites using HTML, CSS, and JavaScript. Gained foundational experience in front-end development and client communication."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <Avatar className="w-32 h-32 md:w-48 md:h-48 border-4 border-primary">
          <AvatarImage src="https://placehold.co/200x200.png" alt="Profile Picture" data-ai-hint="professional portrait" />
          <AvatarFallback>
            <User className="w-16 h-16" />
          </AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Jane Doe</h1>
          <p className="text-xl text-muted-foreground mb-4">Product Designer & Web Developer</p>
          <p className="max-w-xl mb-6">
            I'm a passionate creator who loves building beautiful, functional, and user-centered digital experiences. With a background in both design and development, I bridge the gap between aesthetics and technology to deliver outstanding products.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button asChild>
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="text-primary" />
              <span>Skills & Expertise</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
          <Briefcase className="text-primary" />
          Career Journey
        </h2>
        <div className="relative border-l-2 border-primary/20 pl-6 space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[34px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
              <p className="text-md font-medium mb-2">{exp.company}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="text-center">
         <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
         <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
           I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
         </p>
         <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub"><Github /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Dribbble"><Dribbble /></a>
            </Button>
         </div>
      </section>
    </div>
  );
}
