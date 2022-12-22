import styled from 'styled-components'

export const ProjectsWrapper = styled.section`
  width: 100%;
  min-height: 300px;
  height: fit-content;
  max-height: 60vh;

  /* border: 5px solid white; */

  margin: 40px 0 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  .loading {
    .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }

    .lds-ellipsis div {
      position: absolute;
      top: 33px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #fff;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    .lds-ellipsis div:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }

    .lds-ellipsis div:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    .lds-ellipsis div:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    .lds-ellipsis div:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }

    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }

    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
  }
`

export const ProjectsList = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-wrap: wrap;

  list-style: none;
  padding: 0;

  .nothing {
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.code};
    font-weight: 600;
    color: #888;

    a {
      color: lightgreen;

      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }
`

export const Project = styled.li`
  @media only screen and (max-width: 720px) {
    width: 240px;
    height: 135px;
  }

  @media only screen and (min-width: 720px) {
    width: 320px;
    height: 240px;
  }

  background-color: #232936;

  border-radius: 10px;
  padding: 10px;
  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: #353e52;
  }

  .title {
    font-size: 22px;
    font-family: ${({ theme }) => theme.fonts.default};
    color: #eee;
  }

  .thumb {
    img {
      @media only screen and (max-width: 720px) {
        display: none;
      }

      @media only screen and (min-width: 720px) {
        height: 150px;
      }

      border-radius: 5px;
    }
  }

  .techs {
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.code};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.red};
  }
`
