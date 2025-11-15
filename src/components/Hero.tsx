"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7rem 2rem 3rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 2.5rem;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.85;
`;

const BackdropOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(18, 26, 71, 0.78),
    rgba(44, 66, 92, 0.65)
  );
  z-index: 0;
`;

const HeroContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1320px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1200px) {
    gap: 3rem;
    max-width: 1100px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: 2.5rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 580px;
  color: #f4f7ff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 992px) {
    align-items: center;
    max-width: 100%;
  }
`;

const HeroHighlightsSection = styled.div`
  flex: 0 0 620px;
  position: relative;
  min-height: 550px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1200px) {
    flex: 0 0 500px;
    min-height: 480px;
  }

  @media (max-width: 992px) {
    flex: 1;
    width: 100%;
    min-height: 400px;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    min-height: 350px;
    display: none;
  }
`;

const TreeBranch = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 4px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(228, 236, 255, 0.3) 20%,
    rgba(228, 236, 255, 0.3) 80%,
    transparent
  );
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 1200px) {
    width: 95%;
  }

  @media (max-width: 992px) {
    width: 85%;
    height: 3px;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 2px;
  }
`;

const Badge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #c7d6ff;
  padding: 0.5rem 1.2rem;
  border-radius: 999px;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (max-width: 992px) {
    align-self: center;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  text-shadow: 0 15px 35px rgba(18, 26, 71, 0.35);
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(243, 246, 255, 0.85);
`;

const Highlights = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: inherit;

  @media (max-width: 992px) {
    align-items: center;
  }
`;

const HighlightChipWrapper = styled(motion.div)<{
  $offsetX: number;
  $offsetY: number;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  left: ${(props) => props.$offsetX}%;
  top: ${(props) => props.$offsetY}px;
  transform-origin: top center;

  @media (max-width: 1200px) {
    left: ${(props) => {
      // Adjust positioning for medium screens
      if (props.$offsetX < 20) return Math.max(2, props.$offsetX);
      if (props.$offsetX > 70) return Math.min(78, props.$offsetX);
      return props.$offsetX;
    }}%;
    top: ${(props) => props.$offsetY * 0.85}px;
  }

  @media (max-width: 992px) {
    left: ${(props) => {
      // Center more for tablets
      const centered = props.$offsetX + (50 - props.$offsetX) * 0.3;
      return Math.max(5, Math.min(70, centered));
    }}%;
    top: ${(props) => props.$offsetY * 0.7}px;
  }

  @media (max-width: 768px) {
    left: ${(props) => {
      // More centered for mobile
      const centered = props.$offsetX + (50 - props.$offsetX) * 0.5;
      return Math.max(10, Math.min(60, centered));
    }}%;
    top: ${(props) => props.$offsetY * 0.55}px;
  }

  @media (max-width: 480px) {
    left: ${(props) => {
      // Almost centered for small mobile
      return Math.max(5, Math.min(50, 25 + props.$offsetX * 0.3));
    }}%;
    top: ${(props) => props.$offsetY * 0.45}px;
  }
`;

const HangingString = styled(motion.div)<{ $length: number }>`
  width: 2px;
  height: ${(props) => props.$length}px;
  background: linear-gradient(
    to bottom,
    rgba(228, 236, 255, 0.5),
    rgba(228, 236, 255, 0.15)
  );
  margin-bottom: -5px;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    height: ${(props) => props.$length * 0.85}px;
  }

  @media (max-width: 992px) {
    height: ${(props) => props.$length * 0.7}px;
    width: 1.5px;
  }

  @media (max-width: 768px) {
    height: ${(props) => props.$length * 0.55}px;
    width: 1.5px;
  }

  @media (max-width: 480px) {
    height: ${(props) => props.$length * 0.45}px;
    width: 1px;
  }
`;

const HighlightChip = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.8rem;
  border-radius: 20px;
  border-top-right-radius: 0;
  background: linear-gradient(
    135deg,
    rgba(17, 42, 74, 0.85),
    rgba(30, 50, 85, 0.8)
  );
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #e4ecff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), 0 3px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  max-width: 320px;
  min-width: 240px;

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(110, 139, 255, 0.35),
      rgba(159, 107, 255, 0.3)
    );
    border-color: rgba(110, 139, 255, 0.6);
    box-shadow: 0 15px 40px rgba(110, 139, 255, 0.4),
      0 5px 15px rgba(159, 107, 255, 0.3);
    transform: translateY(-5px) scale(1.05);
  }

  @media (max-width: 1200px) {
    max-width: 280px;
    min-width: 220px;
    padding: 0.75rem;
    gap: 0.4rem;
  }

  @media (max-width: 992px) {
    max-width: 260px;
    min-width: 200px;
    padding: 0.7rem;
    gap: 0.35rem;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    max-width: 220px;
    min-width: 180px;
    padding: 0.65rem;
    gap: 0.3rem;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
    min-width: 160px;
    padding: 0.6rem;
    gap: 0.25rem;
    border-radius: 12px;
  }
`;

const ChipHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.3;

  span:first-child {
    font-size: 1.2rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 1200px) {
    font-size: 0.8rem;
    gap: 0.5rem;

    span:first-child {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 992px) {
    font-size: 0.75rem;
    gap: 0.45rem;

    span:first-child {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.72rem;
    gap: 0.4rem;

    span:first-child {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    gap: 0.35rem;

    span:first-child {
      font-size: 0.9rem;
    }
  }
`;

const ChipDescription = styled.div`
  font-size: 0.65rem;
  font-weight: 400;
  color: rgba(228, 236, 255, 0.8);
  line-height: 1.5;
  text-align: left;
  margin-left: 0.6rem;

  @media (max-width: 1200px) {
    font-size: 0.62rem;
    margin-left: 0.5rem;
  }

  @media (max-width: 992px) {
    font-size: 0.6rem;
    margin-left: 0.45rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    font-size: 0.58rem;
    margin-left: 0.4rem;
    line-height: 1.35;
  }

  @media (max-width: 480px) {
    font-size: 0.56rem;
    margin-left: 0.35rem;
    line-height: 1.3;
  }
`;

const HeroActions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #6e8bff, #9f6bff);
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.95rem;
  box-shadow: 0 12px 30px rgba(110, 139, 255, 0.35);
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #e4ecff;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.95rem;
  background: rgba(15, 30, 60, 0.35);
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(228, 236, 255, 0.8);
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    bottom: 1.5rem;
  }
`;

const ScrollArrow = styled(motion.div)`
  width: 28px;
  height: 28px;
  border-left: 2px solid rgba(228, 236, 255, 0.8);
  border-bottom: 2px solid rgba(228, 236, 255, 0.8);
  transform: rotate(-45deg);
`;

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlights = [
    {
      icon: "⚙️",
      title: "Full-stack product engineering",
      description: "End-to-end development of web applications",
      offsetX: 1,
      offsetY: 25,
      stringLength: 60,
      swayAmount: 4,
      duration: 2.5,
    },
    {
      icon: "☁️",
      title: "Cloud & Microservices Expertise",
      description:
        "Expertise in AWS and GCP cloud platforms, microservices architecture",
      offsetX: 55,
      offsetY: 20,
      stringLength: 60,
      swayAmount: 5,
      duration: 2.8,
    },
    {
      icon: "🔧",
      title: "Problem Solver & Feature Builder",
      description: "Turning complex problems into elegant solutions",
      offsetX: 25,
      offsetY: 180,
      stringLength: 70,
      swayAmount: 6,
      duration: 3.2,
    },
    {
      icon: "📊",
      title: "End-to-End Ownership",
      description: "From ideation to deployment and beyond",
      offsetX: 75,
      offsetY: 370,
      stringLength: 50,
      swayAmount: 4,
      duration: 2.6,
    },
    {
      icon: "🌐",
      title: "Collaborative & Client-Facing",
      description: "Building solutions that exceed expectations",
      offsetX: 5,
      offsetY: 340,
      stringLength: 60,
      swayAmount: 5,
      duration: 3.0,
    },
  ];

  return (
    <HeroSection>
      <VideoBackground
        src="/assets/Full_Stack_Engineer_Animation.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <BackdropOverlay />

      <HeroContainer>
        <HeroContent>
          <Badge
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I&apos;m Jegatheesh C <span>👋</span>
          </Badge>

          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Building Scalable, Smart, and Seamless Web Applications
          </Title>

          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Crafting scalable enterprise solutions with Java, Spring Boot, REST
            APIs, SQL, JavaScript, React, and Angular. Passionate about
            developing high-quality software that solves real-world challenges.
            I help teams transform complex business needs into elegant,
            production-grade solutions.
          </Description>

          <HeroActions
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <PrimaryButton href="#projects">Explore Projects</PrimaryButton>
            <SecondaryButton href="#contact">
              Let&apos;s Collaborate
            </SecondaryButton>
          </HeroActions>
        </HeroContent>

        <HeroHighlightsSection>
          {/* <TreeBranch /> */}
          <Highlights>
            {highlights.map((highlight, index) => (
              <HighlightChipWrapper
                key={index}
                $offsetX={highlight.offsetX}
                $offsetY={highlight.offsetY}
                initial={{ opacity: 0, y: -80, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + index * 0.15,
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                }}
              >
                {/* <HangingString
                  $length={highlight.stringLength}
                  animate={{
                    rotate: isMobile
                      ? [
                          -highlight.swayAmount / 4,
                          highlight.swayAmount / 4,
                          -highlight.swayAmount / 4,
                        ]
                      : [
                          -highlight.swayAmount / 2,
                          highlight.swayAmount / 2,
                          -highlight.swayAmount / 2,
                        ],
                  }}
                  transition={{
                    duration: isMobile
                      ? highlight.duration * 1.3
                      : highlight.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                /> */}
                <HighlightChip
                  animate={{
                    rotate: isMobile
                      ? [
                          -highlight.swayAmount / 2,
                          highlight.swayAmount / 2,
                          -highlight.swayAmount / 2,
                        ]
                      : [
                          -highlight.swayAmount,
                          highlight.swayAmount,
                          -highlight.swayAmount,
                        ],
                  }}
                  transition={{
                    duration: isMobile
                      ? highlight.duration * 1.3
                      : highlight.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    rotate: isMobile
                      ? [0, -6, 6, -6, 6, 0]
                      : [0, -12, 12, -12, 12, 0],
                    scale: isMobile ? 1.04 : 1.08,
                    transition: {
                      duration: 0.6,
                      ease: "easeInOut",
                    },
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotate: isMobile ? [0, 8, -8, 0] : [0, 15, -15, 0],
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  <ChipHeader>
                    <span>{highlight.icon}</span>
                    <span>{highlight.title}</span>
                  </ChipHeader>
                  <ChipDescription>{highlight.description}</ChipDescription>
                </HighlightChip>
              </HighlightChipWrapper>
            ))}
          </Highlights>
        </HeroHighlightsSection>
      </HeroContainer>
      {/* <ScrollIndicator
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span>Scroll</span>
        <ScrollArrow
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </ScrollIndicator> */}
    </HeroSection>
  );
};

export default Hero;
