import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

//styling
import '../styles/_slider.scss'



const AVHTestimonials = [
    {
        id: 1,
        description: 'Wanneer we kijken naar de begeleiding zelf dan heeft Yvette heel geduldig het proces opgebouwd en een band ontwikkeld waardoor W. zich veilig voelde. Ze is een fijne persoonlijkheid en we zijn erg te spreken over hoe ze dit heeft aangepakt. Daarnaast mag ook het behaalde resultaat er zijn! We zijn zeer tevreden over de begeleiding en het resultaat.',
        name: ' Groeten, E. en M. v.W'
    },
    {
        id: 2,
        description: 'Ik vond het samenwerken heel leuk en ook met Fred. Op het strant vond ik het op het begin nog een beetje spannend, maar daarna niet meer. ',
        name: 'Groetjes, J.'
    },
    {
        id: 3,
        description: 'Super bedankt voor je begeleiding. J. heeft echt stappen gemaakt dankzij jou en Fred.',
        name: ' Groetjes, S.v.H.'
    }
]




export default function AVHSlider() {
  return (
   
        <div className="slider-avh">
            <h1>Angst voor honden</h1>
            <Slider infinite={true} touchDisabled={true}>
            {AVHTestimonials.map((slide, index) => <div key={index}>
                <h2>{slide.title}</h2>
                <div>{slide.description}</div>
                <p>{slide.name}</p>
            </div>)}
            </Slider>
        </div>
        
  )
}
