import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <main class="px-[45px] lg:px-[112px]">
      <section class="h-full">
        <article class="grid place-items-center py-[112px] text-center">
          <h5 class="text-semibold text-4xl">No hay posts todavía 😢</h5>
        </article>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'About',
};
