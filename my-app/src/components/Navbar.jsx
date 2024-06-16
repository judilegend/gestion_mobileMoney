import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <main className="w-full relative  h-24 bg-[#FAFBFC] px-10 shadow-sm flex items-center justify-between">
      <section>
        <h1 className="text-gray-600 font-bold text-2xl">Tableau de Bord</h1>
      </section>
      <section className="flex gap-2 items-center">
        <div>
          <SearchBar />
        </div>
        <div className="h-12 w-12 rounded-full bg-white shadow-sm"></div>
        <div className="w-auto h-12 bg-white rounded-full flex items-center shadow-sm gap-2">
          <img src="/Ellipse 3226.png" alt="img" className="my-auto" />
          <div className="text-gray-600">
            <h2 className="text-sm">Alex meian</h2>
            <p className="text-xs">Prodcut manager</p>
          </div>
          <img src="/icons.svg" alt="" className="mr-2" />
        </div>
      </section>
    </main>
  );
};

export default Navbar;
