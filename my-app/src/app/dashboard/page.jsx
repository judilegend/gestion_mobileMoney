import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const page = () => {
  return (
    <main className="flex flex-row-reverse">
      <Navbar />
      <Sidebar />
    </main>
  );
};

export default page;
