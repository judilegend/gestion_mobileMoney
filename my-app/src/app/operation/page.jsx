import React from "react";
import Operations from "../../components/Operation";
import Sidebar from "../../components/Sidebar";
import Form from "../../components/Form";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="w-full grid grid-cols-[300px,1fr] grid-rows-[70px,1fr]  h-screen overflow-x-hidden relative">
      <div className="row-span-2  ">
        <Sidebar />
      </div>
      <div className="col-span-1 ">
        <Navbar />
      </div>
      <div className="col-start-2 row-start-2 px-8">
        <section className="flex w-full justify-between relative">
          <div className="mt-10 w-full flex justify-between gap-5">
            {" "}
            <Operations />
            <Form />
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
