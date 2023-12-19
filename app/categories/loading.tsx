import { bebas_neue } from "@/app/layout";

export default function Loading() {
  return (
    <div className="bg-gradient-to-bl from-pink-400 to-cyan-600 flex flex-col justify-start space-y-10 items-center min-h-screen py-6">
      <h2
        className={
          bebas_neue.className + " text-white text-6xl underline tracking-wide"
        }
      >
        {"All Categories"}
      </h2>
    </div>
  );
}
