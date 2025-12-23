import styled from "styled-components";
import {ChainSvg} from "../svg for project/ChainSvg.tsx";
import {LittleGitHubSvg} from "../svg for project/LittleGitHubSvg.tsx";
import React from "react";

interface MyProjectsProps {
  darkMode: boolean;
}
export const MyProjects: React.FC<MyProjectsProps>= ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      imgSrc: "/public/Rectangle 4.png",
      alt: "Rectangle",
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React"
    },
    {
      id: 2,
      imgSrc: "/public/Rectangle 6.png",
      alt: "Rectangle",
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React"
    },
    {
      id: 3,
      imgSrc: "/public/Rectangle 8.png",
      alt: "Rectangle",
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React"
    },
    {
      id: 4,
      imgSrc: "/public/Rectangle 12.png",
      alt: "Rectangle",
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React"
    },
    {
      id: 5,
      imgSrc: "/public/Rectangle 13.png",
      alt: "Rectangle",
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React"
    },
    {
      id: 6,
      imgSrc: "/public/Rectangle 14.png",
      alt: "Rectangle",
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML, JavaScript, SASS, React"
    }
  ];

  const projectLinks = [
    {
      icon: <ChainSvg darkMode={darkMode}/>,
      text: "Live Preview"
    },
    {
      icon: <LittleGitHubSvg darkMode={darkMode}/>,
      text: "View Code"
    }
  ];
  return (
    <MyProjectsStyles >
      {projects.map((project) => (
        <Project key={project.id} darkMode={darkMode}>
          <BlockForProject>
            <img src={project.imgSrc} alt={project.alt} />
            <TextBlock darkMode={darkMode}>
              <h3 >{project.title}</h3>
              <Description darkMode={darkMode}>
                {project.description}
              </Description>
              <TechStack darkMode={darkMode}>
                Tech stack<DedicatedTechStack darkMode={darkMode}>
                : {project.techStack}
              </DedicatedTechStack>
              </TechStack>
              <BottomForProjectBlock >
                {projectLinks.map((link, index) => (
                  <SvgWithText key={index} darkMode={darkMode}>
                    {link.icon}
                    <TextForButtonPart darkMode={darkMode}>{link.text}</TextForButtonPart>
                  </SvgWithText>
                ))}
              </BottomForProjectBlock>
            </TextBlock>
          </BlockForProject>
        </Project>
      ))}
    </MyProjectsStyles>
  );
};

const MyProjectsStyles = styled.div`
  display: grid;
  grid-template-areas:
    "a b c"
    "d e f";
  gap: 0 50px; /* 0px между строками, 20px между колонками */
  row-gap: 62px; /* Расстояние между рядами 62px */
  width: 100%; /* Растягиваем на всю ширину контейнера */
  height: 100%;
  margin-bottom: 136px;
 
`
const Project = styled.div<{ darkMode: boolean }>`
  //border: 2px solid #ff5733;
  border-radius: 20px;
  //width: 375px;
  height: 570px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  background-color: ${props =>
    props.darkMode
      ? '#363636'  // Темный режим с прозрачностью
      : 'rgba(255,255,255,0.8)' // Светлый режим с прозрачностью
  };
  transition: background-color 2s;

`
const TextBlock = styled.div<{ darkMode: boolean }>`
  display: flex;
  //max-width: 375px; 
  flex-direction: column;
  margin-left: 30px;
  h3 {
    margin-top: 27px;
    margin-bottom: 17px;
    font-weight: 500;
    font-size: 28px;
    line-height: 93%;

    color: ${props =>
      props.darkMode
        ? '#ccc'  // Темный режим с прозрачностью
        : '#666' };// Светлый режим с прозрачностью
  }
`
const BlockForProject = styled.div`
`
const Description = styled.p<{ darkMode: boolean }>`
  margin-top: 0;
  margin-bottom: 12px;
  //border: 2px solid #0039ff;
  max-width: 314px; // указать в процентах
  min-height: 130px; // можно удалить 
  font-weight: 300;
  font-size: 18px;
  line-height: 144%;
  color: ${props =>
  props.darkMode
    ? '#ccc'  // Темный режим с прозрачностью
    : '#666' };// Светлый режим с прозрачностью
 
`
const TechStack = styled.p<{ darkMode: boolean }>`
  margin: 0 0 21px 0 ;

  color: ${props =>
    props.darkMode
      ? '#ccc'  // Темный режим с прозрачностью
      : '#42446e' };// Светлый режим с прозрачностью
  
`
const DedicatedTechStack = styled.mark<{ darkMode: boolean }>`
  font-weight: 300;
  font-size: 14px;
  background: transparent;

  color: ${props =>
    props.darkMode
      ? '#ccc'  // Темный режим с прозрачностью
      : '#42446e' };// Светлый режим с прозрачностью
`
const BottomForProjectBlock = styled.div`
  display: flex;
  gap:48px;
  padding-bottom: 25px;
`
const SvgWithText = styled.div<{ darkMode: boolean }>`
  display: flex;
  gap: 10px;
`
const TextForButtonPart = styled.div<{ darkMode: boolean }>`
  margin: 0;
 
  font-weight: 400;
  font-size: 16px;
  line-height: 163%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
 

  color: ${props =>
    props.darkMode
      ? '#fff'  // Темный режим с прозрачностью
      : '#000' };// Светлый режим с прозрачностью
`