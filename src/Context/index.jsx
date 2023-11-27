import { createContext, useState } from "react";

export const CotizacionContext = createContext();

export const CotizacionProvider = ({children}) => {
    const [cotizacionSeleccionada, setCotizacionSeleccionada] = useState({});
    console.log(cotizacionSeleccionada)
    return (
        <CotizacionContext.Provider value={{ cotizacionSeleccionada, setCotizacionSeleccionada }}>
            {children}
        </CotizacionContext.Provider>
       
    )
}