import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/proj1.jpeg";


export const HERO_CONTENT = `
Aspiring Software Development Engineer with strong problem-solving skills, hands-on experience in full-stack development, and a proven track record of solving 1000+ algorithmic problems on LeetCode. I transform complex challenges into elegant solutions while maintaining a focus on scalability and user experience.

Let's build something amazing together!
`;

export const ABOUT_ME = `
I am a dedicated Software Development Engineer pursuing my Bachelor's in Information Technology at Sri Shakthi Institute of Engineering and Technology (CGPA: 8.0). With expertise in full-stack development using the MERN stack and a strong foundation in data structures and algorithms, I've successfully solved over 1000+ problems on LeetCode. I thrive in collaborative environments, having worked with cross-functional teams and mentored junior developers. My experience spans from developing AI-powered platforms to publishing reusable backend tools on NPM. I'm fluent in English, Tamil, and Hindi, and passionate about creating efficient, scalable solutions that make a difference.`;

export const EXPERIENCE = [
    {
        year: "Oct 2024 - Jan 2025",
        role: "Software Developer Intern",
        company: "BrewBrains Technologies",
        description: "Developed a full-stack iOS scanner application using the MERN stack. Collaborated with a cross-functional team of 5 engineers in an Agile environment. Built responsive frontend components and scalable backend APIs. Optimized performance, reducing application load time by 20%.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "iOS"]
    },
    {
        year: "2024 - 2025",
        role: "Software Development Freelancer",
        company: "Freelancing",
        description: "Freelanced for multiple clients, delivering full-stack projects including React Native, MERN, and Spring Boot applications. Managed project lifecycles from requirement gathering to deployment.",
        technologies: ["React Native", "MERN Stack", "Spring Boot"]
    },
    {
        year: "Sep 2024 - Oct 2024",
        role: "Java Development Intern",
        company: "ShadowFox",
        description: "Built Mail Management and Bank Management with ATM console applications using Java and OOP principles. Designed modular architecture with clean separation of concerns for maintainability and scalability.",
        technologies: ["Java", "OOP", "Console Applications"]
    }
];

export const PROJECTS = [
    {
        title: "CineTicket",
        image: p1,
        description: "Developed an AI-powered movie booking system with real-time seat selection and payment processing. Integrated an AI chatbot for personalized movie recommendations and built an admin dashboard with analytics. Handled concurrent booking conflicts and secure payment gateway integration.",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe API"],
        demoLink: "https://movie-ticket-booking-system-seven.vercel.app"
    },
    {
        title: "Backend Scaffold",
        image: p2,
        description: "Published a reusable backend scaffolding tool with 100+ downloads on NPM. Provides pre-configured database connections and RESTful API templates. Includes comprehensive documentation and integrated testing frameworks.",
        technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL"],
        demoLink: "https://www.npmjs.com/package/backend-studio"
    },
    {
        title: "Sugars n Brownies",
        image: p3,
        description: "Developed and published a Bakery Management Application with patent (Application No: 202441048577). Published research paper in IJIRSET journal. The application streamlines bakery operations with modern technology integration.",
        technologies: ["React Native", "Node.js", "Database Management", "API Integration"]
    }
];

export const SKILLS = {
    programming: ["Java", "JavaScript", "C", "SQL"],
    frameworks: ["React.js", "Node.js", "Express.js", "Next.js", "Flask", "Tailwind CSS"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Windows", "Unix/Linux", "Git", "Postman", "VS Code", "Figma", "NPM"],
    core: ["Data Structures & Algorithms", "OOPS", "REST APIs", "Problem Solving"],
    languages: ["English", "Tamil", "Hindi"]
};

export const CONTACT = {
    address: "4/12 Sundarapuram, Coimbatore, 641024, TamilNadu",
    phone: 6383677703,
    email: "abdul29112004@gmail.com",
};