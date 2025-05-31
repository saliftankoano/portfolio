import { DATA } from "@/data/resume";
import Script from "next/script";

export function SEOStructuredData() {
  // Portfolio/Creative Work structured data
  const portfolioData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${DATA.name} Portfolio`,
    description: DATA.description,
    author: {
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
    },
    url: DATA.url,
    workExample: DATA.projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: project.href,
      dateCreated: project.dates,
      author: {
        "@type": "Person",
        name: DATA.name,
      },
      keywords: project.technologies,
    })),
  };

  // Professional experience structured data
  const workExperienceData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    hasOccupation: DATA.work.map((work) => ({
      "@type": "Occupation",
      name: work.title,
      occupationLocation: {
        "@type": "Place",
        name: work.location,
      },
      skills: work.badges,
      occupationalCategory: "Software Engineering",
    })),
  };

  return (
    <>
      <Script
        id="portfolio-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioData) }}
      />
      <Script
        id="work-experience-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workExperienceData) }}
      />
    </>
  );
} 