import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const NavLink = ({children,to,...props}) => {
    let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        className={`nav-link relative ${match && 'text-white'} flex justify-left md:m-0 mt-3 lg:pl-2 md:px-3 pl-2`}
        to={to}
        {...props}
      >
        {children}
        {
            match && <div className='absolute w-full z-[-1] top-2/4 translate-y-[-50%] h-9 bg-[#3A4256] rounded-md right-0 left-0
            '></div>
        }
      </Link>
    </div>
  );
};

export default NavLink;