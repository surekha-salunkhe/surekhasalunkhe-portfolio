import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hello! I am a passionate computer science enthusiast and have completed my Master from Pace University - Seidenberg School Of Computer Science and Information Systems (September 2022 - May 2024). My academic journey has allowed me to dive deep into Software Development, Mobile and Web Development, Game Programming, AI, and Python. In addition to my technical skills, I have a love for sketching and arts which fuels my creativity and inspires my projects in game and web development.`;

export const ABOUT_TEXT = `I am on a mission to explore dynamic opportunities in software, web, and game development, especially in the realm of AI. I aim to collaborate on projects that are not only innovative but also push the boundaries of technology and creativity. I'm excited about the potential to create solutions that can make a real impact!`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 - Present",
    role: "Software Engineer",
    company: "ShopTaki",
    description: ["Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js.",
                  "Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines."],
    technologies: ["Figma", "React", "Javascript", "UI/UX"],
  },
  {
    year: "Oct 2023 - Dec 2023",
    role: "Artificial Intelligence/ Machine Learning (AI/ ML) Intern",
    company: "Keeper AI",
    description: ["Researched improving the accuracy of personality prediction using sentiment analysis and NLP techniques.",
                  "Converted algorithms from papers into python code to extract user comment’s sentiments."],
    technologies: ["NLP", "ML","Python"],
  },
  {
    year: "Jun 2023 - Sep 2023",
    role: "Software Developer Intern",
    company: "ShopTaki",
    description: ["Developed UI components in React, and JavaScript and facilitated efficient cross-component communication and state sharing with Redux.",
                  "Created interactive and user-friendly prototypes using Figma, aligning designs with user needs, stakeholders and business goals."],
    technologies: ["Figma", "React","Javascript", "UI/UX"],
  },
  {
    year: "Sep 2020 - Jul 2022",
    role: "Senior Software Developer",
    company: "Infosys Ltd",
    description: ["Engineered a scalable route optimization tool for the distribution team using application development Java (Backend) and SAP Fiori (Frontend), improving route planning efficiency by 30%.",
                  "Leveraged AWS (EC2, S3, DynamoDB) to scale the tool, enabling seamless performance to handle millions of users.",
                  "Designed and created a secure authentication and authorization system for a large-scale eCommerce platform, using OAuth 2.0, JSON Web Tokens, enabling seamless sign-ins for 80K daily users.",
                  "Defined robust development practices, strategy, reducing bugs by 20% through Agile methodologies, Jira, rigorous code reviews, CI/CD pipelines, unit tests, and version control systems like GIT."],
    technologies: ["SAP FIORI", "SAP ABAP","Javascript", "Java", "Python", "AWS", "GIT","Agile Methodology"],
  },
  {
    year: "Jan 2019 - Sep 2020",
    role: "Software Developer",
    company: "Infosys Ltd",
    description: ["Played a key role in developing a scalable and reusable component library with React.js, achieving a 30% increase in development efficiency. Utilized Bootstrap for styling, and Confluence for ensuring design compliance and testing UI components in isolation.",
                  "Successfully transitioned the RUN (HTML, CSS, JavaScript) project to RUN MOD (React JS, Node JS), enhancing scalability and reducing response time by 15%.  Leveraged AWS (EC2, S3, DynamoDB) to scale the tool, enabling seamless performance to handle millions of users.",
                  "Initiated CI/CD pipeline with GitHub Actions to enable automated testing and integration reducing deployment times by 70%.",
                  "Built and managed over 30+ APIs, end-to-end development from ideation to production with testing and maintained documentation."],
    technologies: ["SAP FIORI", "HTML","CSS", "Javascript", "Java", "Python", "React"],
  },
  
];

export const PROJECTS = [
  {
    title: "Healthify",
    image: project1,
    description:
      "A fully functional healthcare management website with features like patient registration, appointment booking, payment, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MySQL", "AWS", "GCP", "Figma"],
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  // },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "2127 John F Kennedy blvd, Jersey City, New Jersey, 07305",
  phoneNo: "+1 484-319-2512",
  email: "smsurekha19@gmail.com"
};
