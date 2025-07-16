import React from "react";
import { socialLinks } from "../data/socialLinks";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* top  */}
      <div className="h-full flex flex-col items-center gap-5 md:flex-row justify-between">
        {/* left  */}
        <div className="flex gap-5 items-center">
          <img src="/logo.png" alt="footer-logo" height={100} width={100} />
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-semibold">Harsh Sahu</span>
            <span>Web Developer</span>
          </div>
        </div>

        {/* right  */}
        <ul className="flex flex-col gap-1">
          {socialLinks?.map((item) => (
            <li
              key={item?.url}
              className="flex gap-1 items-center cursor-pointer hover:scale-95 hover:text-accent transition-all font-medium"
            >
              <a
                href={item?.url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 items-center"
              >
                <item.icon />
                <span>{item?.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* bottom  */}
      <div className="h-fit w-full py-2 text-center text-sm flex justify-center font-medium border-t border-text/50">
        © Harsh Sahu 2025 | Designed & Developed by Harsh Sahu | All Rights
        Reserved
      </div>
    </div>
  );
};

export default Footer;
