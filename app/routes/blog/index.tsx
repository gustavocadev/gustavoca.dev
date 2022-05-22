import type { LoaderFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return { title: "Blog" };
};

export const loader: LoaderFunction = () => {
  return {
    ok: true,
  };
};

export default function Blog() {
  return (
    <main className="px-[45px] lg:px-[112px]">
      <section className="h-full">
        <article className="grid place-items-center py-[112px] text-center">
          <h5 className="text-4xl text-semibold">No hay posts todavía 😢</h5>
        </article>
      </section>
    </main>
  );
}
