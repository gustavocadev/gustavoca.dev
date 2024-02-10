import cx from 'clsx';
import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export const GlobalLoader = component$(() => {
  const loc = useLocation();

  const active = loc.isNavigating;

  const ref = useSignal<HTMLDivElement>();
  const animating = useSignal(false);

  useTask$(({ track }) => {
    track(() => active);
    if (!ref.value) return;

    Promise.allSettled(
      ref.value.getAnimations().map(({ finished }) => finished)
    ).then(() => {
      if (!active) animating.value = false;
    });

    if (active) {
      const id = setTimeout(() => (animating.value = true), 100);
      return () => clearTimeout(id);
    }
  });

  return (
    <div
      role="progressbar"
      aria-hidden={!active}
      aria-valuetext={active ? 'Loading' : undefined}
      class="fixed inset-x-0 left-0 top-0 z-50 h-1 animate-pulse"
    >
      <div
        ref={ref}
        class={cx(
          'h-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition-all duration-500 ease-in-out',
          !loc.isNavigating &&
            (animating.value ? 'w-full' : 'w-0 opacity-0 transition-none'),
          loc.isNavigating && 'w-4/12',
          loc.isNavigating && 'w-10/12'
        )}
      />
    </div>
  );
});
