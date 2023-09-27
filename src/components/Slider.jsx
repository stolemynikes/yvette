import React from 'react'
import { useState, useEffect } from 'react'

//styling
// import '../styles/_slider.scss'

const AdemwerkTestimonials = [
    {
        id: 1,
        description: 'Ik heb ons contact als heel fijn en rustig ervaren en inzicht in ademwerk gekregen. Ik neem een mooie nieuwe ervaring mee en een gezonder lijf. Dank voor je sessies, dank voor je vertrouwen en dank voor alle info en ervaring! Glitters en liefs A.W. ',
    },
    {
        id: 2,
        description: 'Yvette, bedankt voor een heerlijke ademsessie. We zijn nu een paar uur verder en ik voel me echt heel lekker. Mijn hart blijft maar open gaan. Je hebt een groot talent om mensen te begrijpen en te begeleiden. Liefs, A.S.',
    },
    {
        id: 3,
        description: 'Yvette, jouw adem-coaching heeft mij geholpen mijn hoofd en lichaam te laten ontspannen door enkel mijn manier van ademen bewust te veranderen. Voor mij een heel leerzaam, fijn traject. Ik heb in 4 sessies, aan de hand van verschillende oefeningen en begeleide instructie, geleerd wat “beter ademen” mij brengt. Groeten, M.L.'
    }
]

const AVHTestimonials = [
    {
        id: 1,
        description: 'Wanneer we kijken naar de begeleiding zelf dan heeft Yvette heel geduldig het proces opgebouwd en een band ontwikkeld waardoor W. zich veilig voelde. Ze is een fijne persoonlijkheid en we zijn erg te spreken over hoe ze dit heeft aangepakt. Daarnaast mag ook het behaalde resultaat er zijn! We zijn zeer tevreden over de begeleiding en het resultaat. Groeten, E. en M. v.W'
    },
    {
        id: 2,
        description: 'Ik vond het samenwerken heel leuk en ook met Fred. Op het strant vond ik het op het begin nog een beetje spannend, maar daarna niet meer. Groetjes, J.'
    },
    {
        id: 3,
        description: 'Super bedankt voor je begeleiding. J. heeft echt stappen gemaakt dankzij jou en Fred. Groetjes, S.v.H.'
    }
]

const CoachingTestimonials = [
    {
        id: 1,
        description: 'Ik heb de sessie ervaren als helder en met rust. Ik had het gevoel dat ik serieus genomen werd en dat ik de ruimte kreeg om na te denken/te voelen. Yvette was rustig en doordacht in de vragen die ze stelde. De rust helpt mij in het bedenken van mijn antwoorden. Fred is lekker duidelijk een warme zachte spiegel. Groeten, E.'
    },
    {
        id: 2,
        description: 'De ruimte die Yvette biedt binnen de aangegeven grenzen om in te spelen, vind ik echt een bijzonder recept van kwaliteiten. Waarom mij dit aanspreekt is omdat ik zelf niet goed grenzen aan kan geven. En omdat ik dacht dat het gevoel van vrijheid betekend alle vrijheid geven aan de ander. Terwijl er dus ook vrijheid gevoeld kan worden binnen grenzen. Liefs, R.J.'
    },
    {
        id: 3,
        description: 'Vond de sessie in 1 woord geweldig. Veel geleerd. Wist het wel maar toch. Ben nu druk aan de slag met verder ontwikkelen en ga een cursus doen voor meer verdieping. Groeten, G.'
    },
    {
        id: 4,
        description: 'De begeleiding is goed. Ik voelde mij veilig en totaal gehoord. De volledige aandacht was op mij. Ik werd heel erg aan het denken gezet. De omgeving is een veilig rustig, een fijne plek. Fred’s aanwezigheid was heel fijn. Fred laat heel duidelijk de situatie zien. Behoeftes gevoelens compleet totaal laat hij alles overduidelijk zien. Ik voelde mij zeer comfortabel. Je bent een fijn mens. Alle vertrouwen in jou. Je begrijpt mij. Je voelt mij. Je herkent mij. Ik kijk uit naar volgende sessie. Groet, A.W.'
    }
]

export default function Slider() {
    const [people] = useState(AdemwerkTestimonials);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if(index < 0) {
            setIndex(lastIndex);
        }
        if(index > lastIndex) {
            setIndex(0);
        }
    }, [index, people])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [index])

  return (
    <section>
        <div>
            <h1>Top</h1>
        </div>
        <div>
            {people.map((item, indexPeople) => {
                const {id, description} = item;
                let position = 'nextSlide';
                if(indexPeople === index ) {
                    position = 'activeSlide'
                }
                if(indexPeople === index -1 || (index === 0 && indexPeople === people.lenght - 1)) {
                    position = 'lastSlide'
                }
                return (
                    <article className={position} key={id}>
                        <p className='text'>{description}</p>
                    </article>
                )
            })}
        </div>
    </section>
  )
}
