import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,

  tailwind,
  nodejs,
  mongodb,
  git,
  figma,

 
  tripguide,

} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "DevJunkie Builder",
    icon: mobile,
  },
  {
    title: "Cloud Learner",
    icon: backend,
  },
  {
    title: "DSA Solver",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: "data:image/jpeg;base64,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",
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Vercel",
    icon: "data:image/png;base64,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",
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Blockchain",
    icon: "data:image/png;base64,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",
  },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "Laybel Apparel& Accessories",
    icon: "",
    iconBg: "#383E56",
    date: "SEP 2024 - Nov 202r",
    points: [
      "Developing and maintaining web applications  and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
  
  {
    title: "Full stack Developer",
    companyName: "Zidio Development",
    icon: "",
    iconBg: "#E6DEDD",
    date: "June 2024 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
     {
    name: "skillo",
    description:
      "An AI-powered career platform designed for fast hiring and real student growth. Powered by Next.js, Google OAuth, Cloudinary, AWS S3, and more! ",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://www.jobsoid.com/wp-content/uploads/2024/01/write-a-unique-job-description.png",
    sourceCodeLink: "https://github.com/saurabh4323/jobmmatcher",
  },
    {
    name: "DevJunkie",
    description:
      "DevJunkie is a developer community offering high-quality UI components, a marketplace to buy and sell projects, and a space to collaborate with like-minded professionals. ",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://thefalc.com/wp-content/uploads/2021/12/developer-community-2.jpg",
    sourceCodeLink: "https://github.com/saurabh4323/DevJunkie",
  },
  {
    name: "Moodli",
    description:
      "A responsive social media application with Next.js, enabling users to connect, make friends, post photos, share content, and chat in real time",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "image.png",
    sourceCodeLink: "https://github.com/saurabh4323/MOODLi",
  },
  {
    name: "Resume Builder",
    description:
      " Resume builder in React with Clerk for secure user authentication.Used Strapi to manage user data and resume content seamlessly Enabled real-time previews with templates",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://www.codewithfaraz.com/img/Create%20a%20Resume%20Builder%20with%20HTML,%20CSS,%20and%20JavaScript.jpg",
    sourceCodeLink: "https://github.com/saurabh4323/ResumeBuilder",
  },
  {
    name: "Oil Organic",
    description:
      "Supports product management,  shopping cart, secure checkout, and order management. Includes filters for a smooth user experience. Admin panel for managing products  ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://www.the-future-of-commerce.com/wp-content/uploads/2020/01/what-is-e-commerce-SOCIAL.jpg",
    sourceCodeLink: "https://github.com/saurabh4323/e-commerce",
  },
  {
    name: "SweatSync",
    description:
      "Built with Next.js, Framer Motion, MUI, and Shadcn , Interactive visual charts suing Power Bi and recharts to monitor progress, Food data tracking by name , AI-powered suggestions for better health",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/saurabh4323/sweaatsync",
  },
  {
    name: "Nagrik - samvidhan",
    description:
      "Built with React js., Framer Motion, web socket, and Chatbase , Interactive visual charts suing chart.sj and comunity to chats, Food data tracking by name ,  suggestions for better health",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/98a159f527e840e99207cfeac49347b5/projects/b6bfc7fb47af45d6b6f08b6db3434f3f/d4f1f3cf-08c8-4ef3-bde5-5533b73b0e0a.jpeg",
    sourceCodeLink: "https://github.com/saurabh4323/sih",
  },
];

export { services, technologies, experiences, testimonials, projects };
