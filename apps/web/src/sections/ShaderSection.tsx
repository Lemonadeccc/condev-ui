import gsap from "gsap";
import React, { useEffect, useRef } from "react";

import { useCanvas } from "../hook/useCanvas";

// 基本着色器示例 (可替换为你想要的着色器)
const defaultFragmentShader = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution; // 使用 GlslCanvas 提供的 u_resolution
// uniform vec2 u_mouse; // 取消注释：因为代码中使用了 u_mouse
// uniform vec3 spectrum; // 移除：未使用且未提供

varying vec2 v_texcoord;

vec4 rgb(float r,float g,float b){
  return vec4(r/255.,g/255.,b/255.,1.);
}

void main(void){
  vec2 uv=v_texcoord;
  
  vec4 tl=rgb(251.,41.,212.);
  vec4 tr=rgb(0.,255.,224.);
  vec4 bl=rgb(255.,255.,0.);
  vec4 br=rgb(231.,244.,255.);
  
  float dispX=.5*sin(u_time);
  float dispY=.25*sin(u_time*.25);
  
  vec4 color=mix(
    mix(tl,tr,uv.x+dispX),
    mix(bl,br,uv.x-dispX),
    uv.y+dispY
  );
  
  gl_FragColor=color;
}
`;

export const ShaderSection = () => {
  const deeplyRef = useRef<HTMLDivElement>(null);
  const softlyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sandbox = useCanvas(canvasRef);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    gsap.fromTo(
      deeplyRef.current,
      { fontVariationSettings: '"wgt" 20, "wdth" 210', opacity: 0.5 },
      {
        fontVariationSettings: '"wgt" 100, "wdth" 120',
        opacity: 1,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "none",
      }
    );

    gsap.fromTo(
      softlyRef.current,
      { fontVariationSettings: '"wgt" 100, "wdth" 120', opacity: 1 },
      {
        fontVariationSettings: '"wgt" 20, "wdth" 210',
        opacity: 0.5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "none",
      }
    );

    return () => {
      gsap.killTweensOf([deeplyRef.current, softlyRef.current]);
      animationRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (sandbox) {
      sandbox.load(defaultFragmentShader);
    }
    return () => {
      animationRef.current?.kill();
    };
  }, [sandbox]);

  return (
    <section className="w-full h-[100vh] flex justify-around items-center">
      <div
        ref={deeplyRef}
        className="w-20 text-white text-4xl font-bold"
        style={{ fontVariationSettings: '"wgt" 20, "wdth" 210', opacity: 0.5 }}
      >
        Deeply
      </div>

      <canvas
        ref={canvasRef}
        id="glslCanvasElement" // 添加 ID 以便可能更容易选择，但 ref 是主要的
        className="w-[500px] h-[500px] rounded-full"
      ></canvas>

      <div
        ref={softlyRef}
        className="w-20 text-white text-4xl font-bold"
        style={{ fontVariationSettings: '"wgt" 100, "wdth" 120', opacity: 1 }}
      >
        Softly
      </div>
    </section>
  );
};
