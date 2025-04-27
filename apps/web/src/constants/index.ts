import chatPng from "@image/chat.png";
import client1Png from "@image/client1.png";
import client2Png from "@image/client2.png";
import client3Png from "@image/client3.png";
import client4Png from "@image/client4.png";
import client5Png from "@image/client5.png";
import codeSvg from "@image/code.svg";
import conceptsSvg from "@image/concepts.svg";
import designsSvg from "@image/designs.svg";
import exp1Png from "@image/exp1.png";
import exp2Png from "@image/exp2.png";
import exp3Png from "@image/exp3.png";
import fbPng from "@image/fb.png";
import ideasSvg from "@image/ideas.svg";
import instaPng from "@image/insta.png";
import linkedinPng from "@image/linkedin.png";
import logo1Png from "@image/logo1.png";
import logo2Png from "@image/logo2.png";
import logo3Png from "@image/logo3.png";
import companyLogo1 from "@image/logos/company-logo-1.png";
import companyLogo2 from "@image/logos/company-logo-2.png";
import companyLogo3 from "@image/logos/company-logo-3.png";
import companyLogo4 from "@image/logos/company-logo-4.png";
import companyLogo5 from "@image/logos/company-logo-5.png";
import companyLogo6 from "@image/logos/company-logo-6.png";
import companyLogo7 from "@image/logos/company-logo-7.png";
import companyLogo8 from "@image/logos/company-logo-8.png";
import companyLogo9 from "@image/logos/company-logo-9.png";
import companyLogo10 from "@image/logos/company-logo-10.png";
import companyLogo11 from "@image/logos/company-logo-11.png";
import gitLogo from "@image/logos/git.svg";
import nodeLogo from "@image/logos/node.png";
import pythonLogo from "@image/logos/python.svg";
import reactLogo from "@image/logos/react.png";
import threeLogo from "@image/logos/three.png";
import seoPng from "@image/seo.png";
import timePng from "@image/time.png";
import xPng from "@image/x.png";

type NavLink = {
  name: string;
  link: string;
};

const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Docs",
    link: "docs",
  },
  {
    name: "Components",
    link: "components",
  },
  {
    name: "Storybook",
    link: "storybook",
  },
];

type Word = {
  text: string;
  imgPath: string;
};

const words: Word[] = [
  { text: "Ideas", imgPath: ideasSvg },
  { text: "Concepts", imgPath: conceptsSvg },
  { text: "Designs", imgPath: designsSvg },
  { text: "Code", imgPath: codeSvg },
  { text: "Ideas", imgPath: ideasSvg },
  { text: "Concepts", imgPath: conceptsSvg },
  { text: "Designs", imgPath: designsSvg },
  { text: "Code", imgPath: codeSvg },
];

type CounterItem = {
  value: number;
  suffix: string;
  label: string;
};

const counterItems: CounterItem[] = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

type LogoIcon = {
  imgPath: string;
};

const logoIconsList: LogoIcon[] = [
  {
    imgPath: companyLogo1,
  },
  {
    imgPath: companyLogo2,
  },
  {
    imgPath: companyLogo3,
  },
  {
    imgPath: companyLogo4,
  },
  {
    imgPath: companyLogo5,
  },
  {
    imgPath: companyLogo6,
  },
  {
    imgPath: companyLogo7,
  },
  {
    imgPath: companyLogo8,
  },
  {
    imgPath: companyLogo9,
  },
  {
    imgPath: companyLogo10,
  },
  {
    imgPath: companyLogo11,
  },
];

type Ability = {
  imgPath: string;
  title: string;
  desc: string;
};

const abilities: Ability[] = [
  {
    imgPath: seoPng,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: chatPng,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: timePng,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

type TechStackImg = {
  name: string;
  imgPath: string;
};

const techStackImgs: TechStackImg[] = [
  {
    name: "React Developer",
    imgPath: reactLogo,
  },
  {
    name: "Python Developer",
    imgPath: pythonLogo,
  },
  {
    name: "Backend Developer",
    imgPath: nodeLogo,
  },
  {
    name: "Interactive Developer",
    imgPath: threeLogo,
  },
  {
    name: "Project Manager",
    imgPath: gitLogo,
  },
];

type TechStackIcon = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
};

const techStackIcons: TechStackIcon[] = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

type ExpCard = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

const expCards: ExpCard[] = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: exp1Png,
    logoPath: logo1Png,
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: exp2Png,
    logoPath: logo2Png,
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian's work on Appwrite's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: exp3Png,
    logoPath: logo3Png,
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

type ExpLogo = {
  name: string;
  imgPath: string;
};

const expLogos: ExpLogo[] = [
  {
    name: "React",
    imgPath: reactLogo,
  },
  {
    name: "Python",
    imgPath: pythonLogo,
  },
  {
    name: "Backend",
    imgPath: nodeLogo,
  },
];

type Testimonial = {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: client1Png,
  },
  {
    name: "Ronald Richards",
    mentions: "@ronaldrichards",
    review:
      "Working with Adrian was a game-changer for our project. His attention to detail and commitment to quality were evident throughout the development process. Highly recommended!",
    imgPath: client2Png,
  },
  {
    name: "Kristin Watson",
    mentions: "@kristinwatson",
    review:
      "Adrian consistently delivered high-quality code and innovative solutions. He is a valuable asset to any team, bringing both technical skill and a collaborative spirit.",
    imgPath: client3Png,
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: client5Png,
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    imgPath: client4Png,
  },
];

type SocialImg = {
  name: string;
  imgPath: string;
};

const socialImgs: SocialImg[] = [
  {
    name: "Facebook",
    imgPath: fbPng,
  },
  {
    name: "Instagram",
    imgPath: instaPng,
  },
  {
    name: "LinkedIn",
    imgPath: linkedinPng,
  },
  {
    name: "Twitter",
    imgPath: xPng,
  },
];

export {
  abilities,
  counterItems,
  expCards,
  expLogos,
  logoIconsList,
  navLinks,
  socialImgs,
  techStackIcons,
  techStackImgs,
  testimonials,
  words,
};

export type {
  Ability,
  CounterItem,
  ExpCard,
  ExpLogo,
  LogoIcon,
  NavLink,
  SocialImg,
  TechStackIcon,
  TechStackImg,
  Testimonial,
  Word,
};
