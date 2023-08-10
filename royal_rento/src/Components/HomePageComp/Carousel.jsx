import React, { useState, useRef } from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    'https://s.rmjo.in/Valentine%20day%20banner%20Web-2.jpg',
    'https://p.rmjo.in/moodShot/lqkxuftu-1024x512.jpg',
    'https://s.rmjo.in/Fitness-offer-banner-for-Web--2.jpg',
    'https://s.rmjo.in/WP-Web.png',
  ];

  const settings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const top = useBreakpointValue({ base: '50%', md: '50%' });
  const side = useBreakpointValue({ base: '5px', md: '5px' });

  return (
    <Box
      position="relative"
      height={['105px', '160px', '260px', '500px']}
      width={['90%', '90%', '90%', '88%']}
      margin="auto"
      // marginTop="3px"
      border={'0px solid white'}
      overflow="hidden"
      borderRadius="18px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => sliderRef.current.slickPrev()}
        disabled={currentIndex === 0}
        // marginBottom={'100px'}
        border={'0px solid red'}
      >
        <BiLeftArrowAlt />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => sliderRef.current.slickNext()}
        disabled={currentIndex === cards.length - 1}
      >
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={sliderRef}>
        {cards.map((url, index) => (
          <Box
          key={index}
          height={['100px', '480px','620px']}
          width="100%"
          position="relative"
        >
          <div
            style={{
              backgroundImage: `url(${url})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              maxWidth:'100%',
              paddingTop: 'calc(100% / (24 / 9))', // Maintain 16:9 aspect ratio
            }}
          />
        </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
