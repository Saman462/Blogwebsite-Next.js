import Image from "next/image";
import Link from "next/link";
import code from "../public/assets/coding.jpeg";
import Author from "./child/author";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
export default function section1() {
  SwiperCore.use([Autoplay]);
  return (
    <section className=" hello py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper slidesPerView={1} autoplay={{ delay: 2000 }} loop={true}>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image src={code} width={600} height={600} />
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
              className="text-3xl
            md:text-6xl font-bold text-gray-800 hover:text-gray-600"
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
// https://www.youtube.com/watch?v=1T3GF6endl8 47:38-slider
