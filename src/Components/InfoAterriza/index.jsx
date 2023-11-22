import { NavLink } from "react-router-dom";

const InfoQuienesSomos = () => {
    return(
        <div className="relative w-auto flex flex-col justify-center items-center px-8 md:px-24 h-full mb-10 overflow-y-auto">
            <h2 className="text-purple-800 flex font-bold text-md  justify-center mt-4">QUIENES SOMOS</h2>
            <p className="text-lg text-justify mt-8">Agencia de viajes Aterriza Co SAS legalmente constituida ante la Camara de Comercio De Cali en el año 2021, operamos con destinos desde la ciudad de Cali hacia los principales destinos turisticos como San Andrés, Santa Marta y Cartagena. Ofrecemos los mejores paquetes Tiquete + Hotel mediante bloqueos de sillas y habitaciones que nos permiten ofrecer tarifas accesibles segun las condiciones comerciales establecidas.
            Aterriza.co trata de establecer negociacioes comerciales, rutas logisticas entre ciudades que se beneficientre si para trasladar este beneficio al cliente, es por esto, que en Aterriza.co no encontraras solo un buscador con todas la rutas y destinos solo paquetes estratégicos entre ciudades.
            </p>

            <p className="text-purple-800 flex font-bold text-md mt-8 justify-center items-center w-full">COMO VERIFICAR NUESTRA AUTENTICIDAD</p>

            <p className="text-lg text-justify mt-8">Para verificar nuestra legitimidad te sugerimos los siguientes pasos:</p>

            
            <p className="text-lg text-justify mt-8">1. Googlea Agencia De Viajes Aterriza.co y verifica nuestros datos oficiales.</p>

            <p className="text-lg text-justify mt-8">2. Descarga nuestro Registro Nacional de Turismo RNT.<span className="text-red-500 "> Descargar 👈</span></p>

            <p className="text-lg text-justify mt-8">3. Googlea o ingresa a la página oficial de confecamaras e ingresa los datos proporcionados en el RNT. Puedes dirigirte a la página oficial de confecamaras dando click aqui. 
            <NavLink className="text-red-500" to='https://rnt.confecamaras.co/establecimientos'> CONFECAMRAS</NavLink>     
            </p>

            <p className="w-full text-lg text-justify mt-8">3. Googlea o ingresa a la página oficial de la contraloria de la nacion y consulta nuestros antecedentes.Puedes dirigirte a la página oficial de la contraloría dando click aqui.<NavLink className="text-red-500 mb-6 " to='https://www.contraloria.gov.co/web/guest/persona-juridica'> CONTRALORIA GENERAL DE LA REPÚBLICA</NavLink>   
         </p>
            </div>
    
    )
}

export { InfoQuienesSomos }