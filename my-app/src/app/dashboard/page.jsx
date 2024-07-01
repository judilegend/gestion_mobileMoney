"use client"
import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";

const page = () => {
  return (
    <div className="w-full h-screen">
      {/* <section className="flex w-full justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </section> */}
        <div className="w-full grid grid-cols-[300px,1fr] grid-rows-[70px,1fr]  h-screen overflow-x-hidden relative">
            <div className="row-span-2  ">
              <Sidebar />
            </div>
            <div className="col-span-1 ">
              <Navbar />
            </div>
            <div className="col-start-2 row-start-2 px-8">
              <section className="flex w-full justify-between relative">
                <Card />
                <Card />
                <Card />
                <Card />
              </section>
            </div>
          </div>
    </div>
  );
};

export default page;
