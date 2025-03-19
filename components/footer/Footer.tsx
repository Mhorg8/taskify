import React from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import { footerLInk } from "@/constant";

const Footer = () => {
  return (
    <div className="container flex flex-wrap items-start gap-5 justify-between py-10">
      {/* logo and social links */}
      <div className="flex-1">
        <Link href="" className="text-4xl font-extrabold">
          Task<span className="text-red">pro</span>
        </Link>

        <div className="mt-2">
          <h3 className="text-2xl font-semibold">Follow us</h3>
          <p>Stay fresh with following takspro social media's.</p>
        </div>

        <SocialLinks />
      </div>

      <div className="flex flex-wrap items-start justify-between gap-5 flex-2 ">
        {footerLInk.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-center"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <ul className="flex flex-col gap-1 mt-3">
                {item.sublinks.map((sublink) => {
                  return (
                    <Link
                      key={sublink.title}
                      href={sublink.href}
                      className="hover:scale-110 hoverEffect hover:underline"
                    >
                      {sublink.title}
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
