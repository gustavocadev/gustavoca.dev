import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "About me" };
};

export default function About() {
  return (
    <main className="px-[45px] lg:px-[112px]">
      <section className="h-full">
        <article className="grid place-items-center py-[112px] text-center">
          <h5 className="text-semibold text-4xl">En desarrollo... ✏️</h5>
        </article>
      </section>
    </main>
  );
}
