import React from 'react';
import Carousel from 'react-multi-carousel/lib/Carousel';
import 'react-multi-carousel/lib/styles.css';
import './traitsCarousel.scss'

const TraitsCarousel = ({data}) => {
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

    const mcStyles = [
        {rarity: 'legendary' ,color: '#F97A33'},
        {rarity: 'epic' ,color: '#AC27EB'},
        {rarity: 'uncommon' ,color: '#588F20'},
        {rarity: 'mythic' ,color: '#33F9ED'},
        {rarity: 'rare' ,color: '#33A6F9'},
    ]

    return (
        <div className="traitsCarousel">
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
                    data.map((item, index) => {
                        const mcColor = mcStyles.find(i => i.rarity == item.rarity.toLowerCase())
                        // console.log(mcColor)
                            return (
                                <div
                                    key={index}
                                    className="mc_item"
                                >
                                    <img
                                        src={`/traits_for_site/${item.image}`}
                                        alt="avatar"
                                        className="mc_avatar"
                                    />
                                    <h5 className="mc_name">
                                        {item.name}
                                    </h5>
                                    <p className="mc_percent">{item.count_percent}</p>
                                    <h6
                                        className="mc_rarity"
                                        style={{color: mcColor.color}}
                                    >
                                        {item.rarity}
                                    </h6>
                                </div>)
                        }
                    )
                }
            </Carousel>
        </div>
    );
};

export default TraitsCarousel;