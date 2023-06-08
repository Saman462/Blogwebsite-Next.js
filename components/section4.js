import Author from "./child/author";
import code from "../public/assets/coding.jpeg";
import Link from "next/link";
import Image from "next/image";
export default function section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className=" grid lg:grid-cols-2">
        <div className="items">
          <h1 className="font-bold text-4xl py-12 ">Coding</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {post()}
            {post()}
            {post()}
            {post()}
          </div>
        </div>
        <div className=" items ">
          <h1 className="font-bold text-4xl py-12 ">Engineering</h1>
          <div className="flex flex-col gap-6">
            {post()}
            {post()}
            {post()}
            {post()}
          </div>
        </div>
      </div>
    </section>
  );
}
function post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image className="rounded" src={code} width={300} height={250} />
          </a>
        </Link>
      </div>
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
