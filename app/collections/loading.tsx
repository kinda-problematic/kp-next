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
  console.log(params)
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
      >
        {Array.from(Array(3).keys()).map((item: any) => (
          <Link
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
  );
}
