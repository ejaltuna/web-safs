import React from 'react'
import Carousel from 'react-grid-carousel'

const Collection_img = () => {
  return (
    <Carousel cols={1} rows={1}  loop showDots>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/700/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/700/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/700/600?random=3" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Collection_img;