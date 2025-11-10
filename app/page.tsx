'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '@/components/Navigation';
import Masthead from '@/components/Masthead';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Courses from '@/components/Courses';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const MainContainer = styled.main`
  overflow-x: hidden;
`;

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <MainContainer>
      <Navigation />
      <Masthead />
      <About />
      <Education />
      <Projects selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      <Courses />
      <Experience />
      <Contact />
    </MainContainer>
  );
}
