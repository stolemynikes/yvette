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
                        <th>Tijd</th>
                        <th>Tarief</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Kennismakingsgesprek</td>
                        <td>30 minuten</td>
                        <td>Gratis</td>
                    </tr>
                    <tr>
                        <td>Ademsessie</td>
                        <td>90 minuten</td>
                        <td>€ 85,-</td>
                    </tr>
                    <tr>
                        <td>Ademtraject</td>
                        <td>5 x 90 minuten  incl. intake & ademanalyse</td>
                        <td>€ 425,-</td>
                    </tr>
                    <tr>
                        <td>Ademwandeling</td>
                        <td>120 minuten </td>
                        <td>€ 95,-</td>
                    </tr>
                    <tr>
                        <td>Coachsessie</td>
                        <td>120 minuten </td>
                        <td>€ 95,-</td>
                    </tr>
                    <tr>
                        <td>Ademwandeling </td>
                        <td>90 minuten</td>
                        <td>€ 85,-</td>
                    </tr>
                    <tr>
                        <td>Coachsessie met Fred</td>
                        <td>90 minuten</td>
                        <td>€ 95,-</td>
                    </tr>
                    <tr>
                        <td>Coachtraject met Fred</td>
                        <td>5 x 90 minuten  incl. intake</td>
                        <td>€ 465,-</td>
                    </tr>
                    <tr>
                        <td>Angst voor Honden Traject</td>
                        <td>5 x 90 minuten  incl. intake</td>
                        <td>€ 465,-</td>
                    </tr>
                </tbody>
            </table>
            <p>Alle tarieven zijn inclusief BTW en exclusief reiskosten van € 0,21 per kilometer ( {'>'} 5 km).</p>
        </div>

    </div>
  )
}
