import React, { useState } from 'react';
import hotelesDecameron from './hotelesDecameron.json';

const Formulario = () => {
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
  const [hotelSeleccionado, setHotelSeleccionado] = useState('');
  const [fechaEntrada, setFechaEntrada] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [cantidadAdultos, setCantidadAdultos] = useState('');
  const [cantidadNinos, setCantidadNinos] = useState('');
  const [hotelesFiltrados, setHotelesFiltrados] = useState([]);
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

    // Filtrar hoteles por la ciudad seleccionada
    const hotelesCiudad = hotelesDecameron.find((ciudad) => ciudad.ciudad === ciudadSeleccionada);
    setHotelesFiltrados(hotelesCiudad ? hotelesCiudad.hoteles : []);
    setHotelSeleccionado(''); // Limpiar la selección de hotel al cambiar la ciudad
  };

  const handleCotizar = () => {
    console.log('hola')
    // Construir el objeto de datos a enviar al servidor
    const data = {
      hotel: hotelSeleccionado,
      fecha_entrada: fechaEntrada,
      fecha_salida: fechaSalida,
      cantidad_adultos: cantidadAdultos,
      cantidad_ninos: cantidadNinos,
      // Añadir otros datos según sea necesario
    };

    // Realizar la solicitud al servidor
    fetch('http://35.188.208.251:5000/api/cotizar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then(response => response.json())
      .then(result => {
        // Manipular el resultado según sea necesario
        console.log('Resultado de la cotización:', result.resultado);
      })
      .catch(error => {
        console.error('Error al cotizar:', error);
      });
  };

  

  return (
    <div className="md:py-7 m-3 mb-20 w-auto h m-auto flex flex-col justify-center items-center border border-purple-800 border-2 rounded-2xl px-8 mb-12">
      <p className="text-purple-800 flex font-bold text-sm justify-center mt-4">REALIZA TU COTIZACION RAPIDAMENTE</p>

      <form>
        <ul className="py-4 space-y-4 md:flex gap-2 md:space-y-0 md:flex-wrap ">
          <li className="mb-4">
            <label htmlFor="ciudad" className="text-purple-800 text-md mb-1 block">{tipoDatosCotizacion[0]}</label>
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
            <label htmlFor="hotel" className="text-purple-800 text-md mb-1 block">{tipoDatosCotizacion[1]}</label>
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
            <label htmlFor="fechaEntrada" className="text-purple-800 text-md mb-1 block">{tipoDatosCotizacion[2]}</label>
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
            <label htmlFor="fechaSalida" className="text-purple-800 text-md mb-1 block">{tipoDatosCotizacion[3]}</label>
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
            <label htmlFor="cantidadAdultos" className="text-purple-800 text-md mb-1 block">{tipoDatosCotizacion[4]}</label>
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
            <label htmlFor="cantidadNinos" className="text-purple-800 text-md mb-1 block">{tipoDatosCotizacion[5]}</label>
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
  );
};


export { Formulario };






