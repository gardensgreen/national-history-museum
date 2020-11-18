import React from 'react';
import { NavLink } from 'react-router-dom';

const GalleryNavigation = ({galleries}) => {
  console.log(galleries);

  return (
    <>
      {galleries.map((gallery, i) => (
        <NavLink key={i}
        style={{padding: '5px'}}
        to={`/gallery/${gallery}`}>
          {gallery}
        </NavLink>))
      }
    </>
  )
}

export default GalleryNavigation;
