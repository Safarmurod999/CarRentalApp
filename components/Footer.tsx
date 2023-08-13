import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-black-100 mt-5 border-t border-gray-100">
      <div className="max-w-[1440px] flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 py-10  mx-auto">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Car Hub <br />6 All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center flex-wrap border-t border-gray-500 sm:px-16 px-6 py-10">
        <p className="text-base text-gray-700">
          Car Hub All rights reserved &copy;
        </p>
        <div className="footer__copyrights-link">
          <Link href={"/"} className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
