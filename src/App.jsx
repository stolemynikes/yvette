import './App.css'
import Navbar from './components/Navbar'
import Ademwerk from './pages/Ademwerk'
import AngstVoorHonden from './pages/AngstVoorHonden'
import Coaching from './pages/Coaching'

//pages
import Home from './pages/Home'

//router
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Kennismakingsgesprek from './pages/Kennismakingsgesprek'
import { useEffect } from 'react'
import OverOns from './pages/OverOns'
import Tarieven from './pages/Tarieven'
import Contact from './pages/Contact'

//global styling
import './styles/_global.scss'

function App() {

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'instant'})
    }, [pathname])

  return (
    <>
    
        <Navbar/>

        <Routes>

            <Route path="/" exact element={<Home/>}/>\
            <Route path="/*" exact element={<Navigate to='/'/>}/>
            <Route path='/ademwerk' exact element={<Ademwerk/>}/>
            <Route path='/coaching' exact element={<Coaching/>}/>
            <Route path='/angst-voor-honden' exact element={<AngstVoorHonden/>}/>
            <Route path='/kennismakingsgesprek' exact element={<Kennismakingsgesprek/>}/>
            <Route path='/over-ons' exact element={<OverOns/>}/>
            <Route path='/tarieven' exact element={<Tarieven/>}/>
            <Route path='/contact' exact element={<Contact/>}/>

        </Routes>

    </>
  )
}

export default App
