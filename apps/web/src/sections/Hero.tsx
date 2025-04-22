import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import bg from "@image/bg.png";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { HeroExperience } from "../components/HeroModels/HeroExperience";
import { words } from "../constants/index";

gsap.registerPlugin(ScrollTrigger);

const MAX_LIGHT_INTENSITY = 5;
const LIGHT_START_POS = [-18, 25.7, -5.1];
const LIGHT_MID_POS = [-9, 13, -2.5];

export const Hero: React.FC = () => {
  const [rotationY, setRotationY] = useState(0);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  const [lightIntensity, setLightIntensity] = useState(0);
  const [lightPosition, setLightPosition] = useState<number[]>(LIGHT_START_POS);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-text h1",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.inOut",
        }
      );

      ScrollTrigger.create({
        trigger: heroSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          setRotationY(self.progress * Math.PI * 2);
        },
      });

      ScrollTrigger.create({
        trigger: heroSectionRef.current,
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          const currentIntensity =
            MAX_LIGHT_INTENSITY * Math.sin(progress * Math.PI);
          setLightIntensity(currentIntensity);

          const directionChangeEndProgress = 0.44;
          const directionProgress = Math.min(
            1,
            progress / directionChangeEndProgress
          );

          // 使用 GSAP 的插值工具计算当前 X, Y, Z 坐标
          const currentX = gsap.utils.interpolate(
            LIGHT_START_POS[0],
            LIGHT_MID_POS[0],
            directionProgress
          );
          const currentY = gsap.utils.interpolate(
            LIGHT_START_POS[1],
            LIGHT_MID_POS[1],
            directionProgress
          );
          const currentZ = gsap.utils.interpolate(
            LIGHT_START_POS[2],
            LIGHT_MID_POS[2],
            directionProgress
          );
          setLightPosition([currentX, currentY, currentZ]);
        },
      });

      ScrollTrigger.create({
        trigger: heroTextRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleClass: { targets: heroTextRef.current, className: "active" },
      });
    },
    { scope: heroSectionRef }
  );

  return (
    <section
      ref={heroSectionRef}
      id="hero"
      className="relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 z-10">
        <img src={bg} alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div ref={heroTextRef} className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Turning
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => {
                      return (
                        <span
                          key={index}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />
                          <span>{word.text}</span>
                        </span>
                      );
                    })}
                  </span>
                </span>
              </h1>
              <h1>into Interactive Experiences</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Just a simple component library.
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
              text="SEE THE PROJECT"
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience
              rotationY={rotationY}
              lightIntensity={lightIntensity}
              lightPosition={lightPosition}
            />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};
