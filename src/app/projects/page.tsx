import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of my creative work and case studies.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">My Work</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Here's a selection of projects I'm proud of. Each one was a unique challenge and a great learning experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
