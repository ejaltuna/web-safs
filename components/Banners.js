import React, { useCallback, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import { Container } from 'react-bootstrap';

const Banners = () => {
    const [isHover, setIsHover] = useState(false)

    const handleHover = useCallback(() => {
        setIsHover(state => !state)
    }, [])
    
       
    return (
        <>    
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-fluid"
                dotListClass=""
                draggable
                focusOnSelect
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 1,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {/* <WithStyles
      description="React Carousel with Server Side Rendering Support – Part 1"
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    />
     */}


                <Image width={1600} height={500}
                    src='/img/soft3.jpg'
                    >
                </Image>

                <Image width={1600} height={500}
                    src='/img/soft1.jpg'
                    >
                </Image> 

                <Image width={1600} height={500}
                    src='/img/soft2.jpg'
                    >
                </Image> 
            </Carousel> 
                   
            
        </>
    )
}

export default Banners