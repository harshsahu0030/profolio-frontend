import React from "react";
import { navLinks } from "../data/navLinks";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-2 py-4 px-4 rounded-l-2xl bg-surface">
      {navLinks?.map((item) => (
        <a
          key={item.path}
          href={item.path}
          className="text-base font-bold hover:scale-95 hover:text-accent transition-all"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
