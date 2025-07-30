
"use client";


import projectsEN from "../../data/projects";
import projectsDe from "../../data/projects-de";
import { notFound } from "next/navigation";
import MyPages from "../../components/MyPages";
import { useLanguage } from "../../context/LanguageContext";


export default function ProjectPage({ params }) {
  const { lang } = useLanguage();
  const projects = lang === "de" ? projectsDe : projectsEN;

  const project = projects.find((p) => p.id.toString() === params.id);
  if (!project) return notFound();

  return <MyPages params={params} project={project} />;
}