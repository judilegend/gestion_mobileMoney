import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";

const page = () => {
  return (
    <div className="w-full h-screen">
      <section className="flex w-full justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default page;
