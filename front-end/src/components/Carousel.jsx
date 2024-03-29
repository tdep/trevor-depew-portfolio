import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width}}>
      
      {children}
    </div>
  )
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const skipHandler = (e) => {
    let thisButton = e.target;
    if (thisButton.id === "prev") {
      updateIndex(activeIndex - 1);
    } else if (thisButton.id === "next") {
      updateIndex(activeIndex + 1)
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });



  return (
    <div 
      {...handlers}
      className="carousel"
      onMouseEnter={() => { setPaused(true) }}
      onMouseLeave={() => { setPaused(false) }}>
        
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      <div className="indicators">
        <button
          id="prev"
          onClick={(e) => {
            skipHandler(e)
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button 
          id="next"
          onClick={(e) => {
            skipHandler(e)
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel