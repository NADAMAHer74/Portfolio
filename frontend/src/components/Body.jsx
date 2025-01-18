import React from 'react'

function Body({children, className, ...props}) {
  return (
    <div className={`sm:px-8 pt-16 pb-24 px-3 ${className}`} {...props}>
        {children}
    </div>
  )
}

export default Body