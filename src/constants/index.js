import {
  deevia,
  portfolio,
  whatevernotes_mobile,
  predectcovid,
  vchat,
  transferfi,
  unizap,
  devdribble_ai,
  whatevernotes_web,
  vcs,
  bitsindri,
  authservice
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiPostman,
  SiGit,
  SiMysql,
  SiVite,
  SiFlask,
  SiOpenai,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiBitbucket,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiWhatsapp,
  SiSocketdotio,
  SiScikitlearn,
  SiCss3,
  SiFigma,
  SiTypescript,
  SiTypeorm,
  SiEjs
} from "react-icons/si";

import {
  FaAws,
} from "react-icons/fa";

import { DiCss3, DiJava, DiRedis, DiSqllite, DiVisualstudio } from "react-icons/di";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";

export const resumeLink = "https://drive.google.com/file/d/13kE3iHWGHE9j4rf6t5sYHCEWoHjgJXUp/view?usp=sharing";
export const repoLink = "https://github.com/pankajk787/";

export const callToAction = "https://www.linkedin.com/in/pankajk787/";

export const  navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: bitsindri,
    title: "Birsa Institute of Technology, Sindri",
    degree: "Bachelor of Technology",
    duration: "August 2017 - May 2021",
    content1: "Major: Computer Science and Engineering",
    // content2: "",
  },
  {
    id: "education-2",
    icon: vcs,
    title: "Vivekanada Central School, Hazaribagh",
    degree: "Senior Secondary Education",
    duration: "May 2014 - June 2016",
    content1: "Stream: Science(PCM)",
    // content2: ""
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
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
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-12",
        icon: SiExpress ,
        name: "Express.js",
      },
      {
        id: "f-12",
        icon: SiNextdotjs ,
        name: "Next.js",
      },
      {
        id: "f-122",
        icon: SiFlask ,
        name: "Flask",
      },
      {
        id: "f-43",
        icon: SiRedux,
        name: "Redux",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
      // {
      //   id: "f-7",
      //   icon: FaReact,
      //   name: "React Native",
      // },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        id: "t-3",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-4",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-4",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-5",
        icon: FaAws,
        name: "AWS",
      },
      {
        id: "t-4",
        icon: DiVisualstudio,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: SiBitbucket,
        name: "Bitbucket",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-10",
        icon: SiFigma,
        name: "Figma",
      }
    ],
  },
];

export const experiences = [
  {
    organisation: "Unizap",
    logo: unizap,
    link: "https://unizap.ai/",
    positions: [
      {
        title: "Software Engineer",
        duration: "June 2023 - Present",
        content: [
          {
            text: "Contributed in building scalable solutions and features for the Unizap Seller Portal and Customer facing storefront.",
            link: "https://partner.unizap.ai/"
          },
          {
            text: "Wrote RESTful APIs in Express.js for file uploads and data processing to AWS S3 and Google Cloud Storage.",
            link: ""
          },
          {
            text: "Built applications using ReactJS and Firebase Realtime Database to facilitate real-time communication between customers and sellers.",
            link: ""
          },
          {
            text: "Pioneered a secure API shadowing methodology to conceal API URLs during client-side calls, adding an extra layer of security against potential vulnerabilities",
            link: ""
          },
          {
            text: "Streamlined state management by migrating Redux Saga codebase to Redux Toolkit with RTK Query, boosting efficiency and caching performance.",
          }
        ],
      },
    ],
  },
  {
    organisation: "Deevia Software Pvt. Ltd., India",
    logo: deevia,
    link: "https://www.deevia.pw/",
    positions: [
      {
        title: "Software Engineer",
        duration: "Apr 2022 - June 2023",
        content: [
          {
            text: "Engineered a cutting-edge frontend for a computer vision-based intrusion detection system using ReactJS and TypeScript, seamlessly integrating with a Flask WebSocket server to deliver real-time image analysis for enhanced safety in steel factory.",
            link: "",
          },
          {
            text: "Developed the frontend for a robust conveyor belt defect detection application, leveraging deep learning models to identify critical issues in steel manufacturing processes, ensuring efficient maintenance, and reducing costs and manpowe",
            link: "",
          },
        ],
      },
      {
        title: "Associate Software Engineer",
        duration: "Sep 2021 - Apr 2022",
        content: [
          {
            text: "Wrote Websocket connection code in Flask to facilitate real-time communication between the frontend and the backend for a computer vision-based intrusion detection system.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer Intern",
        duration: "Jun 2021 - Oct 2021",
        content: [
          {
            text: "Enhanced the organization's website with a modern and user-friendly interface.",
            link: "https://deevia.pw/",
          },
        ],
      },
    ],
  }
];

export const projects = [
  {
    id: "project-1",
    title: "DevScribble",
    github: "https://github.com/pankajk787/dev-scribble/",
    link: "https://dev-scribble.onrender.com/",
    image: devdribble_ai,
    content:
      "A realtime collaborative platform enabling users to code, draw on canvas, and communicate via text and audio in shared rooms, \
      built to streamline and simplify the challenges of virtual technical interviews.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "ExpressJS"
      },
      {
        id: "icon-5",
        icon: SiSocketdotio,
        name: "Socket.io"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-4",
        icon: DiRedis,
        name: "Redis"
      },
    ],
  },
  {
    id: "project-7",
    title: "Trans-fi",
    github: "https://github.com/pankajk787/trans-fi",
    link: "https://trans-fi.onrender.com/",
    image: transferfi,
    content: "A seamless file-sharing application that enables users to upload, share via email or links, and download files effortlessly. \
    A scheduled cron job that automatically deletes expired files from AWS S3 every 24 hours to ensure optimal storage usage and data hygiene.",
    stack: [
      {
        id: "icon-1",
        icon: SiExpress,
        name: "ExpressJS"
      },
      {
        id: "icon-2",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Vanilla JavaScript"
      },
      {
        id: "icon-4",
        icon: SiEjs,
        name: "EJS"
      },
      {
        id: "icon-5",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-6",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-7",
        icon: FaAws,
        name: "AWS S3"
      }
    ],
  },
  {
    id: "project-4",
    title: "PredectCOVID",
    github: "https://github.com/pankajk787/predect-covid/",
    link: "https://youtu.be/qaKSGsFPQqM/",
    image: predectcovid,
    content:
      "A powerful machine learning model that predicts a patient's likelihood of COVID-19 infection based on symptoms, coupled with real-time tracking of COVID data across India for up-to-date insights.",
    stack: [
      {
        id: "icon-1",
        icon: SiFlask,
        name: "Flask"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: DiSqllite,
        name: "SQLLite"
      },
      {
        id: "icon-4",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-5",
        icon: SiScikitlearn ,
        name: "Scikit-learn"
      },
    ],
  },
  {
    id: "project-2",
    title: "WhateverNotes - Web App",
    github: "https://github.com/pankajk787/whatevernotes-web-app/",
    link: "#",
    image: whatevernotes_web,
    content:
      "Web app for effortlessly saving, organizing, and accessing your notes anytime, anywhere with ease!",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "ExpressJS"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      }
    ],
  },
  {
    id: "project-3",
    title: "WhateverNotes - Mobile App",
    github: "https://github.com/pankajk787/whatevernotes-mobile-app",
    link: "",
    image: whatevernotes_mobile,
    content:
      "Mobile app for effortlessly saving, organizing, and accessing your notes anytime, anywhere with ease!",
    stack: [
      {
        id: "icon-1",
        icon: TbBrandReactNative,
        name: "React Native"
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "ExpressJS"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDB"
      }
    ],
  },
  {
    id: "project-5",
    title: "V-Chat",
    github: "https://github.com/pankajk787/v-chat",
    link: "",
    image: vchat,
    content:
      "A dynamic and interactive room-based chat application where users can seamlessly connect, join rooms, and engage in real-time conversations.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "ExpressJS"
      },
      {
        id: "icon-3",
        icon: SiSocketdotio,
        name: "Socket.io"
      },
      {
        id: "icon-4",
        icon: SiCss3,
        name: "CSS"
      },
    ],
  },
  {
    id: "project-6",
    title: "Auth Service - A scalable authentication service",
    github: "",
    link: "https://github.com/pankajk787/pizza-app-auth-service/",
    image: authservice,
    content:
      "A scalable and dynamic JWT authentication microservice.",
    stack: [
      {
        id: "icon-1",
        icon: SiExpress,
        name: "ExpressJS"
      },
      {
        id: "icon-2",
        icon: SiPostgresql,
        name: "PostgreSQL"
      },
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "TypeScript"
      },
      {
        id: "icon-3",
        icon: SiTypeorm,
        name: "TypeORM"
      },
    ],
  },
  {
    id: "project-8",
    title: "Portfolio",
    github: "",
    link: "",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-4",
        icon: TbBrandFramerMotion,
        name: "Framer Motion"
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
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
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
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
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

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

// Links to social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/pankajk787/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/pankajk787/",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:pankajkumarhzb787@gmail.com",
  },
  {
    id: "social-media-4",
    icon: SiWhatsapp,
    link: "https://wa.me/917870555297",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/pankaj.kumar.xiv.viii",
  },
];

// Professional summary
export const aboutMe = {
    name: "Pankaj Kumar",
    githubUsername: 'pankajk787',
    tagLine: "Software Engineer | Web Developer",
    intro: "Software Developer from India who is either busy in learning or pondering over the next big idea."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

export const includedRepos = [];
