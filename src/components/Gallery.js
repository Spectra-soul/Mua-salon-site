import React, { useState } from 'react';
import { GalleryContainer, GalleryItem } from '../styles/GalleryStyles';

const imageData = [
  { src: "/images/gallery-image.jpeg", alt: "Gallery 1", category: "BENGALI BRIDE" },
  { src: "/images/gallery-image.jpeg", alt: "Gallery 2", category: "FASHION MAKEUP" },
  { src: "/images/gallery-image.jpeg", alt: "Gallery 3", category: "NON-BENGALI" },
  { src: "/images/gallery-image.jpeg", alt: "Gallery 4", category: "PARTY MAKEUP" },
  { src: "/images/gallery-image.jpeg", alt: "Gallery 5", category: "BENGALI BRIDE" },
  { src: "/images/gallery-image.jpeg", alt: "Gallery 6", category: "NON-BENGALI" },
  { src: "/images/gallery-image.jpeg", alt: "Gallery 6", category: "NON-BENGALI" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("ALL");

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredImages = imageData.filter(
    (image) => filter === "ALL" || image.category === filter
  );

  return (
    <GalleryContainer>
      <div className='heading'>
        <div className='b-header'>
          <h2>Gallery</h2>
          <p>Home / Gallery</p>
        </div>
      </div>
      <div className='makeup-types'>
        <div
          className={`filters ${filter === "ALL" ? "active" : ""}`}
          onClick={() => handleFilterClick("ALL")}
        >
          ALL
        </div>
        <div
          className={`filters ${filter === "BENGALI BRIDE" ? "active" : ""}`}
          onClick={() => handleFilterClick("BENGALI BRIDE")}
        >
          BENGALI BRIDE
        </div>
        <div
          className={`filters ${filter === "FASHION MAKEUP" ? "active" : ""}`}
          onClick={() => handleFilterClick("FASHION MAKEUP")}
        >
          FASHION MAKEUP
        </div>
        <div
          className={`filters ${filter === "NON-BENGALI" ? "active" : ""}`}
          onClick={() => handleFilterClick("NON-BENGALI")}
        >
          NON-BENGALI
        </div>
        <div
          className={`filters ${filter === "PARTY MAKEUP" ? "active" : ""}`}
          onClick={() => handleFilterClick("PARTY MAKEUP")}
        >
          PARTY MAKEUP
        </div>
      </div>
      <div className='gallery-grid'>
        {filteredImages.map((image, index) => (
          <GalleryItem key={index}>
            <img src={image.src} alt={image.alt} />
          </GalleryItem>
        ))}
      </div>
    </GalleryContainer>
  );
};

export default Gallery;
