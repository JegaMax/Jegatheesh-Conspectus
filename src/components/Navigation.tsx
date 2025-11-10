'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Nav = styled(motion.nav)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${props => props.$scrolled ? '1rem 2rem' : '1.5rem 2rem'};
  background-color: ${props => props.$scrolled ? 'rgba(44, 66, 92, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.$scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #d2b48c;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: rgba(44, 66, 92, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    box-shadow: ${props => props.$isOpen ? '-5px 0 20px rgba(0, 0, 0, 0.3)' : 'none'};
  }
`;

const NavLink = styled(motion.a)`
  color: #f4f1ea;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #7AC789;
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    background: ${props => props.$isOpen ? '#7AC789' : '#f4f1ea'};
    transition: all 0.3s ease;
    border-radius: 2px;

    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'};
    }
  }
`;

const Overlay = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Courses', href: '#courses' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Nav $scrolled={scrolled}>
        <NavContainer>
          <Logo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Jegatheesh C
          </Logo>

          <NavLinks $isOpen={isOpen}>
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                onClick={() => handleLinkClick(item.href)}
                className={activeSection === item.href.substring(1) ? 'active' : ''}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </NavLink>
            ))}
          </NavLinks>

          <MenuButton
            $isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </MenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {isOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
