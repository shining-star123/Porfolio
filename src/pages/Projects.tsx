import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import { 
  Bot, 
  MonitorSmartphone,
  Database,
  Cpu,
  Filter,
  Search,
  Code,
  Brain,
  BarChart,
  TabletSmartphone
} from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "The Scented Market",
      description: "Developed The Scented Market mobile app, a cross-platform fragrance e-commerce platform built from scratch using React Native, delivering a fully integrated shopping experience on both iOS and Android with AI-driven personalized recommendations.",
      image: "/uploads/scented market.png",
      tags: ["React Native", "TypeScript", "E-Commerce"],
      play: "https://play.google.com/store/apps/details/The_Scented_Market?id=ca.thescentedmarket&hl=en_US&pli=1",
      app: "https://apps.apple.com/ca/app/the-scented-market/id1601766255?platform=iphone",
      category: "mobile"
    },
    {
      id: 2,
      title: "ChowNow",
      description: "Maintained and upgraded the ChowNow mobile app, addressing performance bottlenecks, enhancing stability, and leveraging React Native 0.64’s new features to optimize the development experience and reduce load times across both iOS and Android.",
      image: "/uploads/chownow1.webp",
      tags: ["React Native", "Google Maps", "Delivery"],
      play: "https://play.google.com/store/apps/details?id=com.chownow.discover&hl=en_US",
      app: "https://apps.apple.com/us/app/chownow-local-food-ordering/id1210943577?platform=iphone",
      category: "mobile"
    },
    {
      id: 3,
      title: "TopHap",
      description: "Developed the TopHap Explorer mobile application from scratch, providing users with real-time access to property data, neighborhood insights, and market conditions using React Native and JavaScript, with native modules for both iOS and Android.",
      image: "/uploads/tophap.png",
      tags: ["React Native", "Real Estate", "iOS"],
      app: "https://apps.apple.com/us/app/tophap-explorer/id1551845829",
      category: "mobile"
    },
    {
      id: 4,
      title: "MERN Stack Web Apps",
      description: "Developed a full-stack construction management application from scratch, allowing real-time tracking of projects, resource allocation, and client communications using the MERN stack, delivering a scalable and robust platform for both backend and frontend development.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      tags: ["React", "Node.js", "MongoDB"],
      // code: "https://github.com/oxBinaryBrain/contextualized-topic-models",
      category: "web"
    },
    {
      id: 5,
      title: "Briebug Web Apps",
      description: "Developed a full-stack web application, streamlining project management processes by handling client communications, task management, and resource allocation using React for the front end, Laravel for the back end, and MySQL for data storage.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Laravel", "MySQL"],
      // code: "https://github.com/oxBinaryBrain/E-commerce",
      category: "web"
    },
    // {
    //   id: 6,
    //   title: "Personal Portfolio",
    //   description: "A responsive personal portfolio website showcasing projects and skills.",
    //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    //   tags: ["React", "Node", "HTML","CSS"],
    //   code: "https://github.com/oxBinaryBrain/Portfolio_V1",
    //   category: "web"
    // },
    // {
    //   id: 7,
    //   title: "Blockchain Explorer",
    //   description: "A web interface for exploring blockchain data and transactions.",
    //   image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    //   tags: ["JavaScript", "React", "Blockchain", "Web3.js"],
    //   code: "https://github.com/oxBinaryBrain/Software-solution-to-identify-the-end-receiver-of-a-cryptocurrency-transaction",
    //   category: "blockchain"
    // },
    // {
    //   id: 8,
    //   title: "Smart Home Dashboard",
    //   description: "A dashboard for monitoring and controlling smart home devices.",
    //   image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    //   tags: ["C", "IoT", "NArdiuno"],
    //   code: "https://github.com/oxBinaryBrain/Ardiuno",
    //   category: "iot"
    // }
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case "ai":
        return Bot;
      case "web":
        return MonitorSmartphone;
      case "mobile":
        return TabletSmartphone;
      case "iot":
        return Cpu;
      case "ml":
        return Brain;
      case "data":
        return BarChart;
      default:
        return Code;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "mobile", name: "Mobile Development" },
    { id: "web", name: "Web Development" },
    // { id: "blockchain", name: "Blockchain" },
    // { id: "iot", name: "IoT" }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="My Projects" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Explore a collection of my recent work across various technologies and domains.
              </p>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.1)" }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-panel p-6 rounded-lg">
              {/* Category Filter */}
              <div className="flex items-center">
                <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="mr-4 text-sm font-medium">Filter:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <motion.button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                        filter === category.id 
                          ? "bg-brand-purple text-white" 
                          : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                      }`}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <motion.input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{ boxShadow: "0 0 0 3px rgba(155, 135, 245, 0.3)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  play={project.play}
                  app={project.app}
                  category={project.category}
                  icon={getIcon(project.category)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 glass-panel rounded-lg"
              >
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
                <motion.button
                  onClick={() => {
                    setFilter("all");
                    setSearchTerm("");
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#8B5CF6" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-brand-purple text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
