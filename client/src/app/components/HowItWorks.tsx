import React from "react";
import { pick, pot, pack, watch, arrow } from "@/assets/images";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className=" bg-green-100 items-center py-[100px] mt-10 flex justify-around">
      <div className=" flex justify-center items-center gap-3 font-thin flex-col">
        <Image src={pick} alt="pick" width={80} />
        <h4>Pick your plant</h4>
      </div>
      <Image src={arrow} className="arrow-img" alt="arrow" width={80} />
      <div className=" flex justify-center items-center gap-3 font-thin flex-col">
        <Image src={pot} alt="pot" width={80} />
        <h4>Choose pot color</h4>
      </div>
      <Image src={arrow} className="arrow-img" alt="arrow" width={80} />
      <div className=" flex justify-center items-center gap-3 font-thin flex-col">
        <Image src={pack} alt="pack" width={80} />
        <h4>Have it shipped</h4>
      </div>
      <Image src={arrow} className="arrow-img" alt="arrow" width={80} />
      <div className=" flex justify-center items-center gap-3 font-thin flex-col">
        <Image src={watch} alt="watch" width={80} />
        <h4>Watch it grow</h4>
      </div>
    </section>
  );
};

export default HowItWorks;
