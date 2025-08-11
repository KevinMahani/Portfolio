"use client";

import { useParams } from "next/navigation";
import projectsEN from "../../data/projects";
import projectsDe from "../../data/projects-de";
import MyPages from "../../components/MyPages";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectPage() {
  const params = useParams();
  const { lang } = useLanguage();
  const projects = lang === "de" ? projectsDe : projectsEN;

  const project = projects.find((p) => p.id.toString() === params.id);
  if (!project) {
    return <div>Project not found</div>;
  }

  return <MyPages params={params} project={project} />;
}
