import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "Home" };
};

export default function Index() {
  return (
    <main className="my-[36px] px-[32px] lg:px-[112px]">
      <section className="grid grid-cols-1 lg:grid-cols-7 gap-y-[38px] lg:gap-x-[38px]">
        <section className="text-[45px] lg:text-[92px] font-bold col-span-1 lg:col-span-4">
          <h1 className="leading-[61px] lg:leading-[108px]">
            <span className="text-[#7BED9F]">¡Hola!</span>{" "}
            <span className="font-normal">👋</span> , soy{" "}
            <span className="text-[#74B9FF]">Gustavo</span>{" "}
            <span className="text-[#FF7675]">Bienvenido</span>
            <span className="text-[#A29BFE]">/a</span>{" "}
            <span className="text-[#FD79A8]">\^o^/</span>
          </h1>
        </section>
        <section className="col-span-1 lg:col-span-3 flex items-center">
          <figure className="w-full">
            <img src="/miriopic.png" className="w-[412px]" alt="" />
          </figure>
          {/* <p>CA Gustavo</p> */}
        </section>
      </section>
    </main>
  );
}
