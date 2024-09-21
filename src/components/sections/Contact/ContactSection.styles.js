import styled from 'styled-components'

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  padding-top: 20px;

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

  animation: float 4s infinite ease-in-out;

  @keyframes float {
    0% {
      transform: translateY(-15px);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(-15px);
    }
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

  position: relative;

  .sending-status {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    display: none;

    transition: all 0.2s;

    .pending,
    .sent {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;

      background-color: #666a;

      display: none;
    }

    .pending {
      --color: ${({ theme }) => theme.colors.light};

      .loader {
        width: 60px;
        aspect-ratio: 2;
        --_g: no-repeat radial-gradient(circle closest-side, var(--color) 90%, #0000);
        background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
        background-size: calc(100% / 3) 50%;
        animation: l3 1s infinite linear;
      }

      @keyframes l3 {
        20% {
          background-position: 0% 0%, 50% 50%, 100% 50%;
        }
        40% {
          background-position: 0% 100%, 50% 0%, 100% 50%;
        }
        60% {
          background-position: 0% 50%, 50% 100%, 100% 0%;
        }
        80% {
          background-position: 0% 50%, 50% 50%, 100% 100%;
        }
      }
    }

    .sent {
      img {
        height: 128px;
      }
    }
  }

  &.sending-pending {
    .sending-status {
      display: block;

      .pending {
        display: flex;
      }
    }
  }

  &.sending-sent {
    .sending-status {
      display: block;

      .sent {
        display: flex;
      }
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
