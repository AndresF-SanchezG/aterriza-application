import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CotizacionProvider } from '../../Context'
import { DatosContacto } from '../DatosContacto'
import { Agradecimiento } from '../Agradecimiento'
import { Experiencias } from '../Experiencias'
import { BlogPosts } from '../BlogPosts'
import { Hoteles } from '../Hoteles'
import { Decameron } from '../Decameron'
import { NotFound } from '../NotFound'
import { Navbar } from '../../Components/Navbar'
import { QuienesSomos } from '../QuienesSomos'
import { Home } from '../Home'
import { Footer} from '../../Components/Footer'
import { PageAuthentication } from '../PageAuthentication'
import { Registro } from '../Registro'


import './App.css'

const AppRoutes = () => {
    const routes = useRoutes([
      { path:'/', element: <Home />},
      { path:'/hoteles', element: <Hoteles />},
      { path:'experiencias', element: <Experiencias />},
      { path:'/decameron', element: <Decameron />},
      { path:'/registro', element: <Registro />},
   
      { path:'/datos-de-contacto', element: <DatosContacto />},
      { path:'/*', element: <NotFound />},
      { path:'/agradecimiento', element: <Agradecimiento />},
      { path:'/quienes-somos', element: <QuienesSomos />},
      { path:'/blogs', element: <BlogPosts />},
      { path:'/admins', element: <PageAuthentication />}
    ])
        return routes;
}

const App = () => {
  return (
    <CotizacionProvider>
       <BrowserRouter>
        <AppRoutes/>
       
     </BrowserRouter>

    </CotizacionProvider>
    
  )
}

export default App
