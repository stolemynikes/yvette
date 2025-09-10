import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


//pages
import Home from './pages/Home'
import Algemenevoorwaarden from './pages/Algemene-voorwaarden'
import Privacyverklaring from './pages/Privacyverklaring'
import Ademwerk from './pages/Ademwerk'
import AngstVoorHonden from './pages/AngstVoorHonden'
import Coaching from './pages/Coaching'
import Stressmanagement from './pages/Stressmanagement'
import OverOns from './pages/OverOns'
import Tarieven from './pages/Tarieven'
import Contact from './pages/Contact'


//router
import { Routes, Route, Navigate, useLocation} from 'react-router-dom'
import Kennismakingsgesprek from './pages/Kennismakingsgesprek'
import { useEffect , useState} from 'react'

//global styling
import './styles/_global.scss'



function App() {

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'instant'})
    }, [pathname])

    const excludedRoutes = ['/algemene-voorwaarden', '/privacyverklaring'];

    const stylingRoutes = excludedRoutes.map((Array) => {
        if(pathname == Array) {
            document.body.style.overflow = 'hidden';
            document.body.style.margin = '0';
        }
    });



  return (
    <>

    {!excludedRoutes.includes(pathname) &&  <Navbar/>}
    

        <Routes>

            <Route path="/" exact element={<Home/>}/>\
            <Route path="/*" exact element={<Navigate to='/'/>}/>
            {/* <Route path='/ademwerk' exact element={<Ademwerk/>}/> */}
            {/* tijdelijk */}
                <Route path='/ademwerk' exact element={<Ademwerk/>}/>
            {/*  */}
            <Route path='/coaching' exact element={<Coaching/>}/>
            <Route path='/angst-voor-honden' exact element={<AngstVoorHonden/>}/>
            <Route path='/kennismakingsgesprek' exact element={<Kennismakingsgesprek/>}/>
            <Route path='/over-ons' exact element={<OverOns/>}/>
            <Route path='/tarieven' exact element={<Tarieven/>}/>
            <Route path='/contact' exact element={<Contact/>}/>
            <Route path='/algemene-voorwaarden' exact element={<Algemenevoorwaarden/>}/>
            <Route path='/privacyverklaring' exact element={<Privacyverklaring/>}/>
            <Route path='/stressmanagement' exact element={<Stressmanagement/>}/>

        </Routes>

        {!excludedRoutes.includes(pathname) &&  <Footer/>}

    </>
  )
}

export default App
