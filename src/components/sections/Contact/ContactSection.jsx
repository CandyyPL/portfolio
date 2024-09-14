import ContactField from '@/components/sections/Contact/ContactField/ContactField.jsx'
import Style from './ContactSection.styles.js'
import { useForm } from 'react-hook-form'

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleMessageSend = (data) => {
    console.log(data)
  }

  return (
    <Style.ContactWrapper>
      <h1 className='contact-header'>
        <span className='text-accent'>Skontaktuj się</span> ze mną.
      </h1>
      <Style.ContactForm onSubmit={handleSubmit(handleMessageSend)}>
        <div className='contact-fields'>
          <ContactField fieldName='name' fieldType='text' labelName='Imię' />
          <ContactField fieldName='surname' fieldType='text' labelName='Nazwisko' />
          <ContactField fieldName='email' fieldType='email' labelName='E-mail' />
          <ContactField
            fieldName='message'
            fieldType='text'
            labelName='Treść wiadomości'
            size='big'
          />
        </div>
        <Style.Button onClick={() => handleMessageSend()}>WYŚLIJ</Style.Button>
      </Style.ContactForm>
    </Style.ContactWrapper>
  )
}

export default ContactSection
