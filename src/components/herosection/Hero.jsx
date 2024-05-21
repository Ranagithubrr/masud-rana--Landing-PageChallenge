import Slider from 'react-slick';
import Mainslider from '../mainSlider/Mainslider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    // slick slider setting
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    return (
        <div className='box-border overflow-hidden mySlickSlider'>
            <Slider {...settings}>
                <Mainslider Title="Personalized Eyeglass Shopping" />
                <Mainslider Title="Customized Eyewear Selection" />
                <Mainslider Title="Tailored Glasses Experience" />
            </Slider >
        </div>
    )
}

export default Hero