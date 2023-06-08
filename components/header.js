import { ImFacebook, ImTwitter, ImGithub } from "react-icons/im";
import Link from "next/link";
export default function header() {
  return (
    <header className="bg-gray-100">
      <div className="xl:container xl:mx-auto  flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input
            type="text"
            className="mt-1 block w-60 px-3 py-3 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="Search"
          />
        </div>
        <div className="shrink 2-80 sm:order-2">
          <Link href={"/"}>
            <a
              className="font-bold
          uppercase text-3xl"
            >
              TESTING WEBSITE
            </a>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={"/"}>
              <a>
                <ImFacebook color="#0091E6" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImTwitter color="#00C0F0" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImGithub color="#726E75" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
