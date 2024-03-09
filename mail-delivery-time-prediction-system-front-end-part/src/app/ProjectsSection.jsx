"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Predict Mail Delivery Time",
    description:
      "After employees add data, the system should be able to generate personalised estimated delivery times for mail items based on various factors like sender location, recipient address, weather conditions, and historical delivery data",
    image: "/predict.png",
    tag: ["Critical"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Update Mail Delivery Item Status",
    description:
      "After employees add data and predict delivery times, the system should be able to automatically update user accounts, including mail status",
    image: "/update.jpg",
    tag: ["Critical", "Desirable"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Send Mail Arrival Notification",
    description:
      "After updating the user accounts after receiving a mail, receivers should have received a notification via email. (The system should be able to send an email after updating the user account)",
    image: "/about.png",
    tag: ["Critical"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Additional Delivery Notifications",
    description:
      "Implement optional notifications for events like delivery delays, missed deliveries, or attempted deliveries.",
    image: "/emailGetting.jpg",
    tag: ["Luxury"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Personalized Delivery Preferences",
    description:
      "Enable users to set preferred delivery times or locations for certain mail items.",
    image: "/image3.jpg",
    tag: ["Luxury"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Register to the system",
    description:
      "Users should be able to register for an account using basic personal information (name, address, email) and set a password",
    image: "/image3.jpg",
    tag: ["Critical"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Maintaining  the Mail History and a Mail-Box",
    description:
      "Mail box will be displayed with all mail history since customer register to the system",
    image: "/history.jpg",
    tag: ["Desirable"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Updating the system after the mail has been handed over",
    description:
      " Enable users to set preferred delivery times or locations for certain mail items.",
    image: "/image2.jpg",
    tag: ["Critical", "Desirable"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Critical");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Our Services
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Critical"
          isSelected={tag === "Critical"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desirable"
          isSelected={tag === "Desirable"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Luxury"
          isSelected={tag === "Luxury"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
