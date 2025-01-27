import { RiReactjsLine } from "react-icons/ri";
import { FaJava, FaNodeJs, FaAws } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiVite, SiBootstrap, SiTailwindcss, SiNextdotjs, 
SiPython, SiMysql, SiGooglecloud, SiCss3, SiHtml5, SiCplusplus, SiR, SiPhp,
SiPostgresql, SiMongodb, SiAmazondynamodb, SiJenkins, SiDocker, SiKubernetes} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "motion/react";
import figma from "../assets/figma.png";
import springboot from "../assets/springboot.png";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
    
    const techCategories = [
        {
        category: "Languages",
        items: [
            { name: "Python", icon: <SiPython className="text-yellow-500 text-4xl" /> },
            { name: "Java", icon: <FaJava className="text-red-600 text-4xl" /> },
            { name: "C++", icon: <SiCplusplus className="text-blue-600 text-4xl" /> },
            { name: "C#", icon: <TbBrandCSharp className="text-purple-600 text-4xl" /> },
            { name: "SQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
            { name: "R", icon: <SiR className="text-blue-400 text-4xl" /> },
            { name: "PHP", icon: <SiPhp className="text-indigo-600 text-4xl" /> },
        ],
        },
        {
        category: "Frontend",
        items: [
            { name: "React", icon: <RiReactjsLine className="text-4xl text-cyan-400" /> },
            { name: "HTML", icon: <SiHtml5 className="text-4xl text-orange-500" /> },
            { name: "CSS", icon: <SiCss3 className="text-4xl text-blue-600" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl" /> },
            { name: "Vite", icon: <SiVite className="text-purple-500 text-4xl" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700 text-4xl" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
            { name: "Figma", icon: <img src={figma} alt="Figma" className="w-9 h-9" /> },
        ],
        },
        {
        category: "Databases",
        items: [
            { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-500" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-4xl" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
            { name: "DynamoDB", icon: <SiAmazondynamodb className="text-blue-400 text-4xl" /> },
        ],
        },
        {
        category: "Frameworks",
        items: [
            { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-black" /> },
            { name: "React.js", icon: <TbBrandReactNative className="text-4xl text-cyan-400" /> },
            { name: "Spring Boot", icon: <img src={springboot} alt="Spring Boot" className="w-9 h-9" /> },
        ],
        },
        {
        category: "Cloud Platforms",
        items: [
            { name: "AWS", icon: <FaAws className="text-orange-500 text-4xl" />},
            { name: "GCP", icon: <SiGooglecloud className="text-blue-600 text-4xl" /> },
            { name: "Jenkins", icon: <SiJenkins className="text-red-500 text-4xl" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-400 text-4xl" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 text-4xl" /> },
        ],
        },
        // {
        // category: "Full-Stack Development (Practices and Tools)",
        // items: [
        //     { name: "- Restful APIs" },{ name: "- Microservices"},{ name: "- CI/CD Pipiline" },{ name: "- Automation" }, { name: "- Monitoring & Logging"},
        //     { name: "- Prototyping" },{ name: "- Wireframing"},{ name: "- User Flow Design" },{ name: "- Usability Testing"},
        //     { name: "- Unit/ System/ Integration Testing" },{ name: "- A/B Testing"},{ name: "- Debugging"},{ name: "- Agile Methodologies"},{ name: "- Git/ GitHub/ GitLab" }
        // ],
        // },
    ];

    return (
        <div className="border-b border-neutral-800 pb-24">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl"
        >
            Technologies
        </motion.h2>
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8"
        >
            {techCategories.map((category, index) => (
            <motion.div
                key={index}
                variants={iconVariants(2 + index)}
                initial="initial"
                animate="animate"
                className="w-full max-w-xs flex-grow rounded-2xl border-2 border-neutral-800 p-4 shadow-md"
            >
                <h3 className="mb-4 text-center text-2xl font-bold text-neutral-300">
                {category.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                {category.items.map((item, idx) => (
                    <div
                    key={idx}
                    className="flex flex-col items-center gap-2"
                    >
                    {item.icon}
                    <span className="text-neutral-300">{item.name}</span>
                    </div>
                ))}
                </div>
            </motion.div>
            ))}
        </motion.div>
        </div>
    );
};

export default Technologies;
