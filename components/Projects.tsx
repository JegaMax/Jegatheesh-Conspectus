'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects, quotes } from '@/data';

const Section = styled(motion.section)`
  padding: 9rem 0;
  background-color: var(--complementary-accent);
  min-height: 100vh;

  @media (max-width: 767px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled(motion.h1)`
  color: var(--primary-base);
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
`;

const TitleIcon = styled.span`
  font-size: 3rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
  color: var(--primary-accent);
  margin-right: 0.5rem;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const Subheading = styled(motion.h3)`
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: 'Droid Serif', var(--font-roboto-slab), serif;
  margin-bottom: 3rem;
  color: var(--primary-accent);
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectItem = styled(motion.div)`
  max-width: 400px;
  margin: 0 auto;
  cursor: pointer;
`;

const ProjectLink = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
`;

const ProjectHover = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(122, 199, 137, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-palette);
  font-size: 1.25rem;
`;

const ProjectCaption = styled.div`
  padding: 1.5rem;
  text-align: center;
  background-color: var(--secondary-palette);
  border-radius: 0 0 8px 8px;
`;

const ProjectCaptionHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--primary-base);
`;

const ProjectCaptionSubheading = styled.div`
  font-style: italic;
  color: #6c757d;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
`;

const ModalContent = styled(motion.div)`
  background-color: var(--secondary-palette);
  max-width: 800px;
  width: 100%;
  padding: 4rem 2rem;
  border-radius: 8px;
  position: relative;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2.5rem;
  line-height: 3rem;
  margin-bottom: 2rem;
  color: var(--primary-base);
  text-transform: uppercase;
`;

const ModalDescription = styled.p`
  margin-bottom: 2rem;
  line-height: 1.8;
  text-align: left;
`;

const ModalMeta = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ModalMetaItem = styled.li`
  color: #6c757d;
`;

interface ProjectsProps {
  selectedProject: string | null;
  setSelectedProject: (id: string | null) => void;
}

export default function Projects({ selectedProject, setSelectedProject }: ProjectsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <>
      <Section
        id="Project"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Container>
          <Title>
            <TitleIcon>📚</TitleIcon> Academic Projects
          </Title>
          <Subheading>{quotes.projects}</Subheading>
          <ProjectGrid>
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProject(project.id)}
              >
                <ProjectLink>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                  <ProjectHover
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <i className="fas fa-plus fa-3x"></i>
                  </ProjectHover>
                </ProjectLink>
                <ProjectCaption>
                  <ProjectCaptionHeading>{project.title}</ProjectCaptionHeading>
                  <ProjectCaptionSubheading>{project.category}</ProjectCaptionSubheading>
                </ProjectCaption>
              </ProjectItem>
            ))}
          </ProjectGrid>
        </Container>
      </Section>

      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelectedProject(null)}>
                <Image
                  src="/assets/img/close-icon.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </CloseButton>
              <ModalTitle>{selectedProjectData.title}</ModalTitle>
              <Image
                src={selectedProjectData.fullImage}
                alt={selectedProjectData.title}
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', marginBottom: '2rem', borderRadius: '8px' }}
              />
              <ModalDescription>{selectedProjectData.description}</ModalDescription>
              <ModalMeta>
                <ModalMetaItem>Duration: {selectedProjectData.duration}</ModalMetaItem>
                <ModalMetaItem>Category: {selectedProjectData.category}</ModalMetaItem>
              </ModalMeta>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
}
