/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Atoms/Button";
import Image from "next/image";
import Link from "next/link";
interface ParallaxItemProps {
  children: React.ReactNode;
  index: number;
}

// https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048

const ParallaxItem: React.FC<ParallaxItemProps> = ({ children, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${2 * index}%`]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="sticky top-0 md:h-[68vh] h-[108vh] flex max-w-[1080px] mx-auto w-full items-center justify-center lg:px-8 px-4"
    >
      {children}
    </motion.div>
  );
};

const ParallaxSection: React.FC = () => {
  const lightModeColors = [
    '#F0F4F8', // Light Blue Gray
    '#FEEAFA', // Light Pink
    '#E6F3EC', // Light Mint Green
    '#FFF4E6', // Light Peach
    '#F3E8FF', // Light Lavender
    '#E6F6FF', // Light Sky Blue
    '#FFF0F0', // Light Salmon
    '#F0FFF4', // Light Honeydew
  ];

  const getRandomColor = () => {
    return lightModeColors[Math.floor(Math.random() * lightModeColors.length)];
  };

  const items = [
    {
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
      link: "/case_study/modernizing-a-subscription-management-platform-1"
    },
    {
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
      link: "/case_study/modernizing-a-subscription-management-platform-2"
    },
    {
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
      link: "/3"
    },
    {
      title: "Modernizing a Subscription Management Platform",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      image:
        "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=2048",
      rate: "4.5",
      review: "12",
      link: "/4"
    },
  ].map(item => ({
    ...item,
    backgroundColor: getRandomColor(),
  }));

  return (
    <div className="relative md:h-[280vh] font-satoshi">
      {items.map((item, index) => (
        <ParallaxItem key={index} index={index}>
          <div 
            className="bg-[#fbfbfb] px-8 w-full max-w-[1080px] h-fit rounded-[24px] shadow-md py-[60px] opacity-100 md:px-10"
            style={{ backgroundColor: item.backgroundColor }}
          >
            <div className="flex justify-between max-lg:flex-col">
              <div className="flex flex-col lg:justify-between h-full lg:min-h-[380px] lg:max-w-[480px] w-full">
                <div>
                  <p className="text-[#000000] md:text-[30px] text-[26px] -tracking-[0.5px] leading-[1.4em]">
                    {item.title}
                  </p>
                  <p className="mt-2.5 text-[#000000] md:text-[18px] leading-[1.4em] -tracking-[0.3px]">
                    {item.description}
                  </p>
                </div>

                <Button className="max-w-[160px] max-lg:mt-6 bg-black" ><Link className="text-white" href={item.link}>View Case Study</Link></Button>
              </div>
              <div className="flex flex-col items-start justify-start gap-6 max-lg:mt-12">
                <img
                  style={{
                    objectPosition: "center center",
                    imageRendering: "auto",
                  }}
                  className="lg:max-w-[420px] w-full lg:min-h-[240px] max-w-full min-h-[200px] object-cover rounded-lg"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex items-center md:gap-16 flex-row w-full max-w-full gap-3">
                  <p className="flex gap-3 flex-col">
                    <span className="text-[#000000] md:text-[20px] text-[18px] leading-[1.4em] -tracking-[0.5px]">
                      Engagement
                    </span>
                    <span className="text-[#000000] md:text-[42px] font-medium text-[32px]">
                      {item.rate}
                    </span>
                  </p>
                  <p className="flex gap-3 flex-col">
                    <span className="text-[18px] text-[#000000] md:text-[20px] leading-[1.4em] -tracking-[0.5px]">
                      User Satisfaction
                    </span>
                    <span className="text-[#000000] md:text-[42px] font-medium text-[32px]">
                      {item.review}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxItem>
      ))}
    </div>
  );
};

export default ParallaxSection;
