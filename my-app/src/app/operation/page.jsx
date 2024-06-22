import React from "react";
import Operations from "../../components/Operation";
import Sidebar from "../../components/Sidebar";
import Form from "../../components/Form";

const page = () => {
  return (
    <div className="mt-10 w-full flex justify-between gap-5">
      <Operations />
      <Form />
    </div>
  );
};

export default page;
