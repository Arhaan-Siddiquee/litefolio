import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon,MediumIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Aditya Verma",
  initials: "AV",
  location: "Chennai,India",
  locationLink:
    "https://www.google.com/maps/place/SRM+Institute+of+Science+and+Technology/@12.823033,80.0418411,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f712b82a78d9:0xfdb944a3aee53831!8m2!3d12.823033!4d80.044416!16zL20vMGJwNzl6?entry=ttu",
  about:
    "I’m a third year student at SRM KTR, majoring in Computer Science and Engineering. Feel free to explore.",
  summary: "I'm an enthusiastic and driven student dedicated to continuous self-improvement and seizing new opportunities for personal and professional growth. With a fervent passion for learning and a commitment to excellence, I consistently seek to refine my skills and broaden my horizons through various projects and collaborations.",
  avatarUrl:
    "https://github.com/ADITYAVOFFICIAL/ADITYAVOFFICIAL/blob/main/pics/adityav.png?raw=true",
  personalWebsiteUrl: "",
  contact: {
    email: "av4923@srmist.edu.in",
    tel: "private",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ADITYAVOFFICIAL",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditya-verma-real/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ADITYAVOFFICIAL",
        icon: XIcon,
      },
      {
        name: "Medium",
        url: "https://medium.com/@adityaver/",
        icon: MediumIcon,
      },
    ],
  },
  education: [
    {
      school: "SRM Institute of Science and Technology",
      degree:
        "B.Tech-Computer Science and Engineering with specialization in Big Data Analytics",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "SRM Institute of Science and Technology",
      link: "https://www.linkedin.com/in/aditya-verma-real/details/experience/",
      badges: ["On-Campus"],
      title: "Undergraduate Researcher",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Working under Academic Advisor Dr. Hemavathi on Phenotyping on crop for extreme climate conditions using CV and IOT and under Dr. Kalpana for Leaf Disease detection using CV",
    },
    {
      company: "SRMIST KTR ACM SIGKDD Student Chapter",
      link: "https://srmsigkdd.vercel.app/",
      badges: ["Club/Community"],
      title: "Chairperson",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Emendo is a startup based in California, USA. Emendo aims to revolutionalize renovation and construction work. Worked on a serverless application and AWS to build AI based sollution to catrer the clients need.",
    },
    {
      company: "Data Science Community SRM",
      link: "dscommunity.in",
      badges: ["Club/Community"],
      title: "Member",
      logo: JojoMobileLogo,
      start: "2022",
      end: "Present",
      description:
        "Serving as a member of one the the most prestigious technical club in the university. Organised a number of technical events,workshops and hackathons.Team lead on SRM Tech Expo'23",
    },
    {
      company: "Alteryx - AICTE",
      link: "https://www.credly.com/badges/f2f37780-e24b-441c-a84f-57a5222cedff/public_url",
      badges: ["Remote"],
      title: "Data Analytic Process Automation Intern",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description:
        "I completed my internship in data analytics and automation with Alteryx USA under the AICTE & Eduskills cohort 6. During this internship, I learned how to work with data and use proprietary Alteryx tools.",
    },
    {
      company: "Next Tech Lab",
      link: "https://www.nexttechlab.in",
      badges: ["Research Lab"],
      title: "Associate - McCarthy Lab",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "part of the McCarthy Lab at Nexttech Lab of SRMIST, learning and working in the field of ML and AI.",
    },
    
  ],
  skills: [
    "Python",
    "C/C++",
    "MS Power BI",
    "Tensorflow",
    "Scikit-learn",
    "SAS",
    "Pytorch",
    "Flask",
    "MySQL",
    "MongoDB",
    "LLM and GenAI",
    "ReactJS",
    "JavaScript",
  ],
  projects: [
    {
      title: "Leaf Disease Detection",
      techStack: [
        "SRMIST Research",
        "Dr. Kalpana AV",
        "Python","CNN",
        "GoogleNetV3",
        "ResNet34|50",
        "EfficientNet",
        "Deep Learning",
      ],
      description: "Robust and efficient model to detect diseases in plants",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/ADITYAVOFFICIAL/Leaf-Disease-Prediction",
      },
    },
    // {
    //   title: "Plant phenotyping for extreme climate resistance using CV and IoT",
    //   techStack: [
    //     "Winner-Standard Chartered hackathon",
    //     "WebRTC",
    //     "Next.js",
    //     "Python",
    //     "Node/Express",
    //     "WebRTC",
    //     "VGG",
    //     "tensorFlow",
    //   ],
    //   description: "Ongoing research project",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "github",
    //     href: "https://github.com/ADITYAVOFFICIAL",
    //   },
    // },
    {
      title: "DermaScan - Skin Cancer Detection",
      techStack: [
        "HTML",
        "CSS",
        "JS",
        "Scikit-learn",
        "TensorFlow",
        "OpenCV",
        "Flask",
        "Bootstrap",
      ],
      description: "Full-stack web app with MobileNetV2-based skin lesion classifier using Harvard's HAM10000 Dataset",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/ADITYAVOFFICIAL/Skin-Disease-Classifier",
      },
    },{
      title: "Conjexure | Stock Market",
      techStack: [
        "Python",
        "LSTM 4 layer",
        "OpenCV",
        "Yahoo Finance API",
        "Streamlit",
        "RNN",
        "TensorFlow",
      ],
      description: "Conjexure, a machine learning web app, forecasts stock prices using 4 layer LSTM models and CNN",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/ADITYAVOFFICIAL/Conjexure-A-Web-App-for-Stock-Market-Forecasting",
      },
    },{
      title: "SRM KTR ACM SIGKDD Student Chapter Official Webstie",
      techStack: [
        "ReactJS",
        "Bootstrap",
        "TailwindCSS",
        "MongoDB",
        "FormSpree",
        "Solo Project",
      ],
      description: "Official website using ReactJS",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/ADITYAVOFFICIAL/Official_Website",
      },
    },{
      title: "Fortuna",
      techStack: [
        "React.js",
        "TailwindCSS",
        "Next.js",
        "Solidity",
        "NodeJs",
        "Team Mavericks",
        "Layer 3.0",
      ],
      description: "Redefines gifting by seamlessly blending tradition and technology [Blockchain].",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/ADITYAVOFFICIAL/fortuna",
      },
    },{
      title: "Archive - School Meeting Portal",
      techStack: [
        "HTML",
        "CSS",
        "JS",
        "NETLIFY",
        "CODE FOR GOOD",
        "40+ Users",
      ],
      description: "Website developed for NCS Mumbai class lectures amid the COVID-19 pandemic.",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/ADITYAVOFFICIAL/linko",
      },
    },
  ],
} as const;
