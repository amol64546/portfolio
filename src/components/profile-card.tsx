import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import profilePic from '../assets/profile-pic.jpg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function ProfileCard() {
  return (
    <section aria-labelledby="profile-heading">
      <Card className="overflow-hidden shadow-sm">
        <div className="bg-accent/30 p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src={profilePic}
              alt="Profile Picture of Amol Nakhate"
              width={150}
              height={150}
              className="rounded-full border-4 border-card shadow-lg"
              data-ai-hint="profile picture"
              priority
            />
            <div className="text-center md:text-left">
              <h1 id="profile-heading" className="text-4xl font-extrabold font-headline tracking-tight">Amol Nakhate</h1>
              <p className="text-muted-foreground text-xl mt-1">Backend Developer</p>
            </div>
          </div>
        </div>
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold font-headline mb-4">About Me</h2>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p>
            A Java Spring developer is an expert in crafting back-end architectures with the Java programming language, leveraging the power of the Spring and Spring Boot frameworks to build scalable, reliable, and high-performance applications for businesses ranging from startups to global enterprises.
            </p>
            {/* <p>
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or enjoying a good cup of coffee.
            </p> */}
          </div>
          <Link href="/projects" passHref>
            <Button className="mt-6">View My Work</Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}
