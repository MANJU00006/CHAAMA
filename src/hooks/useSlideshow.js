import { useState, useEffect, useCallback } from 'react';

const useSlideshow = (slideCount) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  const showSlide = useCallback((index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    let newIndex = index;
    if (index >= slideCount) newIndex = 0;
    if (index < 0) newIndex = slideCount - 1;
    
    setTimeout(() => {
      setSlideIndex(newIndex);
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, slideCount]);

  const nextSlide = useCallback(() => showSlide(slideIndex + 1), [slideIndex, showSlide]);
  const prevSlide = useCallback(() => showSlide(slideIndex - 1), [slideIndex, showSlide]);
  const currentSlide = useCallback((index) => showSlide(index), [showSlide]);

  const startAutoSlide = useCallback(() => {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    setAutoSlideInterval(setInterval(nextSlide, 5000));
  }, [autoSlideInterval, nextSlide]);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      setAutoSlideInterval(null);
    }
  }, [autoSlideInterval]);

  useEffect(() => {
    return () => {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
    };
  }, [autoSlideInterval]);

  return {
    slideIndex,
    isTransitioning,
    showSlide,
    nextSlide,
    prevSlide,
    currentSlide,
    startAutoSlide,
    stopAutoSlide
  };
};

export default useSlideshow;