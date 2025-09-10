import React from 'react'

import '../styles/_tarievenpage.scss'

export default function Tarieven() {
  return (
    <div className='tarieven-container'>

        {/* <div className='tarieven-header p5-10'>
            <h1>'Investeren in jezelf geeft Rijkdom'</h1>
        </div> */}

    <div className='tarieven-table p5-10'>

        <h1>'Investeren in jezelf geeft Rijkdom'</h1>

            <table>
                <thead>
                    <tr>
                        <th>Dienst</th>
                        <th></th>
                        <th>Tarief</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Kennismakingsgesprek</td>
                        <td></td>
                        <td>Gratis</td>
                    </tr>
                    
                </tbody>
                               
                <thead>
                    <tr>
                        <th>Trajecten</th>
                        <th></th>
                        <th>Tarief</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Stress Management Traject</td>
                        <td>3-4 maanden volgens de HeartMath methode. Met werkboek en gebruik van bio feedbackapparatuur.</td>
                        <td>€ 797,-</td>
                    </tr>
                    <tr>
                        <td>Adem Traject</td>
                        <td>3 maanden -met intake, ademanalyse en verschillende technieken.</td>
                        <td>€ 577,-</td>
                    </tr>
                    <tr>
                        <td>Coaching met Fred Traject</td>
                        <td>3 maanden -met intake.</td>
                        <td>€ 637,-</td>
                    </tr>
                    <tr>
                        <td>Angst voor Honden Traject</td>
                        <td>3 maanden -met intake.</td>
                        <td>€ 637,-</td>
                    </tr>
                </tbody>
                
                <thead>
                    <tr>
                        <th>Losse sessies</th>
                        <th></th>
                        <th>Tarief</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ademsessie</td>
                        <td></td>
                        <td>€ 120,-</td>
                    </tr>
                    <tr>
                        <td>Coachsessie</td>
                        <td></td>
                        <td>€ 120,-</td>
                    </tr>
                    <tr>
                        <td>Coach Sessie met Fred</td>
                        <td></td>
                        <td>€ 120,-</td>
                    </tr>
                                        <tr>
                        <td>Coaching zakelijk</td>
                        <td></td>
                        <td>vraag een vrijblijvende offerte aan.</td>
                    </tr>
                </tbody>
            </table>
            <p>Alle tarieven zijn inclusief BTW en exclusief reiskosten van € 0,21 per kilometer ( {'>'} 5 km).</p>
        </div>
        

    </div>
    
    
  )
}
