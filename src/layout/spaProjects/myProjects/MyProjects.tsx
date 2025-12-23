import styled from "styled-components";
import {ChainSvg} from "../svg for project/ChainSvg.tsx";
import {LittleGitHubSvg} from "../svg for project/LittleGitHubSvg.tsx";


export const MyProjects = () => {
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
      icon: <ChainSvg />,
      text: "Live Preview"
    },
    {
      icon: <LittleGitHubSvg />,
      text: "View Code"
    }
  ];
  return (
    <MyProjectsStyles>
      {projects.map((project) => (
        <Project key={project.id}>
          <BlockForProject>
            <img src={project.imgSrc} alt={project.alt} />
            <TextBlock>
              <h3>{project.title}</h3>
              <Description>
                {project.description}
              </Description>
              <TechStack>
                Tech stack<DedicatedTechStack>
                : {project.techStack}
              </DedicatedTechStack>
              </TechStack>
              <BottomForProjectBlock>
                {projectLinks.map((link, index) => (
                  <SvgWithText key={index}>
                    {link.icon}
                    <TextForButtonPart>{link.text}</TextForButtonPart>
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
const Project = styled.div`
  //border: 2px solid #ff5733;
  border-radius: 20px;
  //width: 375px;
  height: 570px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
`
const TextBlock = styled.div`
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

    color: #000;
  }
`
const BlockForProject = styled.div`
`
const Description = styled.p`
  margin-top: 0;
  margin-bottom: 12px;
  //border: 2px solid #0039ff;
  max-width: 314px; // указать в процентах
  min-height: 130px; // можно удалить 
  font-weight: 300;
  font-size: 18px;
  line-height: 144%;
  color: #666;
`
const TechStack = styled.p`
  margin: 0 0 21px 0 ;
`
const DedicatedTechStack = styled.mark`
  font-weight: 300;
  font-size: 14px;
  background: transparent;
`
const BottomForProjectBlock = styled.div`
  display: flex;
  gap:48px;
  padding-bottom: 25px;
`
const SvgWithText = styled.div`
  display: flex;
  gap: 10px;
`
const TextForButtonPart = styled.div`
  margin: 0;
`