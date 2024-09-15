import styled from 'styled-components'

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media screen and (width >= 1280px) {
    margin-bottom: 100px;
  }

  h1.contact-header {
    width: 100%;

    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    text-align: center;

    @media screen and (width >= 640px) {
      font-size: 38px;
      line-height: 38px;
    }

    @media screen and (width >= 960px) {
      width: 75%;

      font-size: 42px;
      line-height: 42px;
    }

    @media screen and (width >= 1280px) {
      font-size: 50px;
      line-height: 50px;

      text-align: left;
    }
  }

  section.contact-inner-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`

const EmailIcon = styled.section`
  max-width: 400px;

  display: none;

  @media screen and (width >= 1280px) {
    display: block;
  }

  img.contact-icon {
    width: 100%;
  }
`

const ContactForm = styled.form`
  width: 100%;
  max-width: 525px;
  height: 550px;

  @media screen and (width >= 640px) {
    height: 500px;
  }

  background-color: ${({ theme }) => theme.colors.lightDim};

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;

  .contact-fields {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .name-fields {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media screen and (width >= 640px) {
      flex-direction: row;
    }
  }
`

const Button = styled.button`
  width: 120px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.yellow};

  border: none;

  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  color: black;

  cursor: pointer;

  position: relative;
  z-index: 1;

  transition: background-color 0.2s;
  transition: transform 0.2s;

  &::before {
    content: '';

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background-color: transparent;

    transition: background-color 0.2s;
    transition: transform 0.2s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellowDim};

    color: ${({ theme }) => theme.colors.light};

    transform: translate(-3px, -3px);

    &::before {
      transform: translate(6px, 6px);

      border-bottom: 2px solid ${({ theme }) => theme.colors.light};
      border-right: 2px solid ${({ theme }) => theme.colors.light};
    }
  }
`

export default {
  ContactWrapper,
  EmailIcon,
  ContactForm,
  Button,
}
