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
import Chat from '@/components/Chat';

async function getData(locale = 'en') {
  const projectRoot = process.cwd();
  
  // Read all JSON files
  const personalInfoPath = path.join(projectRoot, 'personal-information.json');
  const projectsPath = path.join(projectRoot, 'projects.json');
  const skillsPath = path.join(projectRoot, 'skills.json');
  const educationPath = path.join(projectRoot, 'education.json');
  const experiencePath = path.join(projectRoot, 'experience.json');
  const uiPath = path.join(projectRoot, 'UI.json');
  
  const personalInfoData = await fs.readFile(personalInfoPath, 'utf8');
  const projectsData = await fs.readFile(projectsPath, 'utf8');
  const skillsData = await fs.readFile(skillsPath, 'utf8');
  const educationData = await fs.readFile(educationPath, 'utf8');
  const experienceData = await fs.readFile(experiencePath, 'utf8');
  const uiData = await fs.readFile(uiPath, 'utf8');
  
  // Parse JSON data and extract data for the specified locale
  const personalInfoParsed = JSON.parse(personalInfoData);
  const projectsParsed = JSON.parse(projectsData);
  const skillsParsed = JSON.parse(skillsData);
  const educationParsed = JSON.parse(educationData);
  const experienceParsed = JSON.parse(experienceData);
  const uiParsed = JSON.parse(uiData);
  
  return {
    personalInfo: personalInfoParsed[locale] || personalInfoParsed['en'],
    projects: projectsParsed[locale] || projectsParsed['en'],
    skills: skillsParsed[locale] || skillsParsed['en'],
    education: educationParsed[locale] || educationParsed['en'],
    experience: experienceParsed[locale] || experienceParsed['en'],
    ui: uiParsed[locale] || uiParsed['en'],
  };
}

export default async function Home({ params }) {
  // Ensure params is properly awaited and accessed safely
  const data = await getData(params?.locale || 'en');
  const { personalInfo, projects, skills, education, experience, ui } = data;
  
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header personalInfo={personalInfo} />
      <main className="w-full">
        <Hero personalInfo={personalInfo} />
        <Experience experiences={experience} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact personalInfo={personalInfo} ui={ui} />
      </main>
      <Footer personalInfo={personalInfo} ui={ui} />
      <Chat ui={ui} />
    </div>
  );
}
