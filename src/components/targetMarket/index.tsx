"use client";
import Typography from "@/utils/Typography";
import Image from "next/image";
import NumberFlow from "@number-flow/react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const data = [
  {
    title: "Everyday sellers managing sales on WhatsApp, Instagram, and TikTok",
    description:
      "From fashion vendors taking orders through Instagram DMs, to food sellers running WhatsApp groups, to beauty brands showcasing products on TikTok, millions of everyday entrepreneurs rely on social media to connect with customers",
  },
  {
    title:
      "Emerging markets like Nigeria, Kenya, Ghana, India, Brazil, and Indonesia",
    description:
      "In these regions, social media isn’t just for connection, it’s the primary marketplace. Millions of small traders sell everything from clothes and food to beauty products through WhatsApp groups, Instagram pages, and TikTok videos",
  },
];

const TargetMarket = () => {
  const [value, setValue] = useState(0);
  const card = useRef(null);
  const isCardInView = useInView(card);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isCardInView && value < 1.2) {
      interval = setInterval(() => {
        setValue((prev) => {
          if (prev + 0.1 >= 1.2) {
            clearInterval(interval!);
            return 1.2;
          }
          return prev + 0.1;
        });
      }, 50);
    } else if (!isCardInView && value !== 0) {
      setValue(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCardInView, value]);

  return (
    <div>
      <div className="mt-[5rem] md:px-3rem px-5 relative">
        <div className="text-center">
          <Typography.Heading className="md:text-center md:text-[80px]">
            Who We’re Building For
          </Typography.Heading>
        </div>
        <div className="space-y-10 mt-10">
          {data.map((el, i) => (
            <div key={i} className="md:w-[25%] w-[80%] mx-auto">
              <Typography.Headers className="text-left">
                {el.title}
              </Typography.Headers>
              <Typography.Text>{el.description}</Typography.Text>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <div className="w-[300px] h-[70vh] absolute right-0 top-[5rem] ">
            <Image
              className="object-cover w-full h-full"
              src="/images/flexshopWinning.webp"
              alt="online vendor happy with flexshop"
              width={200}
              height={700}
              priority
            />
          </div>
          <div className="w-[400px] h-[80vh] absolute left-0 top-[10rem]">
            <Image
              className="object-cover w-full h-full object-right"
              src="/images/onlineVendor2.webp"
              alt="online vendor happy with flexshop"
              width={200}
              height={800}
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-5 md:hidden">
        <div className="w-[300px] h-[100px] ">
          <Image
            className="object-cover w-full h-full"
            src="/images/flexshopWinning.webp"
            alt="online vendor happy with flexshop"
            width={200}
            height={700}
            priority
          />
        </div>
        <div className="w-[300px] h-[100px]">
          <Image
            className="object-cover w-full h-full object-right"
            src="/images/onlineVendor2.webp"
            alt="online vendor happy with flexshop"
            width={200}
            height={800}
            priority
          />
        </div>
      </div>
      <div
        className="h-screen md:mt-[7rem] flex flex-col justify-center items-center relative "
        ref={card}
        id="card"
      >
        <div className="w-full h-full absolute top-0 opacity-10">
          <Image
            className="object-cover w-full h-full"
            src="/images/socialmedia.webp"
            alt="social media"
            width={800}
            height={1000}
            priority
          />
        </div>
        <div className="relative">
          <Typography.Heading className="md:text-center md:text-[450px] md:font-proximaNovaBold  font-proximaNovaBold flex items-center text-[150px] ">
            <span className="font-primary md:text-[300px] font-bold">$</span>
            <div className="relative">
              <div className="hidden md:block">
                <NumberFlow value={1.2} />{" "}
              </div>
              <div className="md:hidden">
                <NumberFlow value={value} />{" "}
              </div>
              <div
                className="absolute md:bottom-[9rem] bottom-[2rem] left-0 w-full h-[40%] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, #f0edf0 20%, transparent 100%)",
                }}
              />
            </div>
            <span className="font-primary md:text-[300px]">+</span>
          </Typography.Heading>{" "}
          <Typography.Heading className="absolute md:bottom-[8rem] bottom-[3rem] md:text-[150px] text-[60px] md:font-[300] md:font-proximaNovaBold flex justify-center w-[100%] md:pl-[5rem] pl-[2rem]">
            {" "}
            trillion
          </Typography.Heading>
          <Typography.Text className="md:absolute bottom-[4rem] md:text-[25px] md:font-[300] md:font-primary md:w-[100%] w-[70%] mx-auto flex justify-center text-center">
            {" "}
            projected in social commerce globally by 2025
          </Typography.Text>
        </div>
      </div>
    </div>
  );
};

// public/images/socialmedia.webp

export default TargetMarket;
