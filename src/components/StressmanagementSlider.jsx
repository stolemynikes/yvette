import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

//styling
import '../styles/_slider.scss'



const StressmanagementTestimonials = [
   {
    id: 1,
    description: 'Ik merkte al enige tijd dat ik vermoeid was, mijzelf niet meer kon opladen en achter mijn ademhaling aanliep. Toen ik twee weken ziek was, besloot ik dat het zo niet langer kon en ik hulp moest zoeken om de boel weer op de rit te krijgen. Het coachtraject bij Yvette sloot aan bij mijn verwachtingen en heeft deze zelfs overtroffen. Ik vind Yvette een prettige coach. Ze begeleidt de sessies rustig en op een natuurlijke manier. Belangrijkste resultaat is dat ik meer rust ervaar en aanvoel wanneer er stress of een energielek ontstaat en er nu wat aan kan doen. Ik voel mij hierdoor weerbaarder.',
    name: 'Groet, J.V.'
    },
    {
        id: 2,
        description: 'Mijn doel was hoe ik beter om kan gaan met de spanningen en stress die ik tijdens mijn werk ervaar en ook meer energie kan overhouden aan het eind van een werkdag. Daarbij ook het effect op mij van de gemoedstoestand van mijn collega’s met wie ik een kantoorruimte deel, hoe ik dit een minder grote rol kan laten spelen. Ik voelde mij heel veilig bij Yvette. Ze weet een goede balans te vinden tussen de techniek van deze methode en ook intuïtief de sessies in te steken en dingen op zijn beloop te laten, waardoor je juist tot een dieper inzicht komt bij jezelf. Voor mij was het een groot winstpunt dat ik mij minder laat meeslepen in emoties (ook die van anderen). De dingen meer van een afstand bekijk en bewuster kies.',
        name: 'Groet, M.G.'
    },
    {
        id: 3,
        description: 'Aanleiding voor de coaching was mijn probleem met tandenknarsen. Met name ‘s nachts. Hierdoor ben ik al een paar kiezen kwijtgeraakt en dat wilde ik stoppen. Yvette is rustig, integer, ontspannen en duidelijk. Ze luistert en begrijpt je. Ze stelt de juiste vragen waardoor je meer gaat nadenken en voelen. Ik luister nu meer naar mijn lichaam. Slaap beter en knars bijna niet meer. Overdag voel ik mij rustiger en meer ontspannen. Ik weet wat ik moet doen bij gespannen of lastige situaties. Ik herken ze nu door naar mijn lichaam te luisteren en mij bewust te zijn wat ik voel.',
        name: 'Groet, P.v.B.'
    },
    {
        id: 4,
        description: 'Aanrader! Yvette helpt je controle te krijgen over jezelf.',
        name: 'Groet, S.P.'
    }
]




export default function StressmanagementSlider() {
  return (
   
        <div className="slider-avh">
            <h1 className='testimonials-title'>Testimonials</h1>
            <h1>Stressmanagement</h1>
            <Slider infinite={true} touchDisabled={true}>
            {StressmanagementTestimonials.map((slide, index) => <div key={index}>
                <h2>{slide.title}</h2>
                <div>{slide.description}</div>
                <p>{slide.name}</p>
            </div>)}
            </Slider>
        </div>
        
  )
}
