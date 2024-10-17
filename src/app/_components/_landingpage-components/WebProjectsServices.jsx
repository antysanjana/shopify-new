import Image from "next/image";
import React from "react";
import GetaQuoteLink from "./GetaQuoteLink";

const WebProjectServices = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-10/12">
      <div>
        <h1 className="mt-8 text-center w-full text-[35px] color-primary font-bold md:w-1/2 m-auto leading-[50px]">
          We are here for your Shopify, WordPress and custom web<br></br>{" "}
          project needs.
        </h1>
        <p className="text-center mt-4">
          Even the smallest projects can make a significant difference!
        </p>
      </div>
      <div className="columns-1 md:columns-2 md:gap-5 mt-10">
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <Image
              src={"/webservice1.png"}
              alt=""
              height={100}
              width={100}
            ></Image>
          </div>
          <div>
            <h1 className="text-2xl font-bold color-primary mt-10 mb-4">
              Any Theme Customizations!
            </h1>
            <p className="text-xl mb-5 font-medium color-primary">
              Looking to tailor your online store or website to your unique
              brand identity? We specialize in customizing both Shopify and
              WordPress themes to align perfectly with your vision. Whether
              it&apos;s a subtle change or a complete start from scratch, trust
              us to bring your digital dreams to life.
            </p>
            <GetaQuoteLink />
          </div>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <Image
              src={"/webservice2.png"}
              alt=""
              height={40}
              width={40}
            ></Image>
          </div>
          <div>
            <h1 className="text-xl font-bold color-primary mt-5 mb-4">
              Configure a brand new theme to your specific needs!
            </h1>
            <GetaQuoteLink />
          </div>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <Image
              src={"/webservice4.png"}
              alt=""
              height={40}
              width={40}
            ></Image>
          </div>
          <div>
            <h1 className="text-xl font-bold color-primary mt-5 mb-4">
              Add any functional changes according to your business campaigns!
            </h1>
            <GetaQuoteLink />
          </div>
        </div>
      </div>
      <div className="md:columns-2 md:gap-5">
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <Image
              src={"/webservice3.png"}
              alt=""
              height={40}
              width={40}
            ></Image>
          </div>
          <div>
            <h1 className="text-xl font-bold color-primary mt-5 mb-4">
              Update your current website theme to the newest editions!
            </h1>
            <GetaQuoteLink />
          </div>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <Image
              src={"/webservice6.png"}
              alt=""
              height={40}
              width={40}
            ></Image>
          </div>
          <div>
            <h1 className="text-xl font-bold color-primary mt-5 mb-4">
              Get the online shop audited by our experts to increase sales
              significantly!
            </h1>
            <GetaQuoteLink />
          </div>
        </div>
        <div className="break-inside-avoid mb-5 border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
          <div>
            <Image
              src={"/webservice5.png"}
              alt=""
              height={100}
              width={100}
            ></Image>
          </div>
          <div>
            <h1 className="text-2xl font-bold color-primary mt-10 mb-4">
              Is slow page speed troubling you?
            </h1>
            <p className="text-xl mb-5 font-medium color-primary">
              Enhancing page load times can elevate user satisfaction and
              decrease the likelihood of visitors leaving prematurely. This can
              directly boost your sales figures. Moreover, swifter pages can
              bolster your SEO ranking, amplifying your site&apos;s visibility
              to prospective customers.
            </p>
            <GetaQuoteLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProjectServices;
