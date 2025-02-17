import { Modal } from "antd";
import React, { useRef, useState } from "react";
import Image from "../components/image";

type Props = {};

export default function Project2({}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [src, setSrc] = useState<string | null>("");

  const handleClickImg = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    ref: any
  ) => {
    if (ref.current) {
      console.log(ref.current.getAttribute("src"));
      setSrc(ref.current.getAttribute("src"));
    }
    setOpen(true);
  };
  return (
    <div className="bg-navy h-screen overflow-y-scroll">
      <div className="container mx-auto !p-5 mx:px-[50px] !pb-[100px]">
        <h1 className="font-semibold text-4xl text-center text-grey-custom mb-4">
          Warehouse Management System Project
        </h1>
        <p className="text-xl text-white mb-3">
          This is the first project at Smartway. This project is a warehouse
          management project designed to support businesses in their warehouse
          management operations. Specifically, this solution helps businesses
          track and control goods in and out of the warehouse, inventory, and
          transportation to support sales and supplier ordering activities.
        </p>
        <p className="text-grey-custom text-xl">
          I. A few libraries and frameworks that be used in this project:
        </p>
        <div className="flex gap-11 mb-3">
          <ul className="text-white">
            <li>NextJS</li>
            <li>MUI</li>
            <li>React ChartJS</li>
            <li>React Hook Form</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-grey-custom text-xl">
            II. Due to some confidential information and the company's product
            has not been released to the market, I cannot disclose the source
            code. Therefore, I will describe some features I have done in
            company. This is some features i did during working at company:
          </p>

          <div className="flex flex-col gap-2 mb-4">
            <p className="text-white">
              1.Create components for reusing in whole project.
            </p>
            <p className="text-white">
              2.Create dashboard page for statistical data.
            </p>
            <p className="text-white">
              3.Display data in a table format and filter data based on the
              user's search results.
            </p>
            <p className="text-white">
              4.Create reports page for checking data.
            </p>
            <p className="text-white">
              5.Handle form when user send data to server.
            </p>
            <p className="text-white">
              6.Access control based on the logged-in account.
            </p>
            <p className="text-white">
              7.Update and modify features based on customer needs.
            </p>
            <p className="text-white">
              8.Work with the design team based on Figma to create the best website for the project.
            </p>
          </div>
        </div>
        <p className="text text-grey-custom text-xl">
          This is all features i did during worked in WMS project. Thanks for
          reading and hope you to like it. Looking forward to hearing from you -
          Nguyen Huu Tai.
        </p>
      </div>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={false}
        width={"80%"}
        // style={{padding: 0}}
        rootClassName="show-image-modal-customize"
      >
        <img src={src ? src : ""} className="w-full" alt="" />
      </Modal>
    </div>
  );
}
