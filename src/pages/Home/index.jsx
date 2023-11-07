import { Layout } from "../../Components/Layout"
import { LogoPage } from "../../Components/LogoPage"
import { Card } from "../../Components/Card"
import { Navbar } from "../../Components/Navbar"
import { Footer } from "../../Components/Footer"


const Home = () => {
    return (
   
        <Layout>
            <Navbar />
            <LogoPage />
            <Card />
            <Footer />
        </Layout>
    )
  }
  
  export { Home }