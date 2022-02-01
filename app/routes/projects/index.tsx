import { LoaderFunction, useLoaderData, MetaFunction } from "remix";
import getProjects from "~/helpers/Project.server";
import { Project } from "~/types/Project";

interface LoaderData {
    projects: Project[];
}
export const loader: LoaderFunction = async () => {
    const projects = getProjects();
    return {
        projects,
    };
};

export const meta: MetaFunction = () => {
    return {
        title: "Projects",
        description: "Here we can see all my projects",
    };
};

export default function Projects() {
    const { projects } = useLoaderData<LoaderData>();
    return (
        <section className="px-[32px] md:px-[104px] lg:px-[248px] sm:py-[24px] font-semibold text-[34px] flex flex-col">
            <header className="pb-8">
                <h2>Projects</h2>
            </header>
            <section className="flex flex-col gap-y-[24px] flex-shrink-0">
                {projects.map((project) => {
                    return (
                        <article
                            className="grid grid-cols-1 sm:grid-cols-7 h-auto sm:h-[168px] gap-x-[10px]"
                            key={project.id}
                        >
                            <a
                                target="_blank"
                                href={project.url}
                                className="cols-span-1 sm:col-span-3"
                            >
                                <figure>
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="object-cover h-[168px]  max-w-full lg:w-[328px] mx-auto rounded"
                                    />
                                </figure>
                            </a>
                            <section className="flex flex-col cols-span-1 sm:col-span-4 gap-y-[10px] justify-center flex-shrink-0">
                                <header className="text-[24px] font-bold uppercase">
                                    <h2>{project.title}</h2>
                                </header>
                                <p className="text-[18px]">
                                    {project.description}
                                </p>
                                <p className="text-[16px]">
                                    Link:{" "}
                                    <a
                                        target="_blank"
                                        href={
                                            project.url ===
                                            "https://gif-app.vercel.app/?title=christopher+robin"
                                                ? "https://gif-app.vercel.app/"
                                                : project.url
                                        }
                                    >
                                        {project.url ===
                                        "https://gif-app.vercel.app/?title=christopher+robin"
                                            ? "https://gif-app.vercel.app/"
                                            : project.url}
                                    </a>
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span className="text-[18px]" key={tag}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </article>
                    );
                })}
            </section>
        </section>
    );
}
