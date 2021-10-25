import React from 'react';
import Carousel from 'react-multi-carousel/lib/Carousel';
import 'react-multi-carousel/lib/styles.css';
import './roadmapCarousel.scss'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 1920, min: 1370},
        items: 3
    },
    desktop: {
        breakpoint: {max: 1370, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 576},
        items: 4
    },
    mobile: {
        breakpoint: {max: 576, min: 0},
        items: 1
    }
};

const RoadmapCarousel = () => {
    const data = [
        {
            id: '01',
            title: '10 00 NFT Sale',
            text: 'We are starting the sale of 10,000 unique collectible NFTs , which are also a pass to the NFT Games BMB World. '
        },
        {
            id: '02',
            title: 'Launch Gen 1 Cool Cats',
            text: 'We are starting the sale of 10,000 unique collectible NFTs , which are also a pass to the NFT Games BMB World. '
        },
        {
            id: '03',
            title: 'Monthly Exclusive NFT Kickoff',
            text: 'We are starting the sale of 10,000 unique collectible NFTs , which are also a pass to the NFT Games BMB World. '
        },
        {
            id: '04',
            title: 'First Community ETH Raffle',
            text: 'We are starting the sale of 10,000 unique collectible NFTs , which are also a pass to the NFT Games BMB World. '
        },
        {
            id: '01',
            title: '10 00 NFT Sale',
            text: 'We are starting the sale of 10,000 unique collectible NFTs , which are also a pass to the NFT Games BMB World. '
        },
        {
            id: '02',
            title: 'Launch Gen 1 Cool Cats',
            text: 'We are starting the sale of 10,000 unique collectible NFTs , which are also a pass to the NFT Games BMB World. '
        },
        {
            id: '03',
            title: 'Monthly Exclusive NFT Kickoff',
            text: 'We are starting the sale of 10,000 unique collectible NFTs , which are also a pass to the NFT Games BMB World. '
        },
        {
            id: '04',
            title: 'First Community ETH Raffle',
            text: 'We are starting the sale of 10,000 unique collectible NFTs , which are also a pass to the NFT Games BMB World. '
        },
    ]
    return (
        <div className='roadmap_carousel'>
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
                    data.map((card, index) =>
                        <div
                            key={index}
                            className="mc_item"
                        >
                                <h5 className="number">
                                    {card.id}
                                </h5>
                                <div className="content">
                                    <h6 className="title">{card.title}</h6>
                                    <p className="text">{card.text}</p>
                                </div>

                        </div>
                    )
                }
            </Carousel>
        </div>
    );
};

export default RoadmapCarousel;