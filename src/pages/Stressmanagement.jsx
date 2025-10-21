
import { Link } from 'react-router-dom'

import StressmanagementBanner from '../assets/images/Stressmanagement/Banner.jpg'
import Foto1 from '../assets/images/Stressmanagement/Foto1.jpg'
import Foto2 from '../assets/images/Stressmanagement/Foto2.jpg'
import Foto3 from '../assets/images/Stressmanagement/Foto3.jpg'

import HearthMath from '../assets/images/certificaten/HearthMath.webp'

export default function Stressmanagement() {
    return (
<>

        <div className="ademwerk2-container">

            <div className='page-banner'>

                <img src={StressmanagementBanner} alt="" />

                <div>
                    <h1>'De verborgen wijsheid van het Hart'</h1>
                </div>

            </div>

            <div className="ademwerk2-text1 p5-10">

                <div>

                    <p>Onze hedendaagse leefstijl geeft stress.</p>

                    <p>Veel mensen hebben een verhoogd gevoel van spanning en overprikkeling. Je ervaart dit als je onder druk staat en er veel van je wordt gevraagd.</p>

                    <p>Stress wordt vaak veroorzaakt door situaties die je als moeilijk of overweldigend ervaart. Op het werk, school, in relaties of tijdens veranderingen in je leven.</p>

                </div>

                <img src={Foto1} alt="" />

            </div>

            <div className="ademwerk2-text2 p5-10">

                <img src={Foto2} alt="" />

                <div>

                    <p>Stress zit niet alleen in je hoofd maar ook in je lichaam.</p>

                    <p>Het zorgt vaak voor een slechte nachtrust en fysieke klachten. Het is daarom belangrijk om de juiste manier te vinden om stress te verminderen. Een manier die je helpt om weer energie op te bouwen, veerkrachtig, vitaal en stabiel te zijn. </p>

                    <p>Als HeartMath coach bied ik je een programma aan waarin je leert op een simpele en effectieve manier grip te krijgen op de gedachten en emoties die stress veroorzaken.</p>

                    <p>De apparatuur die we daarbij gebruiken geeft real-time biofeedback over je hartcoherentie en laat zien hoe je lichaam reageert op stress en emoties. Dit inzicht helpt je om je stressniveau te beheersen en je welzijn te verbeteren.</p>

                    <p>Het HeartMath programma is eenvoudig, solide en heeft wetenschappelijk aangetoonde resultaten.</p>

                </div>

            </div>

            <div className="ademwerk2-text3 p5-10">

                <div>

                    <p>Pak de regie en kies voor Veerkracht, Inzicht en Vaardigheden</p>

                    <p>In 7 sessies krijg je niet alleen inzicht in de stress die jij ervaart. Je krijgt allerlei technieken aangereikt die ervoor zorgen dat je vaardigheden ontwikkelt om je stress te managen of zelfs te laten verdwijnen.</p>

                    <p>Als coach werk ik ook voor de Provincie Noord-Holland. Meerdere werknemers hebben het programma doorlopen. De resultaten zijn geweldig. Echt zo fijn!</p>

                    <p>Voor jou is dit programma natuurlijk ook beschikbaar. Wil je meer weten of direct aan de slag?</p>

                    <p>Neem dan contact op via onderstaande button. Ik kijk naar je uit!</p>

                    <Link className='button-nav' to='/kennismakingsgesprek'>Kennismakingsgesprek</Link>

                </div>

                <img src={Foto3} alt="" />

            </div>

        <div className="certificaten-logos-stressmanagement p5-10">

            <div>
                <p></p>

                <div>
                    <img src={HearthMath} alt="" />
                </div>
            </div>

        </div>

            

        </div>

        </>
    )
}