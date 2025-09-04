import { promises as fs } from 'fs';
import path from 'path';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

async function getData() {
  const projectRoot = process.cwd();
  
  // Read all JSON files
  const personalInfoPath = path.join(projectRoot, 'personal-information.json');
  const projectsPath = path.join(projectRoot, 'projects.json');
  const skillsPath = path.join(projectRoot, 'skills.json');
  const educationPath = path.join(projectRoot, 'education.json');
  const experiencePath = path.join(projectRoot, 'experience.json');
  
  const personalInfoData = await fs.readFile(personalInfoPath, 'utf8');
  const projectsData = await fs.readFile(projectsPath, 'utf8');
  const skillsData = await fs.readFile(skillsPath, 'utf8');
  const educationData = await fs.readFile(educationPath, 'utf8');
  const experienceData = await fs.readFile(experiencePath, 'utf8');
  
  return {
    personalInfo: JSON.parse(personalInfoData),
    projects: JSON.parse(projectsData),
    skills: JSON.parse(skillsData),
    education: JSON.parse(educationData),
    experience: JSON.parse(experienceData),
  };
}

export default async function Home() {
  const { personalInfo, projects, skills, education, experience } = await getData();
  
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header personalInfo={personalInfo} />
      <main className="w-full">
        <Hero personalInfo={personalInfo} />
        <Experience experiences={experience} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  );
}
