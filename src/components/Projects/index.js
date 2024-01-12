import React from "react";
import { useState } from "react";
import ProjectCard from "../Cards/ProjectCard";
import { project } from "../../data/constants";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
    padding:15px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;
const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Project = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              Will Add Few More
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              Will Add Few More
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            project.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {project
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Project;
