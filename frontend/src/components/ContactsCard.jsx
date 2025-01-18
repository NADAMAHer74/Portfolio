import React from 'react'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'

function ContactsCard({ contacts, className, ...props }) {
    return (
        <div id='contacts-banner' className='relative overflow-hidden w-full lg:max-w-96 p-6 text-white bg-primary-10 flex flex-col lg:gap-44 gap-24' {...props}>
            <div id='contacts-banner-heading' className='flex flex-col lg:gap-20 gap-12'>
                <div>
                    <h3 className='text-xl'>Contact Information</h3>
                    <p className='text-neutral-400 text-sm mt-2'>Say something to start a live chat!</p>
                </div>
                <div id='contacts-banner-info' className='flex flex-col lg:gap-8 gap-4'>
                    {contacts.map((contact) => (
                        <div key={contact.text} className='flex flex-wrap sm:items-center text-lg max-sm:text-sm gap-2'>
                            <contact.icon className='text-xl sm:text-2xl' />
                            <p className=''>{contact.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div id='contacts-banner-icons' className='flex gap-4 z-10'>
                <a className='p-2 rounded-full bg-accent-70 hover:bg-primary transition-colors' href=""><FaFacebook size={20} /></a>
                <a className='p-2 rounded-full bg-accent-70 hover:bg-primary transition-colors' href=""><FaLinkedinIn size={20} /></a>
                <a className='p-2 rounded-full bg-accent-70 hover:bg-primary transition-colors' href=""><FaGithub size={20} /></a>
            </div>
        </div>
    )
}

export default ContactsCard