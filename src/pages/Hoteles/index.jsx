import { Layout } from "../../Components/Layout"
import { LogoPage } from "../../Components/LogoPage"
import { Formulario } from "../../Components/Formulario"
import { Navbar } from "../../Components/Navbar"
import { Footer } from "../../Components/Footer"


const Hoteles = () => {


    return (
   
        <Layout>
             <Navbar />
            <LogoPage />
            <Formulario /> 
            <Footer />
        </Layout>
    )
  }
  
  export { Hoteles }