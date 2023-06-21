import React from 'react';
import IconButton from '@mui/material/IconButton';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import './SwipeButtons.css'



const SwipeButtons = () => {


  return (
    <div className='swipeButtons' >
    <IconButton>
  <ReplayIcon fontSize="large" className="swipeButtons__icon swipeButtons__repeat" />
</IconButton>
<IconButton>
  <CloseIcon fontSize="large" className="swipeButtons__icon swipeButtons__left" />
</IconButton>
<IconButton>
  <StarIcon fontSize="large" className="swipeButtons__icon swipeButtons__star" />
</IconButton>
<IconButton>
  <FavoriteOutlinedIcon fontSize="large" className="swipeButtons__icon swipeButtons__right" />
</IconButton>
<IconButton>
  <FlashOnOutlinedIcon fontSize="large" className="swipeButtons__icon swipeButtons__lightning" />
</IconButton>
    </div>
  );
};

export default SwipeButtons;
