import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { Navbar } from '~/components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { GlobalLoader } from '~/components/global-loader';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <GlobalLoader />
      <Navbar />
      <main class="lg:py-[90px] max-h-screen">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
