import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import '../styles/_contactpage.scss'
// import GoogleMaps from '../components/GoogleMaps'

import Banner from '../assets/images/Contact/Banner3.jpg'

import gsap from 'gsap';

const Popup = ({ message }) => {
    return (
      <div className={`popup popup-fade-in glide-in`}>
        <div className="popup-content">
          <p>{message}</p>
        </div>
      </div>
      
    );
  };

export default function Contact() {

    const form = useRef();
    const [isActive, setIsActive] = useState(true);
    const [popupActive, setPopupActive] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(null)
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      // Perform form validation
      const { user_name, user_email, message } = form.current;
      if (!user_name.value || !user_email.value || !message.value) {
        setPopupMessage('Vul alsjeblieft alle velden in');
        setShowPopup(true);
        setButtonDisabled(false)
        setTimeout(() => {
          setShowPopup(false)
        }, 4000);
        return;
      } else {
        setButtonDisabled(true)
      }
  
      emailjs
        .sendForm('service_ml3iuth', 'template_7fq0z4d', form.current, 'iGEj97IcEM67oB6Y2')
        .then(
          (result) => {
            console.log(result.text);
            setIsActive(false);
            setTimeout(() => {
              setPopupActive(true)
            }, 500); // Set isActive to false after successful submission
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };
  
    useEffect(() => {
      setTimeout(() => {
        gsap.to(form.current, {
          opacity: 1
        })
      }, 500);
    })

  return (

    <div className='contact-container'>

        {/* <div className='contact-header p5-10'>

            <h1>‘Elke samenwerking begint bij het maken van contact’</h1>
            <p>Wil je contact opnemen? We horen graag van je!</p>
            <p>Hier kun je vinden hoe je ons kunt bereiken…</p>

        </div> */}

        <div className='page-banner'>

        <img src={Banner} alt="" />

        <div>
            <h1>‘Elke samenwerking begint bij het maken van contact’</h1>
        </div>

        </div>

        <div className='contact-container2'>

            <div className='contact-sorten p5-10'>

                <div className='contact-phone'>

                    <h2>Telefonisch:</h2>

                    <p>Pak de telefoon en we hebben persoonlijk contact. We willen je graag leren kennen.</p>

                    

                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                    <p>+31 6 27 28 14 58 </p>
                    </div>
                </div>

                <div className="contact-email">

                    <h2>Email:</h2>

                    <p>Stuur een email en je bericht wordt binnen 2 dagen beantwoord.</p>

                    <div>
                        <a href='mailto:info@yvettevanzadel.nl'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>

                        <p>info@yvettevanzadel.nl</p>

                        </a>

                    </div>

                </div>
                
                {/* <div className="contact-maps">

                    <GoogleMaps/>

                </div> */}

            </div>

            <div className='contact-form'>

                <div className={`thanks ${popupActive ? 'fade-in' : ''}`}>

                    <p>Bedankt voor je bericht.</p> 
                    <p>Ik zal zo spoedig mogelijk reageren!</p>                    

                </div>

                <form style={{opacity: 1}} ref={form} onSubmit={sendEmail} className={isActive ? '' : 'fade-out'}>
                    
                    <label>Wat is je naam?</label>
                    <input type="text" name="user_name" className={isActive ? '' : 'form-disable'} />
                    <label>Wat is je emailadres?</label>
                    <input type="email" name="user_email" className={isActive ? '' : 'form-disable'} />
                    <label>Wat kan ik voor je doen?</label>
                    <textarea name="message" className={isActive ? '' : 'form-disable'} />
                    <input type="submit" disabled={buttonDisabled} value="Versturen" className={`button-nav ${isActive ? '' : 'form-disable'}`} />
                </form>

                <div className='popup-container'>
                        {showPopup && <Popup message={popupMessage} onClose={closePopup} />}
                    </div>

            </div>

        </div>


    </div>

  )
}
