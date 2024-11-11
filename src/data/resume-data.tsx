import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon,MediumIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Arhaan Siddiquee",
  initials: "AS",
  location: "Chennai,India",
  locationLink:
    "https://www.google.com/maps/place/SRM+Institute+of+Science+and+Technology/@12.823033,80.0418411,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f712b82a78d9:0xfdb944a3aee53831!8m2!3d12.823033!4d80.044416!16zL20vMGJwNzl6?entry=ttu",
  about:
    "I'm a second-year Computer Science and Engineering student at SRM KTR, passionate about technology, problem-solving, and making an impact. Feel free to explore my work!",
  summary: "I'm an enthusiastic and driven learner, always committed to self-improvement and embracing new challenges for both personal and professional growth. With a strong passion for learning and a dedication to excellence, I actively seek opportunities to sharpen my skills and broaden my knowledge through diverse projects and collaborations.",
  avatarUrl:
    "https://raw.githubusercontent.com/Arhaan-Siddiquee/Arhaan-Siddiquee/refs/heads/main/Me.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "siddiqueearhaan@gmail.com",
    tel: "+91-7070000629",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Arhaan-Siddiquee",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arhaansiddiquee/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ArhaanSiddique0",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "DAV Network of Schools",
      degree:
        "Matriculation and Intermediate",
      start: "2020",
      end: "2023",
    },
    {
      school: "SRM Institute of Science and Technology",
      degree:
        "B.Tech-Computer Science and Engineering",
      start: "2023",
      end: "2027",
    },
  ],
  work: [
    {
      company: "Niramaya",
      link: "https://niramaya-bay.vercel.app/",
      badges: ["On-Site"],
      title: "Frontend Developer",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Currently interning at a health tourism-focused SaaS startup, working with a dynamic team to develop innovative solutions that streamline health tourism services. Contributing to various aspects of the platform, including user experience, feature integration, and ensuring the smooth interaction between healthcare providers and patients. Collaborating on building scalable, user-friendly systems to enhance the overall experience.",
    },
    {
      company: "CODENEX CLUB SRMIST",
      link: "https://srmsigkdd.vercel.app/",
      badges: ["Club/Community"],
      title: "Technical Team Member",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Serving as a Web Developer for CodeNex Club, where I am responsible for designing and developing the club’s official website. Working closely with the team to create a seamless user experience, ensuring the website is both visually appealing and functional. Involved in integrating features such as event calendars, member resources, and other interactive elements to enhance the club's online presence and engagement.",
    },
    {
      company: "Founders Club",
      link: "https://github.com/founder-srm",
      badges: ["Club/Community"],
      title: "Associate Team Lead",
      logo: JojoMobileLogo,
      start: "2023",
      end: "Present",
      description:
        "Serving as the Associate Team Lead and UI/UX Creative Designer for the Entrepreneur Club at the university. Led the design and development of various technical events, workshops, and hackathons. Played a key role in the Foundathon, contributing both creatively and strategically to the event's success.",
    },
    {
      company: "HacktoberFest",
      link: "https://hacktoberfest.com/",
      badges: ["Open Source"],
      title: "Contributor",
      logo: ClevertechLogo,
      start: "2024",
      end: "Present",
      description:
        "Contributed to open-source projects during HacktoberFest by improving documentation, fixing bugs, and adding features. Collaborated with the global developer community to enhance project functionality and gained experience with version control and pull requests.",
    },
    {
      company: "dBug Labs",
      link: "https://github.com/dBug-Labs",
      badges: ["Club/Community"],
      title: "Creative Designer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Serving as a Creative Member and UI/UX Designer for the Entrepreneur Club at the university. Contributed to the design and development of the club's visual identity and digital presence, ensuring a user-friendly and engaging experience.",
    },
  
    
  ],
  skills: [
    "Python",
    "C/C++",
    "Java",
    "TypeScript",
    "ReactJs",
    "MySQL",
    "NextJs",
    "MongoDB",
    "Figma",
    "UI/UX",
    "JavaScript",
    "VanillaCSS",
    "SCSS",
    "php",
    "TailwindCss",
    "Git",
    "HTML",
  ],
  projects: [
    {
      title: "Niramaya",
      techStack: [
        "Start-up",
        "Frontend","ReactJs",
        "TailwindCss",
        "Health Tourism",
        "User Experience",
        "User Interface",
      ],
      description: "Health tourism-focused SaaS startup, working with a dynamic team to develop innovative solutions",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://niramaya-bay.vercel.app/",
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
      title: "SpeakToScript.io",
      techStack: [
        "HTML",
        "CSS",
        "JS",
        "Flask",
        "Bootstrap",
        "Jsonify",
        "Routing",
      ],
      description: "A simple web application for converting audio files to text using speech recognition.",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/Arhaan-Siddiquee/SpeakToScript.io",
      },
    },{
      title: "KorvaqScrip",
      techStack: [
        "Token",
        "JavaScript",
        "Parcer",
        "Lexer",
        "Packaging",
        "Frontend",
        "ReactJs",
      ],
      description: "A programming language that is simple to learn and easy to use due to its simple syntax.",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/Arhaan-Siddiquee/KorvaqScrip",
      },
    },{
      title: "FileConverter",
      techStack: [
        "Python",
        "JavaScript",
        "TailwindCSS",
        "Html",
        "UI/UX",
        "Flask",
      ],
      description: "A file converting web app made using Python with micro web framework Flask.",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/Arhaan-Siddiquee/FileConverter",
      },
    },{
      title: "CorpCarbon",
      techStack: [
        "Java",
        "JFrame",
        "Database Integration",
        "MySQL",
        "UI/UX",
        "Team Project",
      ],
      description: "The Corp Carbon Project is a tool designed to track and monitor the carbon footprint generated by a company.",
      logo: ConsultlyLogo,
      link: {
        label: "github",
        href: "https://github.com/Arhaan-Siddiquee/java-carbon-calculator",
      },
    },{
      title: "Purrfect",
      techStack: [
        "TailwindCSS",
        "ReactJs",
        "Vercel",
        "FullStack",
        "MongoDb",
      ],
      description: "Purrfect is a pet adoption platform designed to help users find their ideal furry companions from nearby shelters.",
      link: {
        label: "github",
        href: "https://github.com/Arhaan-Siddiquee/Purrfect",
      },
    },
  ],
} as const;
