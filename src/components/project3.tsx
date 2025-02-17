import { Modal } from "antd";
import React, { useRef, useState } from "react";
import Image from "../components/image";

type Props = {};

export default function Project3({}: Props) {
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
      <div className="container mx-auto">
        <h1 className="font-semibold text-4xl text-center text-grey-custom mb-4">
          Smartway Homepage Project
        </h1>
        <p className="text-xl text-white mb-3">
          This is my second project at Smartway. This project is a website that
          provides an overview of the company. In this project, I took the main
          role in front-end development.
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
              1.Initialize and set up the project to ensure that SEO-related
              content is optimized for the best possible SEO performance.
            </p>
            <p className="text-white">
              2.Work with the design team based on Figma to create the best
              website for the project.
            </p>
            <p className="text-white">
              Since this is a company overview project, there aren't many user
              features. The two main priorities are ensuring the design strictly
              follows the Figma file and optimizing SEO.
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
