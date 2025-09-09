"use client";
import Typography from "@/utils/Typography";
import Image from "next/image";
import PrimaryInput from "../Inputs/PrimaryInput";
import { useState } from "react";
import BlackButton from "../Button/BlackButton";
import { div } from "motion/react-client";
import Navbar from "../navbar/Navbar";

const HeroSection = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(""); // Clear error on change
    if (error) setDisabled(false);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <div>
      <Navbar />

      <div className="font-primary flex justify-center min-h-[80vh] w-full items-center ">
        <div className=" w-full md:px-[3rem] px-5 h-full items-center">
          <div className="flex relative h-fit" id="image-section">
            <div className="w-full h-[50vh]">
              <Image
                className="object-cover w-full h-full"
                src="/images/socialmedia-trade.webp"
                alt="Social Media Trade"
                width={700}
                height={100}
                priority
              />
            </div>
            {/* Left fade overlay */}
            <div
              className="absolute left-0 top-0 h-full w-1/3 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, white 0%, transparent 100%)",
              }}
            />
            {/* Right fade overlay */}
            <div
              className="absolute right-0 top-0 h-full w-1/3 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, white 0%, transparent 100%)",
              }}
            />
            {/* Top fade overlay */}
            <div
              className="absolute top-0 left-0 w-full h-[40%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, white 0%, transparent 100%)",
              }}
            />
            {/* Bottom fade overlay */}
            <div
              className="absolute bottom-0 left-0 w-full h-[50%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, white 0%, transparent 100%)",
              }}
            />
          </div>
          <div className="flex flex-col items-center mt-10">
            <div className="text-center">
              <Typography.Heading className="md:text-center md:text-[100px]">
                Sell Smarter, Socially
              </Typography.Heading>
            </div>
            <div className=" mt-5">
              <Typography.Text className="md:w-[70%] mx-auto text-center">
                No more scattered DMs, manual receipts, or lost orders. FlexShop
                helps small vendors run their business like pros, directly from
                WhatsApp, Instagram, and TikTok.
              </Typography.Text>
            </div>
            <div className="md:flex items-cente justify-center space-x-1 md:w-[75%] w-full mx-auto mt-10 space-y-2 md:space-y-0">
              <div className="md:w-[65%] w-full">
                <PrimaryInput
                  name="email"
                  placeholder="Enter your email address"
                  text=""
                  textCss="text-white md:text-black"
                  type="text"
                  onBlur={() => {
                    if (!validateEmail(email)) {
                      setError("Invalid email address");
                      setDisabled(true);
                    }
                  }}
                  onChange={handleEmailChange}
                  value={email}
                  error={error}
                />
              </div>
              <div className="">
                <BlackButton
                  type="submit"
                  text="Join the waitlist"
                  css="w-full"
                  buttonId="login_up_button"
                  onClick={() => handleSubmit()}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
