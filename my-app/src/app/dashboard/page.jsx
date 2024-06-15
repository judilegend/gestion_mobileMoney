import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const page = () => {
  return (
    <main className="">
      <Navbar className="w-[80%]" />
      <Sidebar />
    </main>
  );
};

export default page;
