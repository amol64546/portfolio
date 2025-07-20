import { ProjectCard } from '@/components/project-card';
import { projectsData } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold font-headline tracking-tight lg:text-5xl">My Projects</h1>
        <p className="mt-4 text-xl text-muted-foreground">A selection of my work. See something you like?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
