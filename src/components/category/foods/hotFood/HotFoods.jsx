import React from 'react'
import cold1 from '../../../../assets/bludo1.jpg'
import cold2 from '../../../../assets/bludo2.jpg'
import cold3 from '../../../../assets/bludo3.jpg'
import cold4 from '../../../../assets/bludo4.jpg'
import cold5 from '../../../../assets/bludo5.jpg'
import cold6 from '../../../../assets/bludo6.jpg'
import cold8 from '../../../../assets/bludo7.jpg'
import HotFood from './HotFood'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HotFoods() {

  const hotFoods = [
    { id: crypto.randomUUID(), img: cold1, nameFood: 'Цезарь', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold2, nameFood: 'Стейк', weight: '400гр', about: 'lorem', price: '60c' },
    { id: crypto.randomUUID(), img: cold3, nameFood: 'Витаминный', weight: '250гр', about: 'lorem', price: '28c' },
    { id: crypto.randomUUID(), img: cold4, nameFood: 'Брускетта', weight: '330гр', about: 'lorem', price: '35c' },
    { id: crypto.randomUUID(), img: cold5, nameFood: 'Фрикадельки', weight: '240гр', about: 'Куриные фрикадельки с соусом', price: '35c' },
    { id: crypto.randomUUID(), img: cold6, nameFood: 'Мини-пицца', weight: '1 порция', about: 'Мини-пицца с ветчиной и грибами', price: '45c' },
    { id: crypto.randomUUID(), img: cold8, nameFood: 'Капрезе', weight: '330гр', about: 'lorem', price: '35c' },
  ];

 
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full bg-[#403C3B] overflow-hidden px-8">
      <Slider {...settings}>
        {hotFoods.map((hotFood) => (
          <HotFood hotFood={hotFood} key={hotFood.id}/>
        ))}
      </Slider>
    </div>)
}
