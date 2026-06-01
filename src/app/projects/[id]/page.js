import { PROJECTS } from "../../data/projects";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Sparkles, AlertTriangle, Cpu } from "lucide-react";
import { Button } from "@heroui/react";
import SourceCodeButton from "../../components/SourceCodeButton";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-extrabold text-foreground mb-4">Project Not Found</h1>
        <Link href="/" className="text-primary font-bold hover:underline">
          Return to Home
        </Link>
      </main>
    );
  }

  const GithubIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  return (
    <main className="min-h-screen bg-transparent py-12 md:py-20 px-6 sm:px-8 lg:px-12 transition-colors duration-350">
      <div className="mx-auto max-w-[1440px] w-full">
        
        {/* Back Link Breadcrumb */}
        <Link
          href="/#projects"
          className="group inline-flex items-center space-x-2 text-sm font-semibold text-foreground/60 hover:text-primary transition-colors py-2 mb-10"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          <span>Back to Projects</span>
        </Link>

        {/* Dynamic Bento Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Header Block: Title & Category (Col span 12) */}
          <div className="md:col-span-12 p-8 md:p-12 bento-card flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-md accent-border max-w-fit block">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-border-color/60">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-neutral-100/50 dark:bg-neutral-900/50 border border-border-color text-foreground/80 cursor-default select-none"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 1: Action Connections (Col span 4) */}
          <div className="md:col-span-4 p-8 bento-card flex flex-col justify-between min-h-[250px]">
            <div>
              <h2 className="text-sm font-bold text-foreground/50 uppercase tracking-widest">Project Actions</h2>
              <p className="text-xs text-foreground/45 mt-0.5">Live previews and repository codes</p>
            </div>

            <div className="space-y-3.5 mt-8">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full font-bold bg-primary text-primary-foreground rounded-xl h-12 shadow-md shadow-primary/10 flex items-center justify-center space-x-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all duration-350 text-sm"
              >
                <span>Live Preview</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <SourceCodeButton
                project={project}
                className="w-full font-bold border border-border-color hover:border-primary text-foreground rounded-xl h-12 hover:bg-primary/5 transition-all duration-350 flex items-center justify-center space-x-2 cursor-pointer text-sm"
              />
            </div>
          </div>

          {/* Card 2: Challenges Faced (Col span 8) */}
          <div className="md:col-span-8 p-8 md:p-10 bento-card flex flex-col justify-between min-h-[250px]">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-red-500">
                <AlertTriangle className="h-5 w-5" />
                <h2 className="text-lg font-bold tracking-tight">Challenges Faced</h2>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="text-[11px] text-foreground/40 mt-6 font-mono">
              // Resolved via architecture optimizations
            </div>
          </div>

          {/* Card 3: Potential Improvements & Future Plans (Col span 12) */}
          <div className="md:col-span-12 p-8 md:p-10 bento-card flex flex-col justify-between min-h-[220px]">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary">
                <Sparkles className="h-5 w-5 animate-pulse" />
                <h2 className="text-lg font-bold tracking-tight">Future Plans & Improvements</h2>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">
                {project.improvements}
              </p>
            </div>

            <div className="text-[11px] text-primary/60 mt-6 font-mono">
              // Roadmap scale objectives
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
