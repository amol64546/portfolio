import { ImageUploader } from '@/components/image-uploader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A gallery of my creative work and visual explorations.',
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Image Gallery</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A collection of visual explorations, design details, and other things I've created.
        </p>
      </div>
      <ImageUploader />
    </div>
  );
}
