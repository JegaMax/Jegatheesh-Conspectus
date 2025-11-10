'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Nav = styled(motion.nav)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 2rem;
  background-color: transparent;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const NavBar = styled.div<{ $scrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  background: ${props => props.$scrolled
    ? 'rgba(255, 255, 255, 0.95)'
    : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid rgba(44, 66, 92, 0.05);
  border-radius: 999px;
  padding: 0.75rem 1.75rem;
  box-shadow: ${props => props.$scrolled
    ? '0 12px 35px rgba(31, 43, 92, 0.15)'
    : '0 8px 30px rgba(31, 43, 92, 0.1)'};
  backdrop-filter: blur(14px);

  @media (max-width: 1120px) {
    gap: 1.25rem;
    padding: 0.65rem 1.5rem;
  }

  @media (max-width: 992px) {
    gap: 1rem;
    padding: 0.65rem 1.25rem;
  }

  @media (max-width: 768px) {
    border-radius: 24px;
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled(motion.div)`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1f2b5c;
  letter-spacing: 0.05em;
  text-transform: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: inline-block;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  img {
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  flex: 1;
  flex-wrap: wrap;
  row-gap: 0.75rem;
  min-width: 0;

  @media (max-width: 1120px) {
    gap: 1.5rem;
  }

  @media (max-width: 992px) {
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: rgba(44, 66, 92, 0.95);
    backdrop-filter: blur(14px);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    flex: none;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(115%)'};
    transition: transform 0.3s ease;
    box-shadow: ${props => props.$isOpen ? '-5px 0 24px rgba(0, 0, 0, 0.35)' : 'none'};
  }
`;

const NavLink = styled(motion.a)`
  color: #1f2b5c;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #6e8bff, #9f6bff);
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  @media (max-width: 1120px) {
    font-size: 0.9rem;
  }

  @media (max-width: 992px) {
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    color: #f4f1ea;
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
    background: ${props => props.$isOpen ? '#7AC789' : '#1f2b5c'};
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
          <NavBar $scrolled={scrolled}>
            <Logo
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/assets/favicon/favicon-32x32.png"
                alt="Jegatheesh C logo"
                width={32}
                height={32}
                priority
              />
              <span>Jegatheesh C</span>
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
          </NavBar>
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
