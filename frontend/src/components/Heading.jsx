import React from 'react'

function Heading({ bgImg, title, subtitle }) {
    return (
        <div className="relative flex isolate bg-cover bg-center py-24 px-4 min-h-[504px]" style={{ backgroundImage: ` url(${bgImg}) ` }}>
            <div className="absolute -z-10 inset-0 bg-gradient-to-r opacity-40 from-black to-black/20 from-50% pointer-events-none"></div>
            <div className="text-center flex-1 flex gap-10 items-center flex-col self-end">
                <h1 className="text-4xl max-sm:text-3xl font-bold text-white">{title}</h1>
                <p className="text-lg max-md:text-base text-sky-100 max-w-[654px]">{subtitle}</p>
            </div>
        </div>
    )
}

export default Heading