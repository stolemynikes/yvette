import React from 'react'

import AlgemeneVoorwaarden from '../assets/pdf/algemene-voorwaarden.pdf';

//styling 
import '../styles/_pdfpages.scss'

export default function Algemenevoorwaarden() {
  return (
    <>
    <embed src={AlgemeneVoorwaarden}/>
    </>
  )
}
