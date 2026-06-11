import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-bg-obsidian text-white selection:bg-brand-violet/20 selection:text-brand-violet">
            <Navbar />
            <main className="flex-1 py-32 container mx-auto px-4">
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-sm text-zinc-400 hover:text-brand-violet transition-colors mb-8"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                </Link>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left Column: Image/Visuals */}
                    <div>
                        <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-brand-violet via-brand-indigo to-brand-fuchsia shadow-xl shadow-brand-violet/10 aspect-video w-full overflow-hidden">
                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-bg-obsidian">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">{project.title}</h1>
                            <p className="text-xl text-zinc-400">{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm border border-border-obsidian bg-card-obsidian text-zinc-300 hover:border-brand-violet/30 hover:text-brand-violet transition-colors duration-300">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <div className="prose prose-invert max-w-none text-zinc-300">
                            <h3 className="text-2xl font-semibold mb-2">Overview</h3>
                            <p>{project.longDescription}</p>

                            {project.features && (
                                <>
                                    <h3 className="text-2xl font-semibold mt-6 mb-2">Key Features</h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        {project.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-border-obsidian/45">
                            <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-brand-violet to-brand-indigo hover:from-brand-violet/90 hover:to-brand-indigo/90 text-white border-0 shadow-lg shadow-brand-violet/20 transition-all duration-300">
                                <Link href={project.links.demo} target="_blank">
                                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Live Site
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-border-obsidian hover:bg-card-obsidian hover:text-white text-zinc-300 transition-colors duration-300">
                                <Link href={project.links.github} target="_blank">
                                    <Github className="mr-2 h-4 w-4" /> View Source
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
