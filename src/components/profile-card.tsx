import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import profilePic from '../assets/profile-pic.jpg';

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
              <h1 id="profile-heading" className="text-4xl font-extrabold font-headline tracking-tight">John Doe</h1>
              <p className="text-muted-foreground text-xl mt-1">Full-Stack Developer</p>
            </div>
          </div>
        </div>
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold font-headline mb-4">About Me</h2>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p>
              I'm a passionate and creative developer with a knack for building beautiful,
              user-friendly web applications. With a strong foundation in both front-end and back-end
              technologies, I enjoy bringing ideas to life from concept to deployment.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or enjoying a good cup of coffee.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
