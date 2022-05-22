import { useEffect, useRef, useState } from "react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getGifs from "../helpers/Gif.server";
import Typed, { TypedOptions } from "typed.js";
import { Gif } from "../types/types";

type LoaderData = {
  gifs: Gif[];
};

export const meta: MetaFunction = () => {
  return {
    title: "Home",
    description:
      "This is the website of gustavocadev, here you can see a little bit more about me and my projects :D I hope you like it!",
  };
};
export const loader: LoaderFunction = async () => {
  const gifs = getGifs();
  return {
    gifs,
  };
};

export default function Index() {
  // these are my states
  const { gifs } = useLoaderData<LoaderData>();

  const [image, setImage] = useState("");
  console.log(image);
  // Create reference to store the DOM element containing the animation
  const el = useRef<HTMLSpanElement | any>(null);
  const typed = useRef<any>(null);

  // i create a function a generate a random gif
  const randomnGif = () => {
    const randomNum = Math.round(Math.random() * (gifs.length - 1));
    const randomGif = gifs.map((gif) => gif.gif);

    return randomGif[randomNum];
  };

  useEffect(() => {
    setInterval(() => {
      setImage(randomnGif());
    }, 7000);

    const actualGif = localStorage.getItem("actual-gif") ?? randomnGif();
    setImage(actualGif);
  }, []);

  useEffect(() => {
    localStorage.setItem("actual-gif", image);
  }, [image]);

  useEffect(() => {
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
      cursorChar: "|", // Caracter para el cursor
      contentType: "html", // 'html' o 'null' para texto sin formato
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  });

  return (
    <main className="sm:py-[24px] px-[16px] sm:px-[32px] lg:px-[112px] ">
      <section className="grid grid-cols-1 xl:grid-cols-7 gap-y-[38px] lg:gap-x-[38px]">
        <section className="text-[50px] sm:text-[92px] font-bold col-span-1 xl:col-span-4 mx-auto text-center lg:text-left w-full">
          <h1 className="leading-[68px] sm:leading-[108px]">
            <div>
              <span className="text-[#7BED9F]">¡Hola!</span>{" "}
              <span className="font-normal">👋</span>,
            </div>
            <div>
              <span>soy </span>
              <span className="text-[#74B9FF]">Gustavo</span>{" "}
            </div>

            <div className="h-[62px] sm:h-[100px]">
              <span ref={el}></span>
            </div>
            {/* <span className="text-[#A29BFE]">/a</span>{" "} */}
            <div className="text-[#FD79A8]">\^o^/</div>
          </h1>
        </section>
        <section className="flex items-center col-span-1 mx-auto xl:col-span-3">
          {image !== "" && (
            <figure className="w-full transition duration-200">
              <img
                // w-[412px]

                className={`w-full transition duration-200 rounded-xl vov fade-in-right	`}
                src={image}
                alt="gustavoca image"
              />
            </figure>
          )}
        </section>
      </section>
    </main>
  );
}
