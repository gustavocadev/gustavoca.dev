import { useEffect, useState } from "react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import getGifs from "../helpers/Gif.server";

interface Gif {
    gif: string;
}

interface LoaderData {
    gifs: Gif[];
}

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

        const actualGif = localStorage.getItem("actual-gif") || randomnGif();
        setImage(actualGif);
    }, []);

    useEffect(() => {
        localStorage.setItem("actual-gif", image);
    }, [image]);

    return (
        <main className="sm:py-[24px] px-[16px] sm:px-[32px] lg:px-[112px] ">
            <section className="grid grid-cols-1 xl:grid-cols-7 gap-y-[38px] lg:gap-x-[38px]">
                <section className="text-[42px] sm:text-[68px] lg:text-[92px] font-bold col-span-1 xl:col-span-4 mx-auto text-center lg:text-left">
                    <h1 className="leading-[81px] lg:leading-[108px]">
                        <span className="text-[#7BED9F]">¡Hola!</span>{" "}
                        <span className="font-normal">👋</span> , soy{" "}
                        <span className="text-[#74B9FF]">Gustavo</span>{" "}
                        <span className="text-[#FF7675]">Bienvenido</span>
                        <span className="text-[#A29BFE]">/a</span>{" "}
                        <span className="text-[#FD79A8]">\^o^/</span>
                    </h1>
                </section>
                <section className="flex items-center col-span-1 mx-auto xl:col-span-3">
                    <figure className="w-full transition duration-200">
                        {image !== "" && (
                            <img
                                // w-[412px]

                                className="w-full rounded-xl transition duration-200"
                                src={image}
                                alt="gustavoca image"
                            />
                        )}
                    </figure>
                </section>
            </section>
        </main>
    );
}
