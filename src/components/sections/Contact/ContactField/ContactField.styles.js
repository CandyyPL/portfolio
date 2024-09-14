import { styled, css } from 'styled-components'

const ContactFieldWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`

const Label = styled.label`
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
  color: black;

  margin-left: 4px;
`

const InputStyles = css`
  width: 100%;
  height: 45px;

  background-color: ${({ theme }) => theme.colors.light};

  border: 2px solid black;

  position: relative;

  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: black;

  font-family: 'Outfit', sans-serif;

  padding-inline: 10px;

  box-shadow: -5px 5px 0 0 ${({ theme }) => theme.colors.yellowDark};
`

const InputField = styled.input`
  ${InputStyles}
`

const TextareaField = styled.textarea`
  ${InputStyles}

  height: 125px;

  display: block;

  word-wrap: break-word;

  resize: none;
`

export default {
  ContactFieldWrapper,
  Label,
  InputField,
  TextareaField,
}
