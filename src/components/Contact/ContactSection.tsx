import { FC } from 'react'
import { ContactWrapper } from '@/components/Contact/ContactSection.styles'

const ContactSection: FC = () => {
  return (
    <ContactWrapper>
      <p className='title'>
        Get in <span>touch</span>.
      </p>
      <p className='sub'>If you have any job offer or want to cooperate, contact me!</p>
      <p className='mail'>aplay58.yt@gmail.com</p>
    </ContactWrapper>
  )
}

export default ContactSection
