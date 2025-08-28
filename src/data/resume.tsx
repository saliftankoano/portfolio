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
      company: "ScholarSTEM",
      href: "https://scholarstem.com",
      badges: [],
      location: "New York, NY",
      title: "Tech Instructor",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEiUgKhkofIAw/company-logo_200_200/company-logo_200_200/0/1683756196108/scholarstem_logo?e=1759363200&v=beta&t=CsPg3uAjtpJVxtTUFZOOHCil18xZHaBMAGOc2E8-De0",
      start: "Jul 2023",
      end: "Mar 2025",
      description:
        "Taught web development fundamentals and mentored students through hands-on projects, improving outcomes and technical confidence.",
    },
    {
      company: "Lehman College",
      href: "https://www.lehman.cuny.edu/",
      badges: [],
      location: "New York, NY",
      title: "Application Support",
      logoUrl:
        "https://www.lehman.cuny.edu/media/Lehman-College-Website/Site-Assets-2021/Images/LehmanLogo_BlueGreen.png",
      start: "Mar 2022",
      end: "Jul 2023",
      description:
        "Resolved student and faculty technical issues across campus systems; documented fixes and improved response times.",
    },
    {
      company: "Headstarter",
      href: "https://headstarter.co/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Resident",
      logoUrl:
        "https://framerusercontent.com/images/3kqB6XhNoJOQYrqlCfCWsOiVc.png",
      start: "July 2024",
      end: "July 2025",
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
      title: "Web Developer Intern",
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
      start: "",
      end: "",
    },
  ],
  certificates: [
    {
      institution: "COOP Careers",
      href: "https://coopcareers.com",
      credentialName: "Digital Marketing",
      logoUrl:
        "https://images.squarespace-cdn.com/content/v1/52bcea0ee4b0eedea1b68c76/1592270921910-1GI7A8BVB92HB8J49LNT/cooplogo+%281%29.png?format=1500w",
      start: "",
      end: "",
      description: "Because getting people to care is as important as building the product they'll need.",
    },
    {
      institution: "CompTIA",
      href: "https://www.comptia.org/certifications/a",
      credentialName: "CompTIA A+",
      logoUrl:
        "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_9u07jaz8/def_height/2700/def_width/2700/version/100012/type/1",
      description: "Validated foundational IT troubleshooting, networking, and security skills.",
    },
  ],
  projects: [
    {
      title: "Alex - AI Voice Assistant",
      href: "https://aven-zeta.vercel.app/",
      dates: "Jul 2025",
      active: true,
      category: "Data & AI",
      description:
        "Built an AI voice assistant for Aven (fintech company) that handles customer inquiries about credit cards and schedules appointments. RAG architecture with Pinecone vector database and web scraping for comprehensive knowledge base.",
      technologies: [
        "Next.js",
        "VAPI",
        "Pinecone",
        "LlamaIndex",
        "EXA",
        "Jina",
        "TypeScript",
        "RAG",
        "Voice AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://aven-zeta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/saliftankoano/aven",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/aven.gif",
      video: "",
    },
    {
      title: "Honestus",
      href: "https://www.honestus.world/",
      dates: "Apr 2025",
      active: true,
      category: "Business Websites",
      description:
        "Redesigned a storytelling platform website for a blogger. Created a modern, engaging interface for sharing stories through interviews, workshops, and storytelling kits using Next.js and Payload CMS.",
      technologies: [
        "Next.js",
        "Payload CMS",
        "TypeScript",
        "TailwindCSS",
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
      category: "Product & Startups",
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
      category: "Product & Startups",
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
      title: "Genos Bank: Customer Churn",
      href: "https://churn-render.onrender.com/",
      dates: "Nov 2024",
      active: true,
      category: "Data & AI",
      description:
        "Built a machine learning platform to predict customer churn in the banking sector. Identifies at-risk customers and provides insights into risk factors to help banking professionals implement personalized retention strategies.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Streamlit",
        "Machine Learning",
       
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
    {
      title: "Agora's Little Gems",
      href: "https://daycare-nine.vercel.app/",
      dates: "2025",
      active: true,
      category: "Business Websites",
      description:
        "Bilingual daycare website with programs, FAQs, and lead capture to improve parent conversions.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://daycare-nine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/childcare.gif",
      video: "",
    },
    {
      title: "Davoli & Associates",
      href: "https://law-wine-two.vercel.app/",
      dates: "2025",
      active: true,
      category: "Business Websites",
      description:
        "Personal injury law firm site highlighting practice areas, testimonials, and contact to drive consultations.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://law-wine-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/law.gif",
      video: "",
    },
    {
      title: "ESG for Good",
      href: "https://www.esgforgood.com/",
      dates: "2025",
      active: true,
      category: "Data & AI",
      description:
        "Informational platform surfacing NY renewable energy context for founders and investors.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.esgforgood.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/esg-for-good.gif",
      video: "",
    },
    {
      title: "Aplus Prep",
      href: "https://aplus-prep.com/",
      dates: "2025",
      active: true,
      category: "Product & Startups",
      description:
        "Exam prep product page funnel to collect interest and early users.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://aplus-prep.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/aplus-prep.gif",
      video: "",
    },
    {
      title: "Kazedra",
      href: "https://www.kazedra.com/",
      dates: "2024 - 2025",
      active: true,
      category: "Product & Startups",
      description:
        "Waitlist landing page for an outfit planning app with early pricing tiers and testimonials.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.kazedra.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/kazedra.gif",
      video: "",
    },
    {
      title: "Golden Bond Events",
      href: "https://goldenbond.vercel.app/",
      dates: "2025",
      active: true,
      category: "Business Websites",
      description:
        "Event services site showcasing packages, galleries, and contact flow to capture leads.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://goldenbond.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/golden-bond-events.gif",
      video: "",
    },
    {
      title: "Golden Bond Shopify",
      href: "https://goldenbondjewelry.com/",
      dates: "2024 - 2025",
      active: true,
      category: "Business Websites",
      description:
        "Shopify storefront setup and theme customization for jewelry e-commerce.",
      technologies: [
        "Shopify",
        "Liquid",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://goldenbondjewelry.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/gb-shopify.gif",
    },
    {
      title: "Glen Studio (Photography Studio)",
      href: "https://glen-studio.com/",
      dates: "2025",
      active: true,
      category: "Business Websites",
      description:
        "WordPress site for a photography studio with bookings and portfolio galleries.",
      technologies: [
        "WordPress",
        "PHP",
        "SEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://glen-studio.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/glen-studio.gif",
      video: "",
    },
    {
      title: "Promotional Email — Crunchyroll",
      href: "https://saliftankoano.github.io/crunchyroll/",
      dates: "2024",
      active: true,
      category: "Email & Marketing",
      description:
        "Responsive promotional email built with semantic HTML and inline styles for deliverability.",
      technologies: [
        "HTML",
        "CSS",
        "Email",
      ],
      links: [
        {
          type: "Live",
          href: "https://saliftankoano.github.io/crunchyroll/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/crunchyroll-email.png",
      video: "",
    },
    {
      title: "Order Confirmation Email — Canva",
      href: "https://saliftankoano.github.io/canva-order/",
      dates: "2024",
      active: true,
      category: "Email & Marketing",
      description:
        "Transactional email template optimized for clarity, accessibility, and mobile viewing.",
      technologies: [
        "HTML",
        "CSS",
        "Email",
      ],
      links: [
        {
          type: "Live",
          href: "https://saliftankoano.github.io/canva-order/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/canva-email.png",
      video: "",
    },
    {
      title: "Newsletter — Alice",
      href: "https://saliftankoano.github.io/alice/",
      dates: "2024",
      active: true,
      category: "Email & Marketing",
      description:
        "Newsletter layout focusing on hierarchy, typographic rhythm, and link tap targets.",
      technologies: [
        "HTML",
        "CSS",
        "Email",
      ],
      links: [
        {
          type: "Live",
          href: "https://saliftankoano.github.io/alice/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/alice-email.png",
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
