import React from "react";

const Sidebar = () => {
  return (
    <main className="sidebar h-screen fixed  top-0 bottom-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
      {/* <section className=" mx-auto w-fit ">
        <div className="text-lg font-bold text-gray-600 ">
          G-Mobile <span className="text-bleu">Money</span>
        </div>
      </section> */}
      <div class="text-gray-100 text-xl">
        <div class="p-2.5 mt-1 flex items-center">
          <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
          <h1 class="font-bold text-gray-200 text-[15px] ml-3">
            G-Mobile Money
          </h1>
          <i
            class="bi bi-x cursor-pointer ml-28 lg:hidden"
            onclick="Close()"
          ></i>
        </div>
        <div class="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <section className="">
        <ul>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            {/* <i className="bi bi-house-door-fill"></i> */}
            <img src="/icons.png" alt="" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              <a href="dashboard"> Tableau de board</a>
            </span>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <img src="/icon/operation.svg" alt="" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              <a href="operation">Client</a>
            </span>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <img
              src="/icon/Initiate Money Transfer.svg"
              alt=""
              className="w-6"
            />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Envoyer
            </span>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <img src="/icon/Receive Dollar.svg" alt="" className="w-6" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Retirer
            </span>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <img src="/icon/Unread messages.svg" alt="" className="w-6" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Notification
            </span>
          </div>
        </ul>
      </section>
    </main>
  );
};

export default Sidebar;
