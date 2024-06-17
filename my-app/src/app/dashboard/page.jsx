import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";

const page = () => {
  return (
    <div className="grid grid-cols-[300px,1fr] grid-rows-[70px,1fr]  h-screen">
      <div className="row-span-2 ">
        <Sidebar />
      </div>
      <div className="col-span-1 ">
        {" "}
        <Navbar />
      </div>
      <div className="col-start-2 row-start-2 px-8">
        <section className="flex w-full justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </div>
  );
};

export default page;
