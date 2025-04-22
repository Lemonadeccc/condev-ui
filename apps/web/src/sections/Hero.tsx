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

const MAX_LIGHT_INTENSITY = 5; // 定义灯光最大强度
// const LIGHT_START_POS = [-26, 25.7, -5.1]; // 灯光初始位置 (从正上方、靠前照射)
// const LIGHT_MID_POS = [-13, 13, -2.5]; // 灯光中间位置 (动画目标位置) // 注意：这里可能也需要调整以匹配新的动画意图
const LIGHT_START_POS = [-18, 25.7, -5.1]; // 灯光初始位置 (从正上方、靠前照射)
const LIGHT_MID_POS = [-9, 13, -2.5]; // 灯光中间位置 (动画目标位置) // 注意：这里可能也需要调整以匹配新的动画意图

export const Hero: React.FC = () => {
  const [rotationY, setRotationY] = useState(0); // 3D 模型 Y 轴旋转状态
  const heroTextRef = useRef<HTMLDivElement>(null); // 英雄区域文本部分的引用
  const heroSectionRef = useRef<HTMLElement>(null); // 整个英雄区域的引用

  // 灯光属性状态
  const [lightIntensity, setLightIntensity] = useState(0); // 灯光强度
  const [lightPosition, setLightPosition] = useState<number[]>(LIGHT_START_POS); // 灯光位置

  useGSAP(
    () => {
      // 1. 初始标题文本入场动画
      gsap.fromTo(
        ".hero-text h1", // 目标元素
        {
          y: 50, // 起始状态：向下偏移 50px
          opacity: 0, // 起始状态：完全透明
        },
        {
          y: 0, // 结束状态：回到原始位置
          opacity: 1, // 结束状态：完全可见
          stagger: 0.2, // 每个 h1 元素之间延迟 0.2 秒执行动画
          duration: 1, // 动画持续时间 1 秒
          ease: "power2.inOut", // 动画缓动效果
        }
      );

      // 2. 根据滚动进度旋转 3D 模型
      ScrollTrigger.create({
        trigger: heroSectionRef.current, // 触发动画的元素
        start: "top top", // 触发开始条件：元素顶部碰到视口顶部
        end: "bottom top", // 触发结束条件：元素底部碰到视口顶部
        scrub: 1, // 动画与滚动条平滑关联，数值表示延迟（秒）
        onUpdate: (self) => {
          // self.progress 是滚动进度 (0 到 1)
          // 将滚动进度映射到 0 到 2π (360度) 的旋转角度
          setRotationY(self.progress * Math.PI * 2);
        },
      });

      // 3. 根据滚动进度控制灯光强度和位置
      ScrollTrigger.create({
        trigger: heroSectionRef.current, // 触发动画的元素
        start: "top 90%", // 触发开始条件：元素顶部进入视口 90% 时
        end: "bottom 10%", // 触发结束条件：元素底部离开视口 10% 时
        scrub: 1, // 平滑滚动关联
        onUpdate: (self) => {
          const progress = self.progress; // 当前滚动进度 (0 到 1)

          // 计算灯光强度：使用正弦函数 Math.sin(progress * Math.PI)
          // 这使得强度从 0 (progress=0) -> MAX (progress=0.5) -> 0 (progress=1)
          // 模拟光源扫过的效果
          const currentIntensity =
            MAX_LIGHT_INTENSITY * Math.sin(progress * Math.PI);
          setLightIntensity(currentIntensity);

          // 计算灯光位置：在起始位置和中间位置之间插值
          // 假设灯光方向变化主要发生在滚动的前半段 (视口 90% -> 50% 可见)
          // 这对应于整个滚动触发器范围的大约 0 到 0.44 的进度
          const directionChangeEndProgress = 0.44; // 定义方向变化结束时的滚动进度阈值
          // 将完整滚动进度映射到方向变化进度 (0 到 1, 在 0.44 后停止增长)
          const directionProgress = Math.min(
            1,
            progress / directionChangeEndProgress
          );

          // 使用 GSAP 的插值工具计算当前 X, Y, Z 坐标
          const currentX = gsap.utils.interpolate(
            LIGHT_START_POS[0], // 起始 X
            LIGHT_MID_POS[0], // 结束 X
            directionProgress // 插值进度
          );
          const currentY = gsap.utils.interpolate(
            LIGHT_START_POS[1], // 起始 Y
            LIGHT_MID_POS[1], // 结束 Y
            directionProgress // 插值进度
          );
          const currentZ = gsap.utils.interpolate(
            LIGHT_START_POS[2], // 起始 Z
            LIGHT_MID_POS[2], // 结束 Z
            directionProgress // 插值进度
          );
          // 更新灯光位置状态
          setLightPosition([currentX, currentY, currentZ]);
        },
      });

      // 4. 根据滚动位置切换文本高亮样式
      ScrollTrigger.create({
        trigger: heroTextRef.current, // 触发元素 (文本容器)
        start: "top 75%", // 触发开始条件：元素顶部进入视口 75% 时
        end: "bottom 25%", // 触发结束条件：元素底部离开视口 25% 时
        // 当触发器激活时，为 heroTextRef.current 添加 'active' 类，否则移除
        toggleClass: { targets: heroTextRef.current, className: "active" },
        // markers: true, // 取消注释以显示调试标记
      });
    },
    { scope: heroSectionRef } // 优化性能，将 GSAP 上下文限定在 heroSectionRef 内部
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
                Shaping
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
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Just a simple developer. experiences.
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
              text="See my work"
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
