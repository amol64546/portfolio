import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="project technology"
          />
        </div>
        <CardHeader>
          <Badge variant="secondary" className="w-fit mb-2">{project.category}</Badge>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription>{project.summary}</CardDescription>
        </CardHeader>
        <CardContent>
           <div className="text-sm font-semibold text-primary flex items-center gap-1">
                View Case Study
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
           </div>
        </CardContent>
      </Card>
    </Link>
  );
}
