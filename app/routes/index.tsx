import { Dispatch } from "react";
import { LoaderFunction, MetaFunction } from "remix";
import fs from "fs/promises";
import { readJSON } from "~/ioutils";

export const meta: MetaFunction = () => {
    return { title: "Home" };
};

export default function Index() {
    return (
        <main className="my-[36px] px-[32px] lg:px-[112px]">
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
                <section className="col-span-1 xl:col-span-3 flex items-center mx-auto">
                    <figure className="w-full">
                        <img src="/miriopic.png" className="w-[412px]" alt="" />
                    </figure>
                </section>
            </section>
        </main>
    );
}
