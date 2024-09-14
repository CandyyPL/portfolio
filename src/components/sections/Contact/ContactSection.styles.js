import styled from 'styled-components'

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  h1.contact-header {
    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};

    text-align: center;
  }
`

const ContactForm = styled.section`
  width: 100%;
  height: 550px;

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
`

export default {
  ContactWrapper,
  ContactForm,
  Button,
}
