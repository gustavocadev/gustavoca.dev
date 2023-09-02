import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { getProjects } from '~/helpers/projects';

export const useProjects = routeLoader$(async () => {
  const projects = await getProjects();
  return projects;
});

export default component$(() => {
  const projects = useProjects();
  return (
    <section class="flex flex-col px-[32px] text-[34px] font-semibold sm:py-[24px] md:px-[104px] lg:px-[248px]">
      <header class="pb-8">
        <h2>Projects</h2>
      </header>
      <section class="flex flex-shrink-0 flex-col gap-y-[24px]">
        {projects.value.map((project) => {
          return (
            <article
              class="grid h-auto grid-cols-1 gap-x-[10px] sm:h-[168px] sm:grid-cols-7"
              key={project.id}
            >
              <a
                target="_blank"
                href={project.url}
                class="cols-span-1 sm:col-span-3"
              >
                <figure>
                  <img
                    src={project.img}
                    alt={project.title}
                    class="mx-auto h-[168px]  max-w-full rounded object-cover lg:w-[328px]"
                  />
                </figure>
              </a>
              <section class="cols-span-1 flex flex-shrink-0 flex-col justify-center gap-y-[10px] sm:col-span-4">
                <header class="text-[24px] font-bold uppercase">
                  <h2>{project.title}</h2>
                </header>
                <p class="text-[18px]">{project.description}</p>
                <p class="text-[16px]">
                  Link:{' '}
                  <a
                    target="_blank"
                    href={
                      project.url ===
                      'https://gif-app.vercel.app/?title=christopher+robin'
                        ? 'https://gif-app.vercel.app/'
                        : project.url
                    }
                  >
                    {project.url ===
                    'https://gif-app.vercel.app/?title=christopher+robin'
                      ? 'https://gif-app.vercel.app/'
                      : project.url}
                  </a>
                </p>
                <div class="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span class="text-[18px]" key={tag}>
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
});
