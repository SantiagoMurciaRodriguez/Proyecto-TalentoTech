import React, { useState } from 'react';
import '../styles/Carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedItems, setExpandedItems] = useState({});

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setExpandedItems({});
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    setExpandedItems({});
  };

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="carousel-container-manual">
      <div className="carousel-track-manual" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div className="carousel-slide-manual" key={index}>
            {item.type === 'image' && (
              <img src={item.src} alt={item.alt} className="carousel-image-full" />
            )}
            {item.type === 'news' && (
              <div className="carousel-news-card-manual">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                {item.link && (
                  <a href={item.link} className="carousel-news-link">Leer más</a>
                )}
              </div>
            )}
            {item.type === 'news-expandable' && (
              <div className="carousel-news-card-manual expandable">
                {/* ¡ESTA ES LA LÍNEA CRÍTICA! */}
                {item.image && <img src={item.image} alt={item.title} className="news-expandable-image" />}
                <h3>{item.title}</h3>
                <p>{expandedItems[index] ? item.fullContent : item.shortContent}</p>
                <button
                  className="carousel-news-link expand-button"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedItems[index] ? 'Ver menos' : 'Ver más'}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="carousel-button-manual prev" onClick={goToPrev}>
        <FaChevronLeft />
      </button>
      <button className="carousel-button-manual next" onClick={goToNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;