import React from 'react'
import Heading from '../components/Heading'
import contactBg from '../assets/contact-bg.jpg';
import Body from '../components/Body';
import { contacts } from '../components/layouts/Footer';
import ContactsCard from '../components/ContactsCard';
import ContactForm from '../components/ContactForm';
const ContactPage = () => {
  return (
    <div>
      <Heading
        bgImg={contactBg}
        title="Contact Us"
        subtitle="Comprehensive Web Development Services to Build, Enhance, and Transform Your Online Presence" 
        />
      <Body className='flex flex-col gap-12'>
        <h1 className='uppercase sm:text-4xl text-2xl font-bold bg-gradient-to-r from-sky-500 via-sky-300 via-60% to-sky-500 w-max bg-clip-text text-transparent'>Let's Contact</h1>
        <div className='sm:px-8'>
          <div className='bg-neutral-600/5 overflow-hidden rounded-2xl flex max-lg:flex-col gap-4'>
            <ContactsCard contacts={contacts} />
            <div className='flex-1 p-6'>
              <ContactForm />
            </div>
          </div>
        </div>
      </Body>
    </div>
  )
}

export default ContactPage