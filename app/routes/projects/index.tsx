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
        <section className="px-[32px] md:px-[104px] lg:px-[288px] sm:py-[24px] font-semibold text-[34px] flex flex-col">
            <header className="pb-8">
                <h2>Projects</h2>
            </header>
            {projects.map((project) => {
                return (
                    <article
                        className="flex h-auto sm:h-[168px] gap-[20px] flex-wrap sm:flex-nowrap"
                        key={project.id}
                    >
                        <a target="_blank" href={project.url}>
                            <figure>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="object-cover h-[168px] w-auto"
                                />
                            </figure>
                        </a>
                        <section className="flex flex-col gap-[10px] justify-center">
                            <header className="text-[24px] font-bold uppercase">
                                <h2>{project.title}</h2>
                            </header>
                            <p className="text-[18px]">{project.description}</p>
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
                            <div className="flex gap-2">
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
    );
}
