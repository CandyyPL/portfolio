import ContactField from '@/components/sections/Contact/ContactField/ContactField.jsx'
import Style from './ContactSection.styles.js'
import { useForm } from 'react-hook-form'
import React, { useRef } from 'react'
import emailIcon from '@/assets/icons/email.png'
import emailjs from '@emailjs/browser'
import checkImg from '@/assets/icons/check.png'

const ContactSection = React.forwardRef((_, ref) => {
  const { register, handleSubmit, reset } = useForm()

  const formRef = useRef(null)
  const messageRef = useRef(null)

  const handleMessageSend = async (data) => {
    formRef.current.classList.add('sending-pending')

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    await emailjs.send(serviceID, templateID, data, {
      publicKey,
    })

    formRef.current.classList.remove('sending-pending')
    formRef.current.classList.add('sending-sent')

    setTimeout(() => formRef.current.classList.remove('sending-sent'), 3000)

    reset({ name: '', surname: '', email: '', message: '' })
    messageRef.current.value = ''
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
        <Style.ContactForm onSubmit={handleSubmit(handleMessageSend)} ref={formRef}>
          <div className='sending-status'>
            <span className='pending'>
              <div className='loader'></div>
            </span>
            <span className='sent'>
              <img src={checkImg} alt='sent' />
            </span>
          </div>
          <div className='contact-fields'>
            <div className='name-fields'>
              <ContactField fieldName='name' fieldType='text' labelName='Imię' reg={register} />
              <ContactField
                fieldName='surname'
                fieldType='text'
                labelName='Nazwisko'
                reg={register}
              />
            </div>
            <ContactField fieldName='email' fieldType='email' labelName='E-mail' reg={register} />
            <ContactField
              fieldName='message'
              fieldType='text'
              labelName='Treść wiadomości'
              size='big'
              reg={register}
              ref={messageRef}
            />
          </div>
          <Style.Button onClick={() => handleMessageSend()}>WYŚLIJ</Style.Button>
        </Style.ContactForm>
      </section>
    </Style.ContactWrapper>
  )
})

export default ContactSection
