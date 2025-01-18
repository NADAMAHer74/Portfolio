import { NavLink } from 'react-router-dom'

function NvLink({ className, pendingClass, activeClass, children, style = {}, to, ...props }) {
    return (
        <li style={style} className="flex max-md:w-full">
            <NavLink className={({ isActive, isPending }) => `text-white font-normal 
                max-md:hover:bg-accent-70 md:text-base md:font-heavy-0 
                md:hover:text-secondary-70 
                transition-colors taxt-lg ease-linear duration-150 
                ${isActive ? activeClass || "md:!text-primary-60 max-md:!bg-primary-60 font-heavy-576"
                  : isPending ? pendingClass || "" : ""} 
                  ${className || ""} w-full px-4 py-2`}
                      to={to}
                      {...props}
                  >
                {children}
            </NavLink>
        </li>
    );
};

export default NvLink