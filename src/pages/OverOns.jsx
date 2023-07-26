import React from 'react'

import Banner from '../assets/images/OverOns/Banner.jpg'

import '../styles/_overonspage.scss'

export default function OverOns() {
  return (
    <div className='overons-container'>

        <div className='overons-banner'>

            <img src={Banner} alt="" />

            <div>
                <h1>&quot;Spanning is wie je denkt te moeten zijn, ontspanning is wie je bent&quot;</h1>
            </div>

        </div>

        <div>
            
            <p>In een bedrijfstraining ontdekte ik dat mijn talent ‘het brengen van ontspanning’ is. Ik was verbaasd door deze uitkomst maar als ik naar mezelf kijk en hoe ik omga met mensen en dieren, dan klopt het. Daar gaat mijn innerlijk vuur van aan. </p>
            <p>Ik wil dan ook heel graag samen met jou de deuren openen die ervoor zorgen dat jij in de flow van verandering en ontspanning komt. </p>
            <p>Want voor een ontspannen mens is geen berg te hoog, geen zee te diep, ligt de wereld aan je voeten en is het leven een feestje.</p>

        </div>

    </div>
  )
}