import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import company1Pic from '../assets/mobius_by_gaian_logo.jpeg';

const experiences = [
  {
    role: 'Member of Technical Staff - II',
    company: 'Mobius by Gaian',
    duration: 'Jun 2023 - Present',
    logo: company1Pic,
    dataAiHint: 'tech logo',
    responsibilities: [
      'Led the development of a new microservices-based architecture, improving system modularity.',
      'Mentored junior developers and conducted code reviews to maintain code quality.',
      'Optimized application performance, reducing page load times by 30%.',
    ],
  }
];

export function WorkExperience() {
  return (
    <section aria-labelledby="experience-heading">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle id="experience-heading" className="text-3xl font-bold font-headline">Work Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.company}>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={64}
                    height={64}
                    className="rounded-lg object-contain"
                    data-ai-hint={exp.dataAiHint}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="font-medium text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.duration}</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.responsibilities.map((resp) => (
                      <li key={resp}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < experiences.length - 1 && <Separator className="my-8" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
