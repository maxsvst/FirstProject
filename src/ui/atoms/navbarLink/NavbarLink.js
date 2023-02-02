import React from 'react'

function NavbarLink({href, title}) {
  return (
    <li className='inline-block'><a className='text-[#696969] md:hover:text-[#7E3AF2] transition-colors ease-linear duration-300 no-underline font-sans font-semibold text-base' href={href}>{title}</a></li>
  )
}

export default NavbarLink
