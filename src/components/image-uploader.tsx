"use client";

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { UploadCloud, XCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface UploadedImage {
  id: string;
  url: string;
  name: string;
}

const initialImages: UploadedImage[] = [
    { id: '1', url: 'https://placehold.co/600x400.png', name: 'abstract-colors.png' },
    { id: '2', url: 'https://placehold.co/600x400.png', name: 'mountain-vista.png' },
    { id: '3', url: 'https://placehold.co/600x400.png', name: 'city-skyline.png' },
    { id: '4', url: 'https://placehold.co/600x400.png', name: 'forest-path.png' },
    { id: '5', url: 'https://placehold.co/600x400.png', name: 'ocean-waves.png' },
    { id: '6', url: 'https://placehold.co/600x400.png', name: 'desert-dunes.png' },
];

// Mock AI content moderation check
const checkImageWithAI = (file: File): Promise<{ safe: boolean }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      // Simulate that some images are flagged
      const isSafe = Math.random() > 0.2; // 80% chance of being safe
      resolve({ safe: isSafe });
    }, 1500);
  });
};

export function ImageUploader() {
  const [images, setImages] = useState<UploadedImage[]>(initialImages);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const aiResult = await checkImageWithAI(file);
      
      if (!aiResult.safe) {
        toast({
            variant: "destructive",
            title: "Upload Failed",
            description: "Our AI system flagged this image as potentially inappropriate. Please upload a different image.",
        });
        return;
      }
      
      const newImage = {
        id: new Date().toISOString(),
        url: URL.createObjectURL(file),
        name: file.name,
      };

      setImages(prev => [newImage, ...prev]);
      toast({
        title: "Upload Successful",
        description: `${file.name} has been added to the gallery.`,
      });

    } catch (error) {
       toast({
            variant: "destructive",
            title: "Upload Error",
            description: "Something went wrong during the upload. Please try again.",
       });
    } finally {
      setIsUploading(false);
      // Reset file input
      event.target.value = '';
    }
  };

  const removeImage = (id: string) => {
    setImages(images.filter(image => image.id !== id));
    toast({
        title: "Image Removed",
        description: "The image has been removed from the gallery.",
    });
  }

  return (
    <div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UploadCloud className="text-primary"/> Upload New Image
          </CardTitle>
          <CardDescription>
            Images are checked by an AI for inappropriate content before being displayed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Input id="picture" type="file" onChange={handleFileChange} disabled={isUploading} accept="image/*" />
            <Button disabled={isUploading}>
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Checking...
                </>
              ) : (
                'Upload'
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map(image => (
          <div key={image.id} className="group relative overflow-hidden rounded-lg">
            <Image
              src={image.url}
              alt={image.name}
              width={400}
              height={400}
              className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
              data-ai-hint="creative abstract"
            />
             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="destructive" size="icon" onClick={() => removeImage(image.id)}>
                    <XCircle />
                    <span className="sr-only">Remove Image</span>
                </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <p className="text-white text-xs truncate">{image.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
