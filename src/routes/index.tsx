import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { getGifs } from '~/helpers/gifs';

export const useGifLoader = routeLoader$(() => {
  const gifs = getGifs();

  return gifs;
});

export default component$(() => {
  const gifLoader = useGifLoader();
  const image = useSignal('');

  useTask$(({ track }) => {
    track(() => image.value);

    // i create a function a generate a random gif
    const randomGif = () => {
      const randomNum = Math.round(
        Math.random() * (gifLoader.value.length - 1)
      );
      const randomGif = gifLoader.value.map((gif) => gif.gif);

      return randomGif[randomNum];
    };

    image.value = randomGif();
  });

  return (
    <main class="px-[16px] sm:py-[24px] sm:px-[32px] lg:px-[112px] ">
      <section class="grid grid-cols-1 gap-y-[38px] lg:gap-x-[38px] xl:grid-cols-7">
        <section class="col-span-1 mx-auto w-full text-center text-[50px] font-bold sm:text-[92px] lg:text-left xl:col-span-4">
          <h1 class="leading-[68px] sm:leading-[108px]">
            <div>
              <span class="text-[#7BED9F]">¡Hola!</span>{' '}
              <span class="font-normal">👋</span>,
            </div>
            <div>
              <span>soy </span>
              <span class="text-[#74B9FF]">Gustavo</span>{' '}
            </div>

            <div class="h-[62px] sm:h-[100px]">
              {/* <span ref={el}></span> */}
            </div>
            {/* <span className="text-[#A29BFE]">/a</span>{" "} */}
            <div class="text-[#FD79A8]">\^o^/</div>
          </h1>
        </section>
        <section class="col-span-1 mx-auto flex items-center xl:col-span-3">
          <figure class="w-full transition duration-200">
            <img
              width={412}
              height={412}
              class={`vov fade-in-right w-full rounded-xl transition duration-200	`}
              src={image.value}
              alt="gustavoca image"
            />
          </figure>
        </section>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
