import './Nav.css'
import {React, useState} from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const linkList = [
  {label: 'Products', path: '/products',},
  {label: 'About', path: '/about',},
  {label: 'Home', path: '/',},
];

const Nav = () => {

  return (
    <div className='nav'>
        <div className='header'>
          <div className='header-img'> </div>
          <p className='header-title'> Boost Insoles </p>
        </div>
        <ul className='link-list'>
          {linkList.map((linkData , index) => {
            return (
              <CustomLink key={index} to={linkData.path}> {linkData.label} </CustomLink>
            );
          })}
        </ul>
    </div>
  )
}

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? 'active' : 'inactive'}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Nav;
