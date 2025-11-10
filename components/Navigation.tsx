'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${props => props.$isScrolled ? '0.75rem 0' : '1.5rem 0'};
  background-color: ${props => props.$isScrolled ? 'var(--primary-base)' : 'transparent'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.$isScrolled ? '0 2px 8px rgba(44, 66, 92, 0.6)' : 'none'};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled(motion.a)<{ $isScrolled: boolean }>`
  color: #d2b48c;
  font-weight: 700;
  letter-spacing: 0.0625em;
  text-transform: uppercase;
  font-size: ${props => props.$isScrolled ? '1.25em' : '1.5em'};
  transition: font-size 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  img {
    height: ${props => props.$isScrolled ? '1.5rem' : '2rem'};
    transition: height 0.3s ease;
  }
`;

const NavList = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 991px) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    width: 280px;
    height: 100vh;
    background-color: var(--primary-base);
    flex-direction: column;
    padding: 4rem 2rem;
    transition: right 0.3s ease;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  }
`;

const NavItem = styled(motion.li)`
  position: relative;
`;

const NavLink = styled(motion.a)<{ $isActive: boolean }>`
  font-size: 0.95rem;
  color: ${props => props.$isActive ? '#d2b48c' : '#f4f1ea'};
  letter-spacing: 0.0625em;
  text-transform: uppercase;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.3s ease;
  display: block;

  &:hover {
    color: #d2b48c;
  }
`;

const MenuToggle = styled.button`
  display: none;
  color: #f4f1ea;
  font-size: 1.5rem;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    display: block;
  }
`;

const Overlay = styled(motion.div)<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (max-width: 991px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
  }
`;

const sections = [
  { id: 'About', label: 'About' },
  { id: 'Education', label: 'Education' },
  { id: 'Project', label: 'Project' },
  { id: 'Course', label: 'Course' },
  { id: 'Experience', label: 'Experience' },
  { id: 'Contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100;
      let currentSection = '';
      
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = section.id;
            break;
          }
        }
      }
      
      // If at top, set first section as active
      if (scrollPosition < 200) {
        currentSection = sections[0].id;
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 72;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <Nav
        $isScrolled={isScrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContainer>
          <Brand
            $isScrolled={isScrolled}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JEGATHEESH C
          </Brand>
          <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </MenuToggle>
          <NavList $isOpen={isMenuOpen}>
            {sections.map((section, index) => (
              <NavItem
                key={section.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  $isActive={activeSection === section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleNavClick(e, section.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {section.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavContainer>
      </Nav>
      <Overlay
        $isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
