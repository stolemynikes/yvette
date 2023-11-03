import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

//styling
import '../styles/_slider.scss'

const CoachingTestimonials = [
    {
        id: 1,
        description: 'Ik heb de sessie ervaren als helder en met rust. Ik had het gevoel dat ik serieus genomen werd en dat ik de ruimte kreeg om na te denken/te voelen. Yvette was rustig en doordacht in de vragen die ze stelde. De rust helpt mij in het bedenken van mijn antwoorden. Fred is lekker duidelijk een warme zachte spiegel.',
        name: 'Groeten, E.'
    },
    {
        id: 2,
        description: 'De ruimte die Yvette biedt binnen de aangegeven grenzen om in te spelen, vind ik echt een bijzonder recept van kwaliteiten. Waarom mij dit aanspreekt is omdat ik zelf niet goed grenzen aan kan geven. En omdat ik dacht dat het gevoel van vrijheid betekend alle vrijheid geven aan de ander. Terwijl er dus ook vrijheid gevoeld kan worden binnen grenzen.',
        name: ' Liefs, R.J.'
    },
    {
        id: 3,
        description: 'Vond de sessie in 1 woord geweldig. Veel geleerd. Wist het wel maar toch. Ben nu druk aan de slag met verder ontwikkelen en ga een cursus doen voor meer verdieping.',
        name: ' Groeten, G.'
    },
    {
        id: 4,
        description: 'De begeleiding is goed. Ik voelde mij veilig en totaal gehoord. De volledige aandacht was op mij. Ik werd heel erg aan het denken gezet. De omgeving is een veilig rustig, een fijne plek. Fred’s aanwezigheid was heel fijn. Fred laat heel duidelijk de situatie zien. Behoeftes gevoelens compleet totaal laat hij alles overduidelijk zien. Ik voelde mij zeer comfortabel. Je bent een fijn mens. Alle vertrouwen in jou. Je begrijpt mij. Je voelt mij. Je herkent mij. Ik kijk uit naar volgende sessie.',
        name: 'Groet, A.W.'
    }
]


export default function CoachingSlider() {
  return (

        <div className="slider-coaching">
            <h1>Coaching</h1>
            <Slider infinite={true} touchDisabled={true}>
            {CoachingTestimonials.map((slide, index) => <div key={index}>
                <h2>{slide.title}</h2>
                <div>{slide.description}</div>
                <p>{slide.name}</p>
            </div>)}
            </Slider>
        </div>


  )
}
