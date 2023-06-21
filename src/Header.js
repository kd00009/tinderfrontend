import React from 'react'
import './Header.css'

import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import logo from './logo.png';
import ForumIcon from '@mui/icons-material/Forum';
const Header = () => {
  return (
    <div className='header'>
      
        <IconButton>
       
        <PersonIcon className='header_logo' fontSize='large' />
        </IconButton>
        <img className='header_logo' src= {logo} alt='logo' />
        <IconButton>
        <ForumIcon className='header_logo' fontSize='large' />
        </IconButton>
    </div>
  )
}

export default Header