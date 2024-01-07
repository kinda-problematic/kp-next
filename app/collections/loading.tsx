import { bebas_neue } from "../layout";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Loading({
  params,
}: {
  params: { collection?: string };
}) {
  return (
    <div>
      <div className="flex flex-col justify-start space-y-10 items-center min-h-screen bg-gradient-to-t from-zinc-600 to-zinc-700 border-none py-6">
        <h2
          className={
            bebas_neue.className +
            " text-white text-6xl underline tracking-wide"
          }
        >
          Collections
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-evenly md:w-full md:space-x-4">
          {Array.from(Array(3).keys()).map((item: any) => (
            <Link
              key={item}
              href=""
              className={
                "rounded-3xl group shadow-glowy-dark hover:shadow-glowy-md mb-10 transition-all ease-in-out duration-100 bg-transparent"
              }
            >
              <Card
                className={`rounded-3xl md:h-[500px] w-[350px] justify-between flex flex-col drop-shadow-2xl bg-transparent`}
              >
                <CardHeader>
                  <CardTitle className="text-3xl">
                    <span className="text-white p-[1px]"></span>
                  </CardTitle>
                  <CardDescription>
                    <span className="text-white p-[1px]"></span>
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="text-sm text-white p-[1px]"></span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
