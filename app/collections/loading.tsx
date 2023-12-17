import { bebas_neue } from "../layout";

export default function Loading({
  params,
}: {
  params: { collection?: string };
}) {
  return (
    <div className="relative">
      <div
        className={
          `${
            params?.collection
              ? 'after:content-["' + params?.collection + '"] '
              : 'after:content-["COLLECTIONS"] '
          }` +
          bebas_neue.className +
          " flex flex-col items-center md:items-start md:flex-row md:justify-around tracking-widest min-h-screen bg-gradient-to-t from-zinc-600 to-zinc-700 -mr-14 -ml-14 -mt-14 py-40 pb-40 border-none  after:absolute after:mx-auto after:top-10 after:z-40 after:text-white after:text-6xl after:underline"
        }
      ></div>
    </div>
  );
}
