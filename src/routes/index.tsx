import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import Typed, { type TypedOptions } from 'typed.js';
import { getGifs } from '~/helpers/gifs';

export const useGifLoader = routeLoader$(async () => {
  const gifs = await getGifs();

  return gifs;
});

export default component$(() => {
  const gifLoader = useGifLoader();
  const image = useSignal('');

  const el = useSignal<HTMLSpanElement>();

  // i create a function a generate a random gif
  const randomGif = $(() => {
    const randomNum = Math.round(Math.random() * (gifLoader.value.length - 1));
    const randomGif = gifLoader.value.map((gif) => gif.gif);

    return randomGif[randomNum];
  });

  // this only run once when the component is mounted
  useVisibleTask$(async () => {
    const actualGif =
      localStorage.getItem('current-gif') ?? (await randomGif());

    image.value = actualGif;
  });

  useVisibleTask$(async ({ track, cleanup }) => {
    track(() => [image.value]);

    const sub = setInterval(async () => {
      image.value = await randomGif();
      console.log(await randomGif());
    }, 7000);

    cleanup(() => {
      clearInterval(sub);
    });
  });

  useVisibleTask$(({ track }) => {
    track(() => [image.value]);
    localStorage.setItem('current-gif', image.value);
  });

  useVisibleTask$(({ cleanup }) => {
    const options: TypedOptions = {
      strings: [
        "<i class='text-[#FF7675] not-italic'>Bienvenido</i>",
        "<i class='text-[#A29BFE] not-italic'>Bienvenida</i>",
      ],
      // stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      // backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra. // error
      loop: true, // Repetir el array de strings
      showCursor: true, // Mostrar cursor palpitanto
      cursorChar: '|', // Caracter para el cursor
      contentType: 'html', // 'html' o 'null' para texto sin formato
    };
    const typed = new Typed(el.value, options);

    cleanup(() => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    });
  });
  return (
    <main class="px-[16px] sm:py-[24px] sm:px-[32px] lg:px-[112px] ">
      <section class="grid grid-cols-1 gap-y-[38px] lg:gap-x-[38px] xl:grid-cols-7 ">
        <section class="col-span-1 mx-auto text-center text-[50px] font-bold sm:text-[92px] lg:text-left xl:col-span-4">
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
              <span ref={el}></span>
            </div>
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
      content:
        'This is the website of gustavocadev, here you can see a little bit more about me and my projects :D I hope you like it!',
    },
  ],
};
