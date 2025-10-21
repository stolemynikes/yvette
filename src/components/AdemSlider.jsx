import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

//styling
import '../styles/_slider.scss'

  const AdemwerkTestimonials = [
    {
        id: 1,
        description: 'Ik heb ons contact als heel fijn en rustig ervaren en inzicht in ademwerk gekregen. Ik neem een mooie nieuwe ervaring mee en een gezonder lijf. Dank voor je sessies, dank voor je vertrouwen en dank voor alle info en ervaring!',
        name: 'Glitters en liefs A.W.'
        
    },
    {
        id: 2,
        description: 'Yvette, bedankt voor een heerlijke ademsessie. We zijn nu een paar uur verder en ik voel me echt heel lekker. Mijn hart blijft maar open gaan. Je hebt een groot talent om mensen te begrijpen en te begeleiden.',
        name: ' Liefs, A.S.'
    },
    {
        id: 3,
        description: 'Yvette, jouw adem-coaching heeft mij geholpen mijn hoofd en lichaam te laten ontspannen door enkel mijn manier van ademen bewust te veranderen. Voor mij een heel leerzaam, fijn traject. Ik heb in 4 sessies, aan de hand van verschillende oefeningen en begeleide instructie, geleerd wat “beter ademen” mij brengt.',
        name: ' Groeten, M.L.'
    },

]



export default function AdemSlider() {
  return (
    <>
        <div className='slider-ademwerk'>
            <h1>Ademwerk</h1>
            <Slider infinite={true} touchDisabled={true}>
            {AdemwerkTestimonials.map((slide, index) => <div key={index}>
                <h2>{slide.title}</h2>
                <div>{slide.description}</div>
                <p>{slide.name}</p>
            </div>)}
            </Slider>
        </div>
    </>

  )
}
