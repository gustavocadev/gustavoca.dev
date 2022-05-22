import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return { title: "About me" };
};

export default function About() {
  return (
    <main className="px-[45px] lg:px-[112px]">
      <section className="h-full">
        <article className="grid place-items-center py-[112px] text-center">
          <h5 className="text-4xl text-semibold">En desarrollo... ✏️</h5>
        </article>
      </section>
    </main>
  );
}
