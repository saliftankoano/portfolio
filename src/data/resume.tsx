import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Salif Tankoano",
  initials: "ST",
  url: "https://saliftankoano.com",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/New+York",
  description:
    "Software Engineer and AI enthusiast. I love building apps and tools that make people's lives easier.",
  summary:
    "At 16 I took summer course on web development and fell in love with it. It lead me to complete my first websites for local businesses. I had the opportunity to go the United States later that year, I have now completed my Bachelors degree in Computer Science and I'm looking for a new challenge to grow my skills and contribute to a team.",
  avatarUrl: "/mee.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "MySQL",
    "Docker",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tanksalif@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saliftankoano",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/salif-tankoano/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@tanksalif",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Headstarter",
      href: "https://headstarter.co/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Resident",
      logoUrl:
        "https://framerusercontent.com/images/3kqB6XhNoJOQYrqlCfCWsOiVc.png",
      start: "Sept 2024",
      end: "Present",
      description:
        "Developed and deployed 8 full-stack applications in 3 months.",
    },
    {
      company: "CUNY Tech Prep",
      badges: [],
      href: "https://cunytechprep.org/",
      location: "New York, NY",
      title: "Software Engineering Fellow",
      logoUrl:
        "https://cunytechprep.org/_next/static/media/ctp-logo-square.6a1210b7.png",
      start: "June 2023",
      end: "June 2024",
      description:
        "Participated in a 1-year hybrid apprenticeship program, focused on developing and presenting full-stack web applications using modern frameworks. 300 hours of instruction time with a hands-on mastery of the Software Development life cycle, communication/presentation, networking, and building MVPs. - Gained hands-on experience in both front-end and back-end development, contributing to projects that showcased comprehensive technical skills.",
    },
    {
      company: "La Jeunesse",
      href: "https://lajeunesse.com/",
      badges: [],
      location: "New York, NY",
      title: "Software Engineering Intern",
      logoUrl: "/jeunesse.png",
      start: "January 2022",
      end: "March 2022",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "La Jeunesse",
      href: "https://lajeunesse.com/",
      badges: [],
      location: "New York, NY",
      title: "Software Engineering Intern",
      logoUrl: "/jeunesse.png",
      start: "January 2022",
      end: "March 2022",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
  ],
  education: [
    {
      school: "City University of New York - Lehman College",
      href: "https://lehman.cityu.edu",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl:
        "https://www.lehman.cuny.edu/media/Lehman-College-Website/Site-Assets-2021/Images/LehmanLogo_BlueGreen.png",
      start: "Sep 2020",
      end: "May 2024",
    },
    {
      school: "COOP Careers",
      href: "https://coopcareers.com",
      degree: "Digital Marketing Certificate",
      logoUrl:
        "https://images.squarespace-cdn.com/content/v1/52bcea0ee4b0eedea1b68c76/1592270921910-1GI7A8BVB92HB8J49LNT/cooplogo+%281%29.png?format=1500w",
      start: "Aug 2024",
      end: "Dec 2024",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Generative UI/UX Hackathon 🏆",
      dates: "January 25th - 28th, 2025",
      location: "New York, NY",
      description:
        "We built ActionCal an AI powered calendar that helps you get more done. Think of Google calendar meets AI.",
      image: "/genui.avif",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "ConTech Hackathon 🏆",
      dates: "January 25th - 28th, 2025",
      location: "New York, NY",
      description:
        "Developed a web application that transformed daily reporting for construction professionals.",
      image:
        "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/c7/9e4f3b78-2874-4c03-af2d-d364a0798306",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Renewable Energy Hackathon 🏆",
      dates: "January 18th - 19th, 2025",
      location: "New York, NY",
      description:
        "Developed a web application that helps investors and founders to understand the NY State renewable energy landscape.",
      image:
        "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/51/864c07a8-bac7-4801-8f46-45ba1456a168",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.devpost className="h-4 w-4" />,
          href: "https://devpost.com/software/esg-for-good",
        },
      ],
    },
    {
      title: "AI Hacks",
      dates: "December 14th, 2024",
      location: "New York, NY",
      description:
        "Developed a voice agent connected to a web application to help restaurants repond to calls and place orders.",
      image:
        "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/7m/4c883137-6b3f-4aac-a0b0-180f7c7847f5",
      links: [
        {
          title: "Repository",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet", // TODO: add link
        },
      ],
    },
    {
      title: "THE AI SUMMIT HACKATHON 🏆",
      dates: "December 11th - 12th, 2024",
      location: "New York, NY",
      description:
        "We built Emergent, a Web application that helps drivers with prexisting medical conditions during emergencies prior to first responders arrival.",
      icon: "public",
      image: "/emergent.jpg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.devpost className="h-4 w-4" />,
          href: "https://devpost.com/software/emergent-ai",
        },
      ],
    },
    {
      title: "The Merge Hackathon 🏆",
      dates: "December 7th, 2024",
      location: "New York, NY",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/j0/7e2c85fa-b5e4-4a1b-9d58-279bb38f7804",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: " Climate Hackathon",
      dates: "September 21st, 2024",
      location: "Davis, California",
      description:
        "Developed a 3D classroom web application to help kids learn about climate change.",
      image:
        "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/x7/f32dbfd3-0a99-4d02-b9e7-450ebb9f536e",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.devpost className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
      ],
    },
  ],
} as const;
