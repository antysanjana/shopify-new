import Image from "next/image";
import React from "react";
import GreenLink from "./GreenLink";
const TaskRequestComponent = () => {
  return (
    <div className="mb-5 max-w-screen-xl w-10/12 mx-auto text-center border-solid border-[1px] border-gray-200 p-5 rounded-xl shadow-lg">
      <div className="flex justify-center">
        <Image src={"/task.png"} alt="" width={50} height={50}></Image>
      </div>
      <h1 className="text-2xl font-bold color-primary mt-5 md:mt-6 mb-4">
        And much more!
      </h1>
      <p className="text-base color-primary md:w-2/5 m-auto mb-5">
        Can&apos;t find what you need? Submit a task request, and our team will
        quickly confirm the project and start working on it.
      </p>
      <GreenLink />
    </div>
  );
};

export default TaskRequestComponent;
