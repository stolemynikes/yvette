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
                        <td>Adem Pakket</td>
                        <td>
                            <div>
                                <p>5 x 90 minuten</p>
                                <p>inclusief intake en ademanalyse</p>
                            </div>
                        </td>
                        <td>€ 427,-</td>
                    </tr>
                    <tr>
                        <td>Ademsessie</td>
                        <td>90 minuten</td>
                        <td>€ 87,-</td>
                    </tr>
                    <tr>
                        <td>Adem Wandeling</td>
                        <td>60 minuten </td>
                        <td>€ 77,-</td>
                    </tr>
                    <tr>
                        <td>Coaching met Fred Pakket</td>
                        <td>
                            <div>
                                <p>5 x 90 minuten</p>
                                <p>inclusief intake</p>
                            </div>
                        </td>
                        <td>€ 467,-</td>
                    </tr>
                    <tr>
                        <td>Coach Sessie met Fred</td>
                        <td>90 minuten</td>
                        <td>€ 97,-</td>
                    </tr>
                    <tr>
                        <td>Coach Sessie zonder Fred</td>
                        <td>90 minuten</td>
                        <td>€ 87,-</td>
                    </tr>
                    <tr>
                        <td>Angst voor Honden Pakket</td>
                        <td>
                            <div>
                                <p>5 x 90 minuten</p>
                                <p>inclusief intake</p>
                            </div>
                        </td>
                        <td>€ 467,-</td>
                    </tr>
                    <tr>
                        <td>Angst voor Honden Sessie</td>
                        <td>90 minuten</td>
                        <td>€ 87,-</td>
                    </tr>
                </tbody>
            </table>
            <p>Alle tarieven zijn inclusief BTW en exclusief reiskosten van € 0,21 per kilometer ( {'>'} 5 km).</p>
        </div>

    </div>
  )
}
