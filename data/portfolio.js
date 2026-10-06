// All portfolio content lives here. Edit this file to customize the site.
// Content comes only from the candidate's resume and LinkedIn profile.

export const profile = {
  name: "Abhay A S",
  title: "Full-Stack Developer",
  stackLine: "Python · Django · Flask · React",
  positioning:
    "I build web applications end to end: Django and Flask back ends, REST APIs, SQL and NoSQL databases, and responsive front ends.",
  location: "Thrissur, Kerala, India",
  email: "abhayabh422@gmail.com",
  phone: "+91 7994387539",
  linkedin: "https://www.linkedin.com/in/abhay-a-s-18456131a",
  github: "https://github.com/abhayas07",
  resume: "", // optional: put a PDF in /public and set "/resume.pdf"
};

export const about = [
  "I'm a full-stack Python developer who trained at CB Tech and completed internships there and at Expectation Walkers. I'm early in my career and looking for a junior full-stack role.",
  "I work on both sides of a web app: Python back ends with Django and Flask, RESTful APIs, and front ends in HTML, CSS, JavaScript, Bootstrap and React. I've worked with PostgreSQL, MySQL and MongoDB, and I've also built websites and Android apps.",
  "I care about clean, readable code, and I like working in teams where I can keep learning.",
];

export const projects = [
  {
    name: "E-Commerce Web App",
    summary: "An online store application covering the full-stack flow of browsing and buying products.",
    stack: ["Python", "Full-stack"],
    problem: "", solution: "", contribution: "", outcome: "", // fill in when you want more detail
    link: "", // live demo or repo URL
  },
  {
    name: "Real Estate Web App",
    summary: "A property listing web application built with Django.",
    stack: ["Python", "Django"],
    problem: "", solution: "", contribution: "", outcome: "",
    link: "",
  },
  {
    name: "Blog with Admin Moderation",
    summary: "A blog platform with rich-text content and admin moderation of posts.",
    stack: ["Python", "Rich text editor", "Admin moderation"],
    problem: "", solution: "", contribution: "", outcome: "",
    link: "",
  },
  {
    name: "Websites and Android Apps",
    summary: "Websites and Android apps built as part of my training and internships.",
    stack: ["Web", "Mobile app development"],
    problem: "", solution: "", contribution: "", outcome: "",
    link: "",
  },
];

export const experience = [
  {
    role: "Intern",
    company: "Expectation Walkers",
    period: "May 2026 – Jul 2026",
    points: [],
  },
  {
    role: "Intern",
    company: "CB Tech",
    period: "Aug 2024 – Feb 2025",
    points: [
      "Built full-stack development skills in Python.",
      "Completed 3 hands-on projects.",
    ],
  },
];

export const skills = [
  { group: "Back end", items: ["Python", "Django", "Flask", "Supabase", "RESTful APIs"] },
  { group: "Front end", items: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { group: "Tools and platforms", items: ["Git", "GitHub", "GitLab", "AWS"] },
  { group: "Also", items: ["Debugging and testing", "UI/UX development", "Mobile app development", "C (basic)"] },
];

export const softSkills = ["Communication", "Problem-solving", "Team collaboration"];

export const education = [
  {
    title: "Full Stack Python Developer Training Program",
    place: "CB Tech",
    period: "Aug 2024 – Feb 2025",
  },
  {
    title: "Diploma in Computer Engineering",
    place: "Maharaja's Technological Institute",
    period: "2021 – 2024",
  },
];

export const navLinks = [
  { href: "#projects", label: "/projects" },
  { href: "#experience", label: "/experience" },
  { href: "#skills", label: "/skills" },
  { href: "#contact", label: "/contact" },
];
