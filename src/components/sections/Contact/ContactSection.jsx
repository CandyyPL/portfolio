import ContactField from '@/components/sections/Contact/ContactField/ContactField.jsx'
import Style from './ContactSection.styles.js'
import { useForm } from 'react-hook-form'
import React from 'react'
import emailIcon from '@/assets/icons/email.png'

const ContactSection = React.forwardRef((_, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleMessageSend = (data) => {
    console.log(data)
  }

  return (
    <Style.ContactWrapper ref={ref}>
      <h1 className='contact-header'>
        <span className='text-accent'>Skontaktuj się</span> ze mną.
      </h1>
      <section className='contact-inner-wrapper'>
        <Style.EmailIcon>
          <img className='contact-icon' src={emailIcon} alt='email' />
        </Style.EmailIcon>
        <Style.ContactForm onSubmit={handleSubmit(handleMessageSend)}>
          <div className='contact-fields'>
            <div className='name-fields'>
              <ContactField fieldName='name' fieldType='text' labelName='Imię' />
              <ContactField fieldName='surname' fieldType='text' labelName='Nazwisko' />
            </div>
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
      </section>
    </Style.ContactWrapper>
  )
})

export default ContactSection
