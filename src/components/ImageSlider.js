import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScrool: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <img src="/images/slider-badging.jpg" alt="" />
            <img src="/images/slider-badag.jpg" alt="" />
            <img src="/images/slider-scale.jpg" alt="" />
            <img src="/images/slider-scales.jpg" alt="" />
        </Carousel>
    )
}

export default ImageSlider

const Carousel = styled(Slider)`
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }
    cursor: pointer;
    margin-top: 20px;
    .slick-list{
        overflow: initial;
    }
    button{
        z-index: 1;
    }
    ul li button{
        &:before{
            font-size: 7px;
            color: #969eab;
        }
    }
    li.slick-active button::before{
        color: #fff;
    }
    .slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    }
    img{
        height: 100%;
        width: 100%;
        border: 4px solid transparent;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 60%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 200ms;
        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`
