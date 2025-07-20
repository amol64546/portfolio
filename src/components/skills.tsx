import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Palette } from 'lucide-react';

const skillsData = {
  'Front-End': {
    icon: <Palette className="text-primary" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
  },
  'Back-End': {
    icon: <Database className="text-primary" />,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  'DevOps & Cloud': {
    icon: <Cloud className="text-primary" />,
    skills: ['Docker', 'Firebase', 'Vercel', 'Git', 'CI/CD', 'Google Cloud Platform'],
  },
};

export function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle id="skills-heading" className="text-3xl font-bold font-headline">Technical Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {Object.entries(skillsData).map(([category, { icon, skills }]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                {icon}
                <span className="font-headline">{category}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
