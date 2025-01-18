import React from 'react'
import { Field } from 'formik'
import { Form } from 'react-router-dom'
function FormControl({ children, className = '', ...props }) {
  return (
    <div className={`${className} flex flex-col gap-1 w-full`} {...props}>
      {children}
    </div>
  )
}

const Label = function Label({ children, className = '', htmlFor, ...props }) {
  return (
    <label htmlFor={htmlFor} className={`text-neutral-500 font-semibold max-w-max text-base ${className}`} {...props}>
      {children}
    </label>
  )
}

const Input = function Input({ className = '', type = 'text', id, error = '', ...props }) {
  return (
    <>
      <Field
        id={id}
        name={id}
        as="input"
        type={type}
        className={`input input-sm ${className} ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </>
  )
}

const Textarea = function Textarea({ className = '', error = '', ...props }) {
  return (
    <>
      <Field
        as="textarea"
        className={`p-3 textarea ${className} ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </>

  )
}

const FormRow = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex max-lg:flex-col gap-2 md:gap-3 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default FormControl;

export { Label, Input, Textarea, FormRow }