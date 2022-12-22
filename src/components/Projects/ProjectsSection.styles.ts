import styled from 'styled-components'

export const ProjectsWrapper = styled.section`
  width: 100%;
  height: 60vh;

  /* border: 5px solid white; */

  margin: 40px 0 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProjectsList = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-wrap: wrap;

  list-style: none;
`

export const Project = styled.li`
  width: 300px;
  height: 200px;

  background-color: #aaa;

  border: 4px solid lightgreen;
  border-radius: 10px;

  padding: 10px;
`
