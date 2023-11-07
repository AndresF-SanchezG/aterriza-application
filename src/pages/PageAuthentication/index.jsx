import { Layout } from "../../Components/Layout"
import { LogoPage } from "../../Components/LogoPage"
import { Authenticate } from "../../Components/Authenticate"



const PageAuthentication = () => {
    return (
        <div className=" flex flex-col w-full h-screen bg-gray-300 items-center justify-center">
         <h2 className="flex h-3/6 items-center justify-center font-bold text-2xl">MODULO ADMINISTRATIVO ATERRIZA.CO</h2>

            <div className="flex space-y-4 h-3/6 flex-col items-center ">
                <input className="w-64 h-12 px-4" placeholder="Usuario"/>
                <input className="w-64 h-12 px-4"placeholder="Contraseña"/>
            </div>
        </div>
    
   
    )
  }
  
  export { PageAuthentication }