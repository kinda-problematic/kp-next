import { bebas_neue } from "@/app/layout";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Loading({ params }: { params: { category: string } }) {
  return (
    <div className="flex flex-col justify-start items-center space-y-10 bg-gradient-to-tr from-cyan-600 to-emerald-700 min-h-screen py-6">
      <h2
        className={
          bebas_neue.className +
          " text-6xl underline text-center mx-auto py-10 text-white drop-shadow-lg"
        }
      >
        Category
      </h2>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-evenly md:w-full md:space-x-4">
        {Array.from(Array(3).keys()).map((item: any) => (
          <Link
            key={item}
            href=""
            className={
              "rounded-3xl group mb-10 transition-all ease-in-out duration-100 bg-transparent"
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
