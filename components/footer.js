import { ImFacebook, ImTwitter, ImGithub } from "react-icons/im";
import Link from "next/link";
import Newslater from "./child/newslater";
import img from "../public//assets/footer.png";
export default function footer() {
  return (
    <footer className=" foot bg-gray-50">
      <Newslater />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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
          <p className="py-5 text-gray-400">
            Copyright Ⓒ2022 All rights reserved{" "}
          </p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}
