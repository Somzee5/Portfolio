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
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

export const resumeLink =
  "https://drive.google.com/file/d/1vx-QuWY1mJK9QXuzVbCVeUS_Ia9rCOd5/view?usp=sharing";
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
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
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
    title: "Kosh SDK",
    github: "https://github.com/mittal-parth/kosh-sdk",
    link: "https://ethglobal.com/showcase/kosh-hk3mp",
    image: kosh,
    content:
      "Simple and secure way to interact with remote MCP Servers in Trusted Execution Environments (TEEs). Built at ETHGlobal Trifecta Hackathon.",
    stack: [
      {
        id: "icon-2",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
    ],
  },
  {
    id: "project-3",
    title: "Polkadot Dev CLI",
    github: "https://github.com/mittal-parth/polkadot-dev-cli",
    link: "https://crates.io/crates/polkadot-dev-cli",
    image: polkadot_dev_cli,
    content:
      "CLI tool for Polkadot developers bundling linting, formatting, and version management. cargo install polkadot-dev-cli.",
    stack: [
      {
        id: "icon-1",
        icon: FaRust,
        name: "Rust",
      },
    ],
  },
  {
    id: "project-10",
    title: "Portfolio",
    github: "https://github.com/mittal-parth/personal-portfolio",
    link: "https://parthmittal.netlify.app/",
    image: portfolio,
    content: "Open source developer portfolio template with modern UI/UX. 125+ stars on GitHub.",
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

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/mittal-parth",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/mittal-parth",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:mittalparth22@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/mittalparth_",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/mittalparth_",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Parth Mittal",
  githubUsername: "mittal-parth",
  tagLine:
    "MTS-1 @Oracle | ex-Tech Lead @IRIS,NITK | ETHIndia'22,24 Winner | 9x Hackathon Winner | NITK'24 | PBA-5",
  intro:
    "Software Developer from India who is either busy improving his craft or pondering over the next big idea.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
