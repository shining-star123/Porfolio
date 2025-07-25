import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import SkillsSection from "@/components/SkillsSection";
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award,
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  Globe,
  GitBranch,
  Palette,
  Wrench,
  Target,
  Bot
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  const education = [
    {
      institution: "Huston-Tillotson University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      duration: "2012 - 2016",
      location: "Austin, TX, USA",
    },
  ];

  const experience = [
    {
      position: "Senior Mobile Engineer",
      company: "The Scented Market",
      duration: "Feburary 2024 - Present",
      description: "Working as a Senior Mobile Engineer at The Scented Market, focusing on mobile app development.",
      responsibilities: [
        "Built the app using React Native (TypeScript) for iOS and Android.",
        "Integrated AWS AI/ML for personalized fragrance recommendations.",
        "Implemented Stripe and Coinbase Commerce API for payments.",
        "Enhanced security with biometric authentication via React Native Fingerprint Scanner and Face ID."
      ]
    },
    {
      position: "Senior React Native Engineer",
      company: "ChowNow",
      duration: "December 2021 - December 2023",
      description: "Working as a Senior React Native Developer at ChowNow, focusing on app upgrades and feature development.",
      responsibilities: [
        "Upgraded the app from React Native 0.59 to 0.64, improving performance and stability.",
        "Integrated QR code scanning for restaurant-specific menus using react-native-qrcode-scanner.",
        "Implemented real-time delivery tracking with react-native-maps and Google Maps API.",
        "Optimized data management using Redux-Toolkit and RTK Query for efficient state management."
      ]
    },
    {
      position: "React Native Developer",
      company: "TopHap",
      duration: "Feburary 2019 - October 2021",
      description: "Working as a React Native Developer at TopHap, focusing on mobile app development for real estate data.",
      responsibilities: [
        "Developed the TopHap Explorer app using React Native, providing real-time property data.",
        "Integrated ARKit (iOS) and ARCore (Android) for property identification using Augmented Reality.",
        "Implemented GPS-based property search with react-native-maps and Google Maps API.",
        "Managed state with Redux-Thunk for real-time data updates and synchronization."
      ]
    },
    {
      position: "MERN Stack Developer",
      company: "Innovative Constructions",
      duration: "January 2018 - December 2018",
      description: "Working as a MERN Stack Developer at Innovative Constructions, focusing on full-stack development for construction management.",
      responsibilities: [
        "Developed a full-stack construction management app using the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Built a project dashboard for real-time tracking and management using React and Redux.",
        "Integrated RESTful APIs with Node.js and MongoDB for efficient data processing and storage.",
        "Optimized app performance with Jest for testing and deployed on AWS for scalable production."
      ]
    },
    {
      position: "Junior Web Developer",
      company: "Briebug",
      duration: "July 2016 - October 2017",
      description: "Working as a Junior Web Developer at Briebug, focusing on full-stack development for project management solutions.",
      responsibilities: [
        "Developed a full-stack web application using React, Laravel, and MySQL for project management.",
        "Implemented dynamic user forms for registration and login with Redux for state management.",
        "Built CRUD operations for project and task management using Laravel APIs and MySQL.",
        "Deployed the application on AWS EC2, ensuring scalability and reliability in a production environment."
      ]
    }
  ];

  // const projects = [
  //   {
  //     title: "Income Tax Fraud Detection",
  //     description: "Developed an AI-powered system to detect fraudulent activities in income tax filings using machine learning algorithms and data pattern analysis.",
  //     technologies: ["Python", "Machine Learning", "AI", "Data Analysis", "TensorFlow"],
  //     duration: "03/2023 - 04/2023",
  //     type: "Open-source",
  //     accomplishments: [
  //       "Created custom algorithms to identify suspicious patterns in tax filings",
  //       "Implemented a dashboard to visualize fraud detection metrics",
  //       "Achieved 92% accuracy in identifying fraudulent transactions"
  //     ]
  //   },
  //   {
  //     title: "Oral Cancer Detection",
  //     description: "Built a deep learning model to detect and classify oral cancer stages from medical images, helping in early diagnosis and treatment planning.",
  //     technologies: ["Python", "TensorFlow", "Neural Networks", "Computer Vision", "OpenCV"],
  //     duration: "05/2023 - 08/2023",
  //     type: "2nd Year Project",
  //     accomplishments: [
  //       "Conducted data collection and preprocessing for oral cancer detection",
  //       "Designed and implemented a machine learning model for image classification using CNNs",
  //       "Achieved 89% accuracy in detecting early-stage oral cancer"
  //     ]
  //   },
  //   {
  //     title: "Object Tracking using OpenCV",
  //     description: "Developed an object detection and tracking system using OpenCV and KCF Tracker that can identify and follow objects in video streams.",
  //     technologies: ["Python", "OpenCV", "Computer Vision", "AI"],
  //     duration: "03/2023 - 04/2023",
  //     type: "Open-source",
  //     accomplishments: [
  //       "Developed an open-source AI project for object detection using encoded data",
  //       "Utilized compatible video sources to recognize objects seen through a camera",
  //       "Implemented real-time tracking with minimal latency"
  //     ]
  //   },
  //   {
  //     title: "Credit Card Fraud Detection",
  //     description: "Created a machine learning model to analyze whether credit card transactions are fraudulent by identifying unusual patterns and anomalies.",
  //     technologies: ["Python", "Machine Learning", "Data Science", "Statistical Analysis"],
  //     duration: "01/2023 - 03/2023",
  //     type: "Personal Project",
  //     accomplishments: [
  //       "Trained models on large datasets of transaction data",
  //       "Implemented feature engineering to improve detection accuracy",
  //       "Developed a real-time alert system for suspicious transactions"
  //     ]
  //   },
  //   {
  //     title: "Contextualized Topic Modeling",
  //     description: "Built a Python package to run contextualized topic modeling with BERT embeddings, enabling more accurate text analysis and categorization.",
  //     technologies: ["Python", "NLP", "BERT", "Machine Learning"],
  //     duration: "11/2022 - 01/2023",
  //     type: "Research Project",
  //     accomplishments: [
  //       "Created a reusable library for topic modeling tasks",
  //       "Implemented BERT embeddings for improved contextual understanding",
  //       "Published package with documentation for community use"
  //     ]
  //   },
  // ];

  // const certifications = [
  //   {
  //     name: "API Prototyping Learning Path",
  //     issuer: "Postman",
  //     date: "December 2024",
  //     skills: "API Prototyping, API Testing, API Documentation",
  //     credential: "PST-APL-2024"
  //   },
  //   {
  //     name: "Career Essentials in Generative AI",
  //     issuer: "Microsoft and LinkedIn",
  //     date: "November 2024",
  //     skills: "Generative AI, Prompt Engineering, LLM Applications",
  //     credential: "MSLI-GAI-2024"
  //   },
  //   {
  //     name: "Learning Microsoft Power BI",
  //     issuer: "Infosys Springboard",
  //     date: "November 2024",
  //     skills: "Microsoft Power BI, Data Visualization, Business Intelligence",
  //     credential: "ISB-PBI-2024"
  //   },
  //   {
  //     name: "Neural Networks and Deep Learning",
  //     issuer: "Great Learning",
  //     date: "January 2024",
  //     skills: "Neural Networks, Deep Learning, AI Architecture",
  //     credential: "GL-NNDL-2024"
  //   },
  //   {
  //     name: "Real Life Machine Learning and Data Science Projects",
  //     issuer: "Udemy",
  //     date: "November 2022",
  //     skills: "Machine Learning, Data Science, Practical Implementation",
  //     credential: "UC-e1c70903-b810-4b6b-8749-eebd3345715"
  //   },
  // ];

  const softSkills = [
    { skill: "Problem Solving", description: "Analytical approach to complex technical challenges" },
    { skill: "Communication", description: "Clear technical and non-technical communication" },
    { skill: "Team Collaboration", description: "Effective work in cross-functional teams" },
    { skill: "Adaptability", description: "Quick learning of new technologies and methodologies" },
    { skill: "Time Management", description: "Efficient project delivery within deadlines" },
    { skill: "Critical Thinking", description: "Analytical evaluation of solutions and approaches" },
  ];

  // const resumeHighlights = [
  //   { 
  //     title: "AI & ML Specialist", 
  //     description: "Specialized in machine learning algorithms and AI applications with practical implementation experience",
  //     icon: <Brain className="h-8 w-8 text-brand-purple" />
  //   },
  //   { 
  //     title: "Full-Stack Developer", 
  //     description: "Proficient in both front-end and back-end technologies, creating complete web solutions",
  //     icon: <Code className="h-8 w-8 text-brand-purple" />
  //   },
  //   { 
  //     title: "Web Developer", 
  //     description: "Experienced in building web applications using react framework and plain HTML and CSS",
  //     icon: <Cpu className="h-8 w-8 text-brand-purple" />
  //   },
  //   { 
  //     title: "Data Analyst", 
  //     description: "Skilled in data analysis, visualization, and extracting actionable insights",
  //     icon: <Database className="h-8 w-8 text-brand-purple" />
  //   },
  // ];

  const tabContent = {
    skills: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg flex items-start backdrop-blur-md border border-white/10"
            >
              <div className="mr-4 bg-brand-purple/10 p-3 rounded-full">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </motion.div>
          ))} */}
        </div>

        <SkillsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="glass-panel p-6 rounded-lg backdrop-blur-md border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-1">{item.skill}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <GraduationCap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <div className="text-lg mt-1">{edu.institution}</div>
                    <div className="text-muted-foreground mt-1">{edu.field}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end text-right">
                <div className="text-sm text-muted-foreground mt-2">{edu.duration}</div>
                <div className="text-sm text-muted-foreground mt-1">{edu.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <Briefcase className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="text-lg mt-1">{exp.company}</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                {exp.duration}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 pl-0 md:pl-12">{exp.description}</p>
            <div className="pl-0 md:pl-12">
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    // projects: (
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.4 }}
    //     className="space-y-6"
    //   >
    //     {projects.map((project, index) => (
    //       <motion.div
    //         key={project.title}
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.4, delay: index * 0.1 }}
    //         className="glass-panel p-6 rounded-lg"
    //       >
    //         <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
    //           <div className="flex-1">
    //             <h3 className="text-xl font-semibold">{project.title}</h3>
    //           </div>
    //           <div className="flex flex-wrap gap-2 items-center">
    //             <span className="text-xs py-1 px-3 bg-brand-purple/10 text-brand-purple rounded-full">
    //               {project.type}
    //             </span>
    //             <span className="text-xs text-muted-foreground">
    //               {project.duration}
    //             </span>
    //           </div>
    //         </div>
    //         <p className="text-muted-foreground mb-4">{project.description}</p>
            
    //         <div className="mb-4">
    //           <h4 className="font-medium mb-2">Key Accomplishments:</h4>
    //           <ul className="space-y-2">
    //             {project.accomplishments.map((item, i) => (
    //               <li key={i} className="flex items-start">
    //                 <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
    //                 <span className="text-muted-foreground">{item}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
            
    //         <div className="flex flex-wrap gap-2 mt-4">
    //           {project.technologies.map((tech) => (
    //             <span 
    //               key={tech} 
    //               className="text-xs py-1 px-3 bg-secondary rounded-full"
    //             >
    //               {tech}
    //             </span>
    //           ))}
    //         </div>
    //       </motion.div>
    //     ))}
    //   </motion.div>
    // ),
    // certifications: (
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.4 }}
    //     className="grid grid-cols-1 md:grid-cols-2 gap-6"
    //   >
    //     {certifications.map((cert, index) => (
    //       <motion.div
    //         key={cert.name}
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.4, delay: index * 0.1 }}
    //         className="glass-panel p-6 rounded-lg"
    //       >
    //         <div className="flex items-start">
    //           <div className="bg-brand-purple/10 p-2 rounded-full mr-4 flex-shrink-0">
    //             <Award className="h-5 w-5 text-brand-purple" />
    //           </div>
    //           <div>
    //             <h3 className="font-semibold">{cert.name}</h3>
    //             <div className="text-sm text-muted-foreground mb-2">
    //               {cert.issuer} • {cert.date}
    //             </div>
    //             <div className="flex flex-wrap gap-2 mb-2">
    //               {cert.skills.split(', ').map((skill) => (
    //                 <span key={skill} className="text-xs px-2 py-1 bg-secondary inline-block rounded-full">
    //                   {skill}
    //                 </span>
    //               ))}
    //             </div>
    //             {cert.credential && (
    //               <div className="text-xs text-muted-foreground">
    //                 Credential ID: {cert.credential}
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </motion.div>
    // ),
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4 backdrop-blur-sm border border-brand-purple/20">
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <AnimatedText text="Professional Experience" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I'm an aspiring developer specializing in web development, AI, and machine learning.
                My goal is to leverage these technologies to create innovative solutions for real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <PrintableResume />
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "skills", icon: <Code className="h-5 w-5" />, label: "Skills" },
                { id: "education", icon: <GraduationCap className="h-5 w-5" />, label: "Education" },
                { id: "experience", icon: <Briefcase className="h-5 w-5" />, label: "Experience" },
                // { id: "projects", icon: <Code className="h-5 w-5" />, label: "Projects" },
                // { id: "certifications", icon: <Award className="h-5 w-5" />, label: "Certifications" },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors backdrop-blur-sm border ${
                    activeTab === tab.id
                      ? "bg-brand-purple text-white border-brand-purple/50"
                      : "bg-secondary/20 text-muted-foreground hover:bg-secondary/40 border-white/10"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
