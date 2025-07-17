export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  coverImage: string;
  gallery: string[];
  outcomes: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    slug: "nexus-dashboard",
    title: "Nexus Analytics Dashboard",
    category: "UI/UX Design & Web App",
    summary: "A comprehensive dashboard for real-time data visualization and business intelligence.",
    description:
      "The Nexus Analytics Dashboard was a ground-up project aimed at providing business stakeholders with a powerful tool for data analysis. My role involved the entire product design lifecycle, from initial user research and wireframing to high-fidelity prototyping and front-end development. The key challenge was to present complex data in an intuitive and actionable format.",
    coverImage: "https://placehold.co/600x400.png",
    gallery: [
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
    ],
    outcomes: [
      "Reduced time to insight by 40% for key marketing metrics.",
      "Increased user engagement with data tools by 60%.",
      "Established a scalable design system for future product development.",
      "Received positive feedback on UI clarity and ease of use.",
    ],
    techStack: ["React", "TypeScript", "Recharts", "Node.js", "Figma"],
  },
  {
    slug: "aura-mobile-app",
    title: "Aura Meditation Mobile App",
    category: "Mobile App Design",
    summary: "A calming and intuitive mobile app for guided meditation and mindfulness.",
    description:
      "Aura is a mobile application designed to help users find peace and mindfulness in their daily lives. I led the UI/UX design, focusing on creating a serene and non-intrusive user experience. The design process was heavily influenced by user feedback and a desire to create a digital sanctuary. The color palette, typography, and animations were all chosen to promote a sense of calm.",
    coverImage: "https://placehold.co/600x400.png",
    gallery: [
      "https://placehold.co/400x800.png",
      "https://placehold.co/400x800.png",
      "https://placehold.co/400x800.png",
    ],
    outcomes: [
      "Achieved a 4.8-star rating on the App Store within 3 months of launch.",
      "Featured by Apple as 'App of the Day'.",
      "Daily active users grew to 50,000 within the first year.",
      "Design praised for its simplicity and calming aesthetics.",
    ],
    techStack: ["Figma", "ProtoPie", "React Native", "UserTesting"],
  },
  {
    slug: "eco-eats-branding",
    title: "Eco Eats Rebranding",
    category: "Branding & Identity",
    summary: "A complete brand overhaul for a sustainable food delivery service.",
    description:
      "Eco Eats approached us for a full rebrand to better reflect their commitment to sustainability and quality. I was responsible for developing the new brand identity, including the logo, color scheme, typography, and packaging design. The goal was to create a modern, earthy, and trustworthy brand image that would resonate with environmentally conscious consumers.",
    coverImage: "https://placehold.co/600x400.png",
    gallery: [
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
      "https://placehold.co/800x600.png",
    ],
    outcomes: [
      "Increased brand recognition by 35% in target markets.",
      "Contributed to a 25% increase in quarterly sales post-rebrand.",
      "The new packaging design won a Green Design award.",
      "Successfully positioned Eco Eats as a leader in sustainable food delivery.",
    ],
    techStack: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Brand Strategy"],
  },
];
