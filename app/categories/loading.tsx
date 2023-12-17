import { bebas_neue } from "@/app/layout";

export default function Loading({ params }: { params: { category?: string } }) {
  return (
    <div className="bg-gradient-to-bl from-pink-400 to-cyan-600 -mr-14 -ml-14 -mt-14 pb-20 min-h-screen">
      <h2
        className={
          bebas_neue.className +
          " text-6xl underline text-center mx-auto py-10 text-white drop-shadow-lg"
        }
      >
        {params?.category ?? "All Categories"}
      </h2>
    </div>
  );
}
