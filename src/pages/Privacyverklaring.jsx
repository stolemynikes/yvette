import React from 'react';

import PrivacyVerklaring from '../assets/pdf/privacyverklaring.pdf';

import '../styles/_pdfpages.scss';

export default function Privacyverklaring() {
  return (
    <>
    <embed src={PrivacyVerklaring}/>
    </>
  )
}
