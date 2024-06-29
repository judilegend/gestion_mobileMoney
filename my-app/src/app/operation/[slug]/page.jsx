import React from "react";
import { useParams } from "next/navigation";
const page = () => {
  const params = useParams();

  return (
    <div className="mt-10 w-full flex justify-between gap-5">
      <section>
        <Operations />
      </section>
      <section className="fixed">
        <Form />
      </section>
    </div>
  );
};

export default page;
