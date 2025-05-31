import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Salif Tankoano",
  initials: "ST",
  url: "https://saliftankoano.com",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/New+York",
  description:
    "Solving problems with simplicity is art. I'm a software engineer and AI enthusiast. I love building apps and tools that become an integral part of people's lives.",
  summary: "Software hooked me early, and I haven't looked back since. I love figuring out how things work, learning fast, and shipping new features. When I'm not deep in code, you'll find me on the basketball court 🏀, clearing my head and dropping dimes to my teammates. For me, life is all about growth, on and off the screen.",
  avatarUrl: "/mee.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "MySQL",
    "Java",
    "SEO",
    "SEM"
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
      company: "Blooming XP",
      href: "https://bloomingxp.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl:
        "/black-bxp.png",
      start: "Mar 2025",
      end: "Present",
      description:"Built and shipped websites that brought in $10,000+ revenue for clients such as jewelers, bloggers, and more. I handle everything: requirements, builds, fixes, and keeping clients happy. When things break, I fix them fast.",
    },
    {
      company: "Headstarter",
      href: "https://headstarter.co/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Resident",
      logoUrl:
        "https://framerusercontent.com/images/3kqB6XhNoJOQYrqlCfCWsOiVc.png",
      start: "Sept 2024",
      end: "Mar 2025",
      description:
        "Delivered 8 full-stack, AI-integrated apps in 12 weeks. 95% on-time delivery. Worked with top engineers and PMs, took feedback, improved, shipped again.",
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
        "Built 30+ dynamic frontend pages, automated payments, and ran agile sprints. Learned to move fast, break limits, and deliver.",
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
        "Secured 2,000+ users with Firebase auth, slashed support tickets, and refactored legacy code into reusable React components. Less bugs, more speed.",
    },
  ],
  education: [
    {
      school: "City University of New York - Lehman College",
      href: "https://www.lehman.cuny.edu/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl:
        "https://www.lehman.cuny.edu/media/Lehman-College-Website/Site-Assets-2021/Images/LehmanLogo_BlueGreen.png",
      start: "Sep 2020",
      end: "May 2024",
    },
  ],
  certificates: [
    {
      institution: "COOP Careers",
      href: "https://coopcareers.com",
      credentialName: "Digital Marketing Certificate",
      logoUrl:
        "https://images.squarespace-cdn.com/content/v1/52bcea0ee4b0eedea1b68c76/1592270921910-1GI7A8BVB92HB8J49LNT/cooplogo+%281%29.png?format=1500w",
      start: "Aug 2024",
      end: "Dec 2024",
      description: "Because getting people to care is as important as building the product they'll need.",
    },
  ],
  projects: [
    {
      title: "Honestus",
      href: "https://www.honestus.world/",
      dates: "Apr 2025",
      active: true,
      description:
        "Redesigned a storytelling platform website for a blogger. Created a modern, engaging interface for sharing stories through interviews, workshops, and storytelling kits using Next.js and Payload CMS.",
      technologies: [
        "Next.js",
        "Payload CMS",
        "TypeScript",
        "TailwindCSS",
        "React",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.honestus.world/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/honestus.png",
      video: "",
    },
    {
      title: "AnimeGen",
      href: "https://www.animegen.io/",
      dates: "Mar 2025",
      active: true,
      description:
        "Launched on ProductHunt, ranked 27th with 200+ AI-generated images in week one, validating user interest and demand. Implemented payments with Polar (merchant of records), automating tax compliance and enabling seamless monetization.",
      technologies: [
        "Stable Diffusion",
        "TypeScript",
        "Polar.sh",
        "AI/ML",
        "Payment Processing",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.animegen.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/animegen.png",
      video: "",
    },
    {
      title: "Hive Reports",
      href: "https://hivereports.com/",
      dates: "Oct 2024",
      active: true,
      description:
        "Designed and developed a dynamic drag-and-drop editor using React DnD for creating modular report templates. Added PDF export capabilities, allowing users to generate and share reports 3x faster than traditional methods.",
      technologies: [
        "Next.js",
        "React DnD",
        "Framer",
        "TypeScript",
        "PDF Generation",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://hivereports.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/hivereports.gif",
      video: "",
    },
    {
      title: "Genos Bank: Customer Churn Prediction",
      href: "https://churn-render.onrender.com/",
      dates: "Nov 2024",
      active: true,
      description:
        "Built a machine learning platform to predict customer churn in the banking sector. Identifies at-risk customers and provides insights into risk factors to help banking professionals implement personalized retention strategies.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Streamlit",
        "Machine Learning",
        "Data Science",
        "Pandas",
        "NumPy",
      ],
      links: [
        {
          type: "Website",
          href: "https://churn-render.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/saliftankoano/churn-render",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/churn.png",
      video: "",
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
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KaBankz/actioncal",
        },
      ],
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
      links: [
        {
          title: "Devpost",
          icon: <Icons.devpost className="h-4 w-4" />,
          href: "http://devpost.com/software/hive-vh2uca",
        },
        {
          title: "Live",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://hivereports.com/",
        },
      ],
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
        {
          title: "Live",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://esgforgood.com/",
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
      links: [],
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
          href: "https://github.com/KaBankz/clever-coffee-hackathon",
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
