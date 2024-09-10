import React from 'react';
import { GalleryContainer, GalleryItem } from '../styles/GalleryStyles';

const Gallery = () => {
  return (
    <GalleryContainer>
      <div>
        <div className='heading'>
          <div className='b-header'>
            <h2>Gallery</h2>
            <p>Home / Gallery</p>
          </div>
        </div>
      </div>
      <div className='makeup-types'>
        <div className='filters'> ALL</div>
        <div className='filters'> BENGALI BRIDE</div>
        <div className='filters'> FASHION MAKEUP</div>
        <div className='filters'> NON-BENGALI</div>
        <div className='filters'> PARTY MAKEUP</div>
      </div>
      <GalleryItem>
        <img src="/images/gallery-image.jpeg" alt="Gallery 1" />
      </GalleryItem>
      <GalleryItem>
        <img src="/images/gallery-image.jpeg" alt="Gallery 2" />
      </GalleryItem>
      <GalleryItem>
        <img src="/images/gallery-image.jpeg" alt="Gallery 2" />
      </GalleryItem>
      <GalleryItem>
        <img src="/images/gallery-image.jpeg" alt="Gallery 2" />
      </GalleryItem>
    </GalleryContainer>
  );
};

export default Gallery;
