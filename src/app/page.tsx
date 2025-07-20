import { ProfileCard } from '@/components/profile-card';
import { Skills } from '@/components/skills';
import { WorkExperience } from '@/components/work-experience';
import { Contact } from '@/components/contact';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 space-y-12">
      <ProfileCard />
      <Skills />
      <WorkExperience />
      <Contact />
    </div>
  );
}
