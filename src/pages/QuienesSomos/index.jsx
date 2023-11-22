import { Layout } from "../../Components/Layout"
import { LogoPage } from "../../Components/LogoPage"
import { InfoQuienesSomos } from "../../Components/InfoAterriza"
import { Navbar } from "../../Components/Navbar"
import { Footer } from "../../Components/Footer"



const QuienesSomos = () => {
    return (
   
        <Layout>
              <Navbar />
            <LogoPage />
            <InfoQuienesSomos />
            <Footer /> 
        </Layout>
    )
  }
  
  export { QuienesSomos }