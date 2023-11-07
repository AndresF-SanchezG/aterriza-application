
const Formulario = () => {
    const tipoDatosCotizacion = ['Ciudad','Selecciona tu Hotel',  'Fecha de entrada', 'Fecha de salida', 'Ingresa la cantidad de adultos', 'Ingresa la cantidad de niños'];
    return(
 
    <div className="md:py-7 m-3 mb-20 w-auto h m-auto flex flex-col justify-center items-center border border-purple-800 border-2 rounded-2xl px-8 mb-12">
        <p className="text-purple-800 flex font-bold text-sm justify-center mt-4">REALIZA TU COTIZACION RAPIDAMENTE</p>
  
             <form >
           
             <ul className="py-4 space-y-4  md:flex gap-2 md:space-y-0 wrap">
             {tipoDatosCotizacion?.map((dato) => (
                 <li className="border border-purple-800 border-2  justify-center">
                     <select className="w-full p-1">
                     <option className="w-full">{dato}</option>
                    
                     </select>
                    
                 </li>
                 ))}
                 
                  
                </ul>
                <div className="w-full justify-center items-center flex">
                <button className="mt-4 w-full flex justify-center items-center p-2 bg-purple-800 mb-4 text-white font-bold">COTIZAR</button>
                </div>
                
            </form>
          

      
    </div>
    )
}

export { Formulario }