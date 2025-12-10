import { Code, Palette, Smartphone, Globe } from 'lucide-react';
import { ExperienceItem, Project, Service } from './types';

export const PERSONAL_INFO = {
  name: "Emmanuel Loisance",
  title: "Senior Android Engineer",
  tagline: "Building strong, scalable, and powerful mobile applications.",
  socials: {
    linkedin: "https://www.linkedin.com/in/eloisance/",
    github: "https://github.com/eloisance",
    medium: "https://medium.com/@eloisance"
  }
};

export const SERVICES: Service[] = [
  {
    title: "Android Engineering",
    description: "Building robust, scalable, and accessible web applications using modern React ecosystem.",
    icon: Code
  },
  {
    title: "Product Design",
    description: "Crafting intuitive user interfaces and experiences with a focus on usability and aesthetics.",
    icon: Palette
  },
  {
    title: "Mobile Development",
    description: "Creating responsive and cross-platform mobile experiences that work seamlessly on any device.",
    icon: Smartphone
  },
  {
    title: "Technical Strategy",
    description: "Helping businesses make informed technical decisions to achieve their product goals.",
    icon: Globe
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "1",
    role: "Senior Android Engineer",
    company: "Vestiaire Collective",
    period: "2020 - 2025",
    location: "Paris, France",
    description: [
      "Developed, maintained and migrated features within a cross-functional feature team",
      "Actively supporting the Android chapter team by reviewing PRs and maintained the codebase",
      "Worked closely with the Engineering Manager to ensure team alignment and delivery"
    ]
  },
  {
    id: "2",
    role: "Mobile Engineer",
    company: "Clever Age",
    period: "2018 - 2020",
    location: "Montreal, Canada",
    description: [
      "Developing an Android (Java) application for Euronews",
      "Migrate Mint iOS application from Objective-C to Swift and update Android version",
      "Part of the team for developing Android (Kotlin) application for emlyon business school"
    ]
  },
  {
    id: "3",
    role: "Mobile Engineer",
    company: "Niji",
    period: "2015 - 2017",
    location: "Rennes, France",
    description: [
      "Developed a mobile application for Edelia (EDF Group) and Beaumanoir Group",
      "Participated in backlog refinement and sprint planning",
      "Contributed to a third-party application maintenance team for 6 months (AngularJS)"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    description: "This website. Open source, built with Next.js and AI assistance, hosted by an OVH VPS.",
    tags: ["NextJS", "AI", "VPS"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
    link: "https://github.com/eloisance/portfolio",
    github: "https://github.com/eloisance/portfolio"
  },
  {
    id: "neuron",
    title: "Neuron",
    description: "A simple Android application built to put in place best practices and clean architecture.",
    tags: ["Android", "Compose", "Clean Architecture"],
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=2070",
    link: "https://github.com/eloisance/neuron",
    github: "https://github.com/eloisance/neuron"
  },
  {
    id: "neuron-backend",
    title: "Neuron Backend",
    description: "Backend built with Ktor for the Neuron application. Using Docker and R2DBC PostgreSQL database.",
    tags: ["Ktor", "Kotlin", "PostgreSQL", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=2066",
    link: "https://github.com/eloisance/neuron-backend",
    github: "https://github.com/eloisance/neuron-backend"
  }
];