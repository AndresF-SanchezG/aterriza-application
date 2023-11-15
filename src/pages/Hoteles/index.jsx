import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { LogoPage } from "../../Components/LogoPage"
import { Formulario } from "../../Components/Formulario"
import { Navbar } from "../../Components/Navbar"
import { Footer } from "../../Components/Footer"

function HotelesDecameron() {
    try {
        let productJson = await fetch('./data/hoteles.json');
        listaHoteles = await productJson.json();
    
    }
    
    catch (error) {
        console.log(`Error fetching data:`, error);
    }

    
}


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