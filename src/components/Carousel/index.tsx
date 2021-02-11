import React from 'react';



import tshirtImage from '../../assets/tshirt.png';

import { CarouselWrapper, CarouselSlider, CarouselButton } from './styles';

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext, 
    Image,
    ImageWithZoom
} from 'pure-react-carousel'

const images: { src: string, /*alt: string */}[] = [
  {
    src: tshirtImage,
    // alt: 'tShirt',
  },
  {
    src: tshirtImage,
    // alt: 'tShirt',
  },
  {
    src: tshirtImage,
    // alt: 'tShirt',
  },
  {
    src: tshirtImage,
    // alt: 'tShirt',
  },
  {
    src: tshirtImage,
    // alt: 'tShirt',
  }
]



// import { Container } from './styles';
// import { render } from '@testing-library/react';


export default class extends React.Component {
  render() {
    return(
      <CarouselWrapper>
        <CarouselProvider 
          visibleSlides = {3}
          naturalSlideWidth = {400} 
          naturalSlideHeight = {500} 
          step = {1}
          totalSlides = {5}
          hasMasterSpinner
        >
          <CarouselSlider>
            <Slider>
              {
                images.map((image, index) => 
                <Slide index={index}>
                  <ImageWithZoom 
                    className={'shirtImage'}
                    
                    // alt={image.alt}
                    src={image.src}
                  />
                </Slide>)
              }
            </Slider>
          </CarouselSlider>
          <CarouselButton>
            <ButtonBack className = "buttonBack">Back</ButtonBack>
            <ButtonNext className = "buttonNext">Next</ButtonNext>
          </CarouselButton>  
        </CarouselProvider>
      </CarouselWrapper> 
    )
  }
}