'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/data/portfolio';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #f4f1ea;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TitleIcon = styled(motion.span)`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h3)`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: 'Droid Serif', serif;
  color: #7AC789;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(44, 66, 92, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  img {
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const PlusIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #3e4c3a;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const Category = styled.p`
  color: #7AC789;
  font-style: italic;
  font-size: 0.95rem;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    max-height: 85vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #2C425C;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: #7AC789;
  }

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    width: 35px;
    height: 35px;
  }
`;

const ModalBody = styled.div`
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: #2C425C;
  margin-bottom: 1.5rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ModalImage = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 250px;
    margin-bottom: 1.5rem;
  }
`;

const Description = styled.p`
  color: #3e4c3a;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.05rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 2rem;
  color: #666;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.div`
  strong {
    color: #2C425C;
  }
`;

const iconAnimation = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Section id="projects">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TitleIcon {...iconAnimation}>📚</TitleIcon>
          Academic Projects
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Where you innovate, how you innovate, and what you innovate are design problems."
        </Subtitle>
        <Grid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWrapper>
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <PlusIcon>+</PlusIcon>
              </ImageWrapper>
              <CardContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <Category>{project.category}</Category>
              </CardContent>
            </ProjectCard>
          ))}
        </Grid>
      </Container>

      <AnimatePresence>
        {selectedProject && (
          <Modal
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
                ×
              </CloseButton>
              <ModalBody>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ModalImage>
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="800px"
                  />
                </ModalImage>
                <Description>{selectedProject.description}</Description>
                <MetaInfo>
                  <MetaItem>
                    <strong>Duration:</strong> {selectedProject.duration}
                  </MetaItem>
                  <MetaItem>
                    <strong>Category:</strong> {selectedProject.category}
                  </MetaItem>
                </MetaInfo>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
