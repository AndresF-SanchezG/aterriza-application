import React, { useState, useEffect, useContext } from 'react';
import { CotizacionContext } from '../../Context'
import { NavLink} from 'react-router-dom';
import { CatchData } from '../CatchData';

import hotelesDecameron from './hotelesDecameron.json';

const Formulario = () => {
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
  const [hotelSeleccionado, setHotelSeleccionado] = useState('');
  const [fechaEntrada, setFechaEntrada] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [cantidadAdultos, setCantidadAdultos] = useState('');
  const [cantidadNinos, setCantidadNinos] = useState('');
  const [hotelesFiltrados, setHotelesFiltrados] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [result, setResult] = useState([]);
  const [mostrarCotizacion, setMostrarCotizacion] = useState(false); // Nuevo estado
  const [cotizacionSeleccionada, setCotizacionSeleccionada] = useState({});

  const tipoDatosCotizacion = [
    'Ciudad',
    'Hotel',
    'Fecha de entrada',
    'Fecha de salida',
    'Cantidad de adultos',
    'cantidad de niños'
  ];

  const handleCiudadChange = (e) => {
    const ciudadSeleccionada = e.target.value;
    setCiudadSeleccionada(ciudadSeleccionada);

    const hotelesCiudad = hotelesDecameron.find((ciudad) => ciudad.ciudad === ciudadSeleccionada);
    setHotelesFiltrados(hotelesCiudad ? hotelesCiudad.hoteles : []);
    setHotelSeleccionado('');
  };



  const handleCotizar = () => {
    const data = {
      hotel: hotelSeleccionado,
      fecha_entrada: fechaEntrada,
      fecha_salida: fechaSalida,
      cantidad_adultos: cantidadAdultos,
      cantidad_ninos: cantidadNinos,
    };

    setMostrarFormulario(false);
    setMostrarCotizacion(true);

    fetch('http://35.188.208.251:5000/api/cotizar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((responseData) => {
        setResult(responseData.resultado);
        // console.log('Resultado de la cotización:', responseData.resultado);
        if (responseData.resultado.length > 0) {
          setCotizacionSeleccionada(0); 
        }
      })
      .catch((error) => {
        console.error('Error al cotizar:', error);
      });
  };
  const context = useContext(CotizacionContext);
  const handleCatchData = (index) => {

    const cotizacionSeleccionada = result[index];
    context.setCotizacionSeleccionada(cotizacionSeleccionada);
    // console.log('Información seleccionada:', cotizacionSeleccionada);
  
    setMostrarFormulario(false);
    setMostrarCotizacion(true);
  };



  const resetForm = () => {
    setCiudadSeleccionada('');
    setHotelSeleccionado('');
    setFechaEntrada('');
    setFechaSalida('');
    setCantidadAdultos('');
    setCantidadNinos('');
    setHotelesFiltrados([]);
    setMostrarFormulario(true);
    setResult([]);
    setMostrarCotizacion(false);
  };

 

  useEffect(() => {
    if (!mostrarFormulario) {
      const data = {
        hotel: hotelSeleccionado,
        fecha_entrada: fechaEntrada,
        fecha_salida: fechaSalida,
        cantidad_adultos: cantidadAdultos,
        cantidad_ninos: cantidadNinos,
      };

      fetch('http://localhost:5000/api/cotizar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((responseData) => {
          setResult(responseData.resultado);
          console.log('Resultado de la cotización:', responseData.resultado);
     
        })
        .catch((error) => {
          console.error('Error al cotizar:', error);
        });
    }
  }, [mostrarFormulario, hotelSeleccionado, fechaEntrada, fechaSalida, cantidadAdultos, cantidadNinos]);

  return (
    <div>
      {mostrarFormulario ? (
        <div className="md:py-7 m-3 mb-20 w-auto h m-auto flex flex-col justify-center items-center border border-purple-800 border-2 rounded-2xl px-8 mb-12">
          <p className="text-purple-800 flex font-bold text-sm justify-center mt-4">
            REALIZA TU COTIZACION RAPIDAMENTE
          </p>

          <form>
            <ul className="py-4 space-y-4 md:flex gap-2 md:space-y-0 md:flex-wrap ">
              <li className="mb-4">
                <label htmlFor="ciudad" className="text-purple-800 text-md mb-1 block">
                  {tipoDatosCotizacion[0]}
                </label>
                <select
                  id="ciudad"
                  className="w-48 p-2 border border-purple-800 rounded-md border-2"
                  onChange={handleCiudadChange}
                  value={ciudadSeleccionada}
                  required
                >
                  <option value=""></option>
                  {hotelesDecameron.map((ciudad) => (
                    <option key={ciudad.ciudad} value={ciudad.ciudad}>
                      {ciudad.ciudad}
                    </option>
                  ))}
                </select>
              </li>
              <li className="mb-4">
                <label htmlFor="hotel" className="text-purple-800 text-md mb-1 block">
                  {tipoDatosCotizacion[1]}
                </label>
                <select
                  id="hotel"
                  className="w-full p-2 border border-purple-800 rounded-md border-2 h-[2.5rem]"
                  onChange={(e) => setHotelSeleccionado(e.target.value)}
                  value={hotelSeleccionado}
                  required
                >
                  <option value=""></option>
                  {hotelesFiltrados.map((hotel, index) => (
                    <option key={index} value={hotel}>
                      {hotel}
                    </option>
                  ))}
                </select>
              </li>
              <li className="mb-4">
                <label htmlFor="fechaEntrada" className="text-purple-800 text-md mb-1 block">
                  {tipoDatosCotizacion[2]}
                </label>
                <input
                  type="date"
                  id="fechaEntrada"
                  className="w-full p-2 border border-purple-800 rounded-md border-2 h-[2.5rem]"
                  placeholder=""
                  onChange={(e) => setFechaEntrada(e.target.value)}
                  value={fechaEntrada}
                  required
                />
              </li>
              <li className="mb-4">
                <label htmlFor="fechaSalida" className="text-purple-800 text-md mb-1 block">
                  {tipoDatosCotizacion[3]}
                </label>
                <input
                  type="date"
                  id="fechaSalida"
                  className="w-full p-2 border border-purple-800 rounded-md border-2 h-[2.5rem]"
                  placeholder=""
                  onChange={(e) => setFechaSalida(e.target.value)}
                  value={fechaSalida}
                  required
                />
              </li>
              <li className="mb-4">
                <label htmlFor="cantidadAdultos" className="text-purple-800 text-md mb-1 block">
                  {tipoDatosCotizacion[4]}
                </label>
                <select
                  id="cantidadAdultos"
                  className="w-full p-2 border border-purple-800 rounded-md border-2 h-[2.5rem]"
                  onChange={(e) => setCantidadAdultos(e.target.value)}
                  value={cantidadAdultos}
                  required
                >
                  <option value=""></option>
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li className="mb-4">
                <label htmlFor="cantidadNinos" className="text-purple-800 text-md mb-1 block">
                  {tipoDatosCotizacion[5]}
                </label>
                <select
                  id="cantidadNinos"
                  className="w-full p-2 border border-purple-800 rounded-md border-2 h-[2.5rem]"
                  onChange={(e) => setCantidadNinos(e.target.value)}
                  value={cantidadNinos}
                >
                  <option value=""></option>
                  {[...Array(11)].map((_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
            <div className="w-full justify-center items-center flex">
              <button
                className="mt-2 w-full flex justify-center items-center p-2 bg-purple-800 mb-4 text-white font-bold"
                type="button"
                onClick={handleCotizar}
              >
                COTIZAR
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          {mostrarCotizacion && (
            <div>
              <p className="text-purple-800 text-xl font-semibold mb-6 text-center">
                Aqui tenemos tu cotizacion:
              </p>

          
              
              {result.map((resultado, index) => (
                <div key={index} className="mb-4 border border-purple-800 p-4 rounded-md mb-8">
                  <p>Hotel: {resultado.Hotel}</p>
                  <p>Habitación: {resultado.Habitación}</p>
                  <p>Cantidad de adultos: {resultado.cant_adultos}</p>
                  <p>Cantidad de niños: {resultado.cant_niños}</p>
                  <p>Desde: {fechaEntrada}</p>
                  <p>Hasta: {fechaSalida}</p>
                  <p>Valor total: ${Math.round(Number(resultado.valor_total)).toLocaleString('es-CO')}</p>
                  <NavLink to='/registro'>
                  <button
                    className="mt-2 w-full flex justify-center items-center p-2 bg-purple-800 text-white font-bold"
                    type="button"
                    onClick={() => handleCatchData(index)}
                    
                  >
                    Te interesa, deseas que te contactemos?
                  </button>

                  </NavLink>
                  
                </div>
              ))}
              <div className="w-full justify-center items-center flex">
                <button
                  className="w-full flex justify-center items-center p-2 bg-purple-800 mb-8 text-white font-bold"
                  type="button"
                  onClick={resetForm}
                >
                  NUEVA COTIZACION
                </button>
              </div>
              
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { Formulario };






