import Image from "next/image";
import Link from "next/link";
import code from "../../public/assets/coding.jpeg";
import Author from "./author";
export default function related() {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10 ">Related</h1>
      <div className="flex flex-col gap-10">
        {post()}
        {post()}
        {post()}
        {post()}
        {post()}
        {post()}
      </div>
    </section>
  );
}
function post() {
  return (
    <div className="flex gap-5">
      <Link href={"/"}>
        <a>
          <Image className="rounded" src={code} width={300} height={200} />
        </a>
      </Link>
      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link href={"/"}>
            <a className="text-blue-900 hover:text-blue-600">
              Coding,Software Engineering
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-700 hover:text-gray-700">
              - Septemper 5,2022
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a
              className="text-xl 
             font-bold text-gray-800 hover:text-gray-600"
            >
              Why you should learn Coding
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Outside from the implications of coding which look good on a resume,
          coding actually does boost skills which are actually useful to most
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
// https://www.youtube.com/watch?v=1T3GF6endl8 1:30:31
