import Format from "../../layout/format";
import Author from "../../components/child/author";
import Image from "next/image";
import Code from "../../public/assets/coding.jpeg";
import Related from "../../components/child/related";
export default function page() {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Why You Should Learn Code
          </h1>
          <p className="text-gray-500 text-xl text-center">
            If the user visits the URL constructed by the attacker, then the
            attacker's script executes in the user's browser, in the context of
            that user's session with the application.
          </p>
          <div className="py-10">
            <Image src={Code} width={900} height={600}></Image>
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Stored XSS (also known as persistent or second-order XSS) arises
              when an application receives data from an untrusted source and
              includes that data within its later HTTP responses in an unsafe
              way.
            </p>
            <p>
              The data in question might be submitted to the application via
              HTTP requests; for example, comments on a blog post, user
              nicknames in a chat room, or contact details on a customer order.
              In other cases, the data might arrive from other untrusted
              sources; for example, a webmail application displaying messages
            </p>
            <p>
              The application doesn't perform any other processing of the data,
              so an attacker can easily send a message that attacks other users:
            </p>
          </div>
        </div>
        <Related/>
      </section>
    </Format>
  );
}
