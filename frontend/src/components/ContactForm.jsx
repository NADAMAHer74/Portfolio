import { Form, Formik } from 'formik'
import React, { useCallback } from 'react'
import FormControl, { Label, Input, Textarea, FormRow } from './UI/FormControl'
import * as Yup from 'yup';
const validationScema = Yup.object().shape({
    firstname: Yup.string().required('Name is required'),
    lastname: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]{11}$/, 'Invalid phone number').required('Phone is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
})
const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
}

const accessKey = import.meta.env.VITE_EMAIL_ACCESS_KEY
function ContactForm() {
    const handleSubmit = useCallback(async (values, { resetForm, setSubmitting, setErrors, setStatus }) => {
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    ...values,
                }),
            })
            if (response.ok) {
                resetForm()
                setStatus('success')
            } else {
                const error = await response.json()
                setErrors({ form: error })
                setStatus('error')
            }
        } catch (error) {
            setErrors({ form: error })
            setStatus('error')
        } finally {
            setSubmitting(false)
            setTimeout(() => {
                setStatus(null)
            }, 2000)
        }
    }, [])
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationScema}
        >
            {({ errors, touched, status, isSubmitting }) => (
                <Form className='flex flex-col justify-between gap-3 h-full'>
                    <div className='flex flex-col gap-6'>
                        <FormRow className='!gap-6'>
                            <FormControl>
                                <Label htmlFor='firstname'>First Name</Label>
                                <Input
                                    id='firstname'
                                    error={touched.firstname && errors.firstname}
                                    name='firstname'
                                    type='text'
                                    placeholder='Your Name'
                                />
                            </FormControl>
                            <FormControl>
                                <Label htmlFor='lastname'>Last Name</Label>
                                <Input
                                    id='lastname'
                                    error={touched.lastname && errors.lastname}
                                    name='lastname'
                                    type='text'
                                    placeholder='Your Name'
                                />
                            </FormControl>
                        </FormRow>
                        <FormRow className='!gap-6'>
                            <FormControl>
                                <Label htmlFor='email'>Email</Label>
                                <Input
                                    id='email'
                                    name='email'
                                    type='email'
                                    error={touched.email && errors.email}
                                    placeholder='Your Email'
                                />
                            </FormControl>
                            <FormControl>
                                <Label htmlFor='phone'>Phone Number</Label>
                                <Input
                                    id='phone'
                                    error={touched.phone && errors.phone}
                                    name='phone'
                                    type='text'
                                    placeholder='Your Phone Number'
                                />
                            </FormControl>
                        </FormRow>
                        <FormControl>
                            <Label htmlFor='subject'>Subject</Label>
                            <Input
                                id='subject'
                                name='subject'
                                type='text'
                                error={touched.subject && errors.subject}
                                placeholder='Subject'
                            />
                        </FormControl>
                        <FormControl>
                            <Label htmlFor='message'>Message</Label>
                            <Textarea
                                id='message'
                                name='message'
                                error={touched.message && errors.message}
                                placeholder='Your Message'
                            />
                        </FormControl>
                        {
                            errors.form && status === 'error' &&
                            (<div className='toast'>
                                <div className='alert alert-error text-sm'>
                                    {errors.form}
                                </div>
                            </div>)
                        }
                        {
                            status === 'success' &&
                            (<div className='toast'>
                                <div className='alert alert-success text-sm'>
                                    Message sent successfully
                                </div>
                            </div>)
                        }
                    </div>
                    <button type='submit' className={`btn rounded-full btn-primary self-end disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-primary-content`} disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                            Sending {" "}
                            <span className="loading loading-spinner"></span>
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm