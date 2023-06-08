import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import Author from "./child/author";
import code from "../public/assets/coding.jpeg";
export default function section3() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      {/* swipper */}
      <Swiper slidesPerView={2}>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
      </Swiper>
    </section>
  );
}
function Post() {
  return (
    <div className="grid">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image src={code} width={600} height={400} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
              className="text-3xl md:text-4xl
             font-bold text-gray-800 hover:text-gray-600"
            >
              Why you should learn Coding
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Outside from the implications of coding which look good on a resume,
          coding actually does boost skills which are actually useful to most
          jobs. Problem solving and logic are the main two. Learning to code is
          like an exercise session for the “left” side of the brain.
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
