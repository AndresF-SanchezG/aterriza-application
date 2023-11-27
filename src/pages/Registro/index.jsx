import React from "react";
import { Layout } from "../../Components/Layout";
import { LogoPage } from "../../Components/LogoPage";
import { CatchData } from "../../Components/CatchData";
import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";

const Registro = ({ cotizacionSeleccionada }) => {
    return (
        <div>
           
        <Layout>
             <Navbar />
            <LogoPage />
            <CatchData />
            <Footer />
        </Layout>
        </div>
    );
};

export { Registro };