import React from 'react';
import './multiCarousel.scss'
import Carousel from 'react-multi-carousel/lib/Carousel';
import 'react-multi-carousel/lib/styles.css';
import imgOne from '../../assets/img/show-cases_carousel/image19.png'
import imgTwo from '../../assets/img/show-cases_carousel/image20.png'
import imgThree from '../../assets/img/show-cases_carousel/image21.png'
import imgFour from '../../assets/img/show-cases_carousel/image22.png'
import imgFive from '../../assets/img/show-cases_carousel/image23.png'
import imgSix from '../../assets/img/show-cases_carousel/image24.png'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 1920, min: 1370},
        items: 6
    },
    desktop: {
        breakpoint: {max: 1370, min: 1024},
        items: 5
    },
    tablet: {
        breakpoint: {max: 1024, min: 576},
        items: 3
    },
    mobile: {
        breakpoint: {max: 576, min: 0},
        items: 1
    }
};

/*https://www.npmjs.com/package/react-multi-carousel*/

const MultiCarousel = () => {
    const images = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix,
        imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix]
    return (
        <div className="multi_carousel">
            <Carousel
                responsive={responsive}
                swipeable={false}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    images.map((img, index) =>
                        <div
                            key={index}
                            className="mc_item"
                        >
                            <img src={img} alt="pumpkin"/>
                        </div>
                    )
                }
            </Carousel>
        </div>
    );
};

export default MultiCarousel;