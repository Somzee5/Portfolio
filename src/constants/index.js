import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  globalAi,
  khoj,
  kosh,
  polkadot_dev_cli,
  wce,
  nkvc,
  cube,
  volley1,
  volley2,
} from "../assets";


import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiClaude,
  SiOracle,
  SiRender,
  SiCloudinary,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiSqlite,
  SiOpencv,
  SiZoom,
} from "react-icons/si";

import { FaHardHat, FaRust, FaCube, FaVolleyballBall } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

export const resumeLink =
  "https://drive.google.com/file/d/17mXDB_i12ANCdMwA7cwBurFplMPpCfkK/view";
export const repoLink = "https://github.com/Somzee5";

export const callToAction = "https://www.linkedin.com/in/soham-patil-344aa1264/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "hobbies",
    title: "Hobbies",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: wce,
    title: "Walchand College of Engineering, Sangli",
    degree: "Bachelor of Technology",
    duration: "2022-2026",
    content1: "Computer Science and Engineering",
  },
  {
    id: "education-2",
    icon: nkvc,
    title: "Nav Krishna Valley Junior College, Kupwad",
    degree: "Higher Secondary School",
    duration: "2020-2022",
  },
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethindia,
    event: "BitNBuild 2024 | GDSC-CRCE Bandra,Mumbai",
    position: "Finalist",
    content1: "Top 10 Overall Finalists",
    content2: "State qualifers among 103 teams",
    article:
      "https://www.linkedin.com/posts/soham-patil-344aa1264_hackathon-bitnbuild-thecodecrew-activity-7257093370861268993-Zaxy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDx6qQBXoQTbcrLBCC3D_5QU-RAEQbdZ50",
    project: "https://github.com/Somzee5/Scorezilla",
  },
  {
    id: "a-2",
    icon: ethglobal,
    event: "Codecrush | A competitive coding competition at TechFusion-2024",
    position: "Winner",
    content1: "Solved 4/6 questions under timebound",
    content2: "Conducted on hackerEarth",
    article:
      "https://www.linkedin.com/posts/soham-patil-344aa1264_techfusion2k24-problemsolving-hackerearth-activity-7251272290884050944-tvwH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDx6qQBXoQTbcrLBCC3D_5QU-RAEQbdZ50",
  },
  {
    id: "a-3",
    icon: polkadot,
    event: "Compile It | A reverse-coding competition",
    position: "Runner Up",
    content1:
      "A reverse-coding competition where we have to code from just inputs and outputs",
    content2: "Was able to solve 4/6 questions under timebound",
    content3: "Partnered with Swanand Mahabal",
    article:
      "https://www.linkedin.com/posts/soham-patil-344aa1264_codingcompetition-reversecoding-debugging-activity-7252733250765299713-62uD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDx6qQBXoQTbcrLBCC3D_5QU-RAEQbdZ50",
  },
];

// Add your software development skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-2",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-3",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "f-4",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "f-5",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-6",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-4",
        icon: SiSqlite,
        name: "SQLite",
      },
      {
        id: "t-5",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-6",
        icon: SiOpencv,
        name: "OpenCV",
      },
      {
        id: "t-7",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-8",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-9",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-10",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-11",
        icon: SiRender,
        name: "Render",
      },
      {
        id: "t-12",
        icon: SiCloudinary,
        name: "Cloudinary",
      },
    ],
  },
];

// Experience section removed - keeping only skills section

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "DripSync",
    github: "https://github.com/Somzee5/DripSync_Repo",
    image: khoj,
    content:
      "AI-powered outfit recommendations with virtual try-on and skin-tone based personalization",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "icon-2",
        icon: SiSqlite,
        name: "SQLite",
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-4",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-5",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "icon-6",
        icon: SiOpencv,
        name: "OpenCV",
      },
    ],
  },
  {
    id: "project-2",
    title: "Medico",
    github: "https://github.com/Somzee5/Medico",
    link: "https://medico-imgg.onrender.com/",
    image: kosh,
    content:
      "Medico is a unified digital healthcare platform designed to simplify and enhance the patient experience. It enables users to book doctor appointments with instant Zoom consultations, find and book ambulances with real-time tracking via Google Maps, and securely manage medical records and prescription --> all in one place.",
    stack: [
      {
        id: "icon-2",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "pl-2",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "pl-3",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "pl-2",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "pl-2",
        icon: SiZoom,
        name: "Zoom",
      },
      {
        id: "pl-2",
        icon: SiGooglemaps,
        name: "Google Maps",
      },
    ],
  },
  {
    id: "project-3",
    title: "ScoreZilla",
    github: "https://github.com/Somzee5/Scorezilla",
    image: polkadot_dev_cli,
    content:
      "Scorezilla — A modern web platform for managing sports tournaments with real-time leaderboards, QR-based team joining, automated certificates, and sponsor analytics.",
    stack: [
      {
        id: "icon-2",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "pl-2",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "pl-3",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "pl-2",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "pl-2",
        icon: SiGooglemaps,
        name: "Google Maps",
      },
      {
        id: "pl-2",
        icon: SiCloudinary,
        name: "Cloudinary",
      }
    ],
  },
  {
    id: "project-4",
    title: "Vlogify",
    github: "https://github.com/Somzee5/Vlogify",
    image: devfolio,
    content:
      "Scorezilla — A modern web platform for managing sports tournaments with real-time leaderboards, QR-based team joining, automated certificates, and sponsor analytics.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "icon-2",
        icon: SiSqlite,
        name: "SQLite",
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "icon-4",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-5",
        icon: SiPostman,
        name: "Postman",
      },
    ],
  },
  {
    id: "project-10",
    title: "Portfolio",
    github: "https://github.com/Somzee5/Portfolio",
    link: "https://sohamportfolio.onrender.com/",
    image: portfolio,
    content: "Personal Portfolio Website",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out your hobbies and interests
export const hobbies = [
  {
    id: 1,
    title: "Rubik's Cube",
    icon: FaCube,
    image: cube,
    description: "Mastered solving diverse Rubik's Cube variants with descent speed",
    details: [
      "Proficient in solving various cube sizes (2x2, 3x3, 4x4)",
      "Competitive solving with consistent sub-30 second times",
      "Knowledge of advanced solving methods and algorithms",
    ],
  },
  {
    id: 2,
    title: "Sports Participation",
    icon: FaVolleyballBall,
    image: volley1,
    description: "Actively competed in college volleyball and cricket tournaments",
    details: [
      "Represented college in inter-college volleyball tournaments",
      "Participated in cricket tournaments at district level",
      "Maintained physical fitness through regular sports activities",
    ],
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/soham-patil-344aa1264/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/Somzee5",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:sohampatil1665@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://x.com/Sohamzee5",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/sohamp_16",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Soham Patil",
  githubUsername: "Somzee5",
  tagLine:
    "Computer Science Student | Web Developer | AI Enthusiast | Undergraduate",
  intro:
    "Computer Science student from India passionate about web development, AI, and creating innovative solutions.",
};

// Open Source section removed
