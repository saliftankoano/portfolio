import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { SEOStructuredData } from "@/components/seo-structured-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { WavingHand } from "@/components/waving-hand";
import { DATA } from "@/data/resume";
import { Metadata } from "next";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: `${DATA.name} - Software Engineer & AI Enthusiast`,
  description: `${DATA.name} - ${DATA.description}`,
  openGraph: {
    title: `${DATA.name} - Software Engineer Portfolio`,
    description: DATA.description,
    images: [
      {
        url: `${DATA.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${DATA.name} Portfolio`,
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <SEOStructuredData />
      <main className="flex flex-col min-h-[100dvh] space-y-10" role="main">
        <header id="hero" role="banner">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex items-baseline gap-3">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                  />
                  <BlurFade delay={BLUR_FADE_DELAY}>
                    <WavingHand className="text-3xl sm:text-5xl xl:text-6xl" />
                  </BlurFade>
                </div>
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={`${DATA.name} profile picture`} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </header>
        
        <section id="about" aria-labelledby="about-heading">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 id="about-heading" className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert prose-p:mb-2">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
        
        <section id="work" aria-labelledby="work-heading">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 id="work-heading" className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.title}
                  subtitle={work.company}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="education" aria-labelledby="education-heading">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 id="education-heading" className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.degree}
                  subtitle={education.school}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="certificates" aria-labelledby="certificates-heading">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 id="certificates-heading" className="text-xl font-bold">Certificates</h2>
            </BlurFade>
            {DATA.certificates.map((certificate, id) => (
              <BlurFade
                key={certificate.institution}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={certificate.institution}
                  href={certificate.href}
                  logoUrl={certificate.logoUrl}
                  altText={certificate.institution}
                  title={certificate.credentialName}
                  subtitle={certificate.institution}
                  period={`${certificate.start} - ${certificate.end}`}
                  description={certificate.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="skills" aria-labelledby="skills-heading">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 id="skills-heading" className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1" role="list" aria-label="Technical skills">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill} role="listitem">{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" aria-labelledby="projects-heading">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 id="projects-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Building things that matter
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Each project solves real problems and delivers measurable impact. From construction teams to bloggers, I build software that people actually use.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto" role="list" aria-label="Portfolio projects">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <article role="listitem">
                    <ProjectCard
                      href={project.href}
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </article>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="hackathons" aria-labelledby="hackathons-heading">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hackathons
                  </div>
                  <h2 id="hackathons-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Thriving under pressure
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I participated in {DATA.hackathons.length} hackathons, and won
                    $8k+ in cash and prizes. Building something in 24-72 hours is both challenging and
                    rewarding. It pushed me to think outside of the box, care about the details others won&apos;t, and ship fast.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l" aria-label="Hackathon achievements">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <li>
                      <HackathonCard
                        title={project.title}
                        description={project.description}
                        location={project.location}
                        dates={project.dates}
                        image={project.image}
                        links={project.links}
                      />
                    </li>
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a message{" "}
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    className="text-blue-500 hover:underline animate-contact-glow hover:animate-contact-pulse transition-all duration-300"
                    aria-label={`Contact ${DATA.name} on LinkedIn`}
                  >
                    on LinkedIn
                  </Link>{" "}<br/>
                  I will ignore all soliciting.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}
