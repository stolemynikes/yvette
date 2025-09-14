import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

//styling
import '../styles/_slider.scss'

  const AdemwerkTestimonials = [
        {
        id: 4,
        description: 'Ik merkte al enige tijd dat ik vermoeid was, mijzelf niet meer kon opladen en achter mijn ademhaling aanliep. Toen ik twee weken ziek was, besloot ik dat het zo niet langer kon en ik hulp moest zoeken om de boel weer op de rit te krijgen. Het coachtraject bij Yvette sloot aan bij mijn verwachtingen en heeft deze zelfs overtroffen. Ik vind Yvette een prettige coach. Ze begeleidt de sessies rustig en op een natuurlijke manier. Belangrijkste resultaat is dat ik meer rust ervaar en aanvoel wanneer er stress of een energielek ontstaat en er nu wat aan kan doen. Ik voel mij hierdoor weerbaarder.',
        name: 'Groet, J.V.'
    },
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
