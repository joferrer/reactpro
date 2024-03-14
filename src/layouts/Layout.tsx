import { NavLink } from 'react-router-dom';
import Logo from '../assets/react.svg'

import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => { 
  return <div className='main-layout'>
    <nav>
      <img src={Logo} alt='React logo' />

      <ul>
        <li>
          <NavLink to='/' className={({isActive})=> isActive ? 'nav-active':''}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
        </li>
        <li>
          <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
        </li>
      </ul>
    </nav>
    <div>
      {children}
    </div>
  </div>
}