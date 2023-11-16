import React, { useState } from 'react';
import hotelesDecameron from './hotelesDecameron.json';

const Formulario = () => {
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
  const [hotelSeleccionado, setHotelSeleccionado] = useState('');
  const [fechaEntrada, setFechaEntrada] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [cantidadAdultos, setCantidadAdultos] = useState('');
  const [cantidadNinos, setCantidadNinos] = useState('');
  const tipoDatosCotizacion = [
    'Ciudad',
    'Selecciona tu Hotel',
    'Fecha de entrada',
    'Fecha de salida',
    'Ingresa la cantidad de adultos',
    'Ingresa la cantidad de niños'
  ];

  return (
    <div className="md:py-7 m-3 mb-20 w-auto h m-auto flex flex-col justify-center items-center border border-purple-800 border-2 rounded-2xl px-8 mb-12">
      <p className="text-purple-800 flex font-bold text-sm justify-center mt-4">REALIZA TU COTIZACION RAPIDAMENTE</p>

      <form>
        <ul className="py-4 space-y-4 md:flex gap-2 md:space-y-0 md:flex-wrap ">
          <li className="mb-4">
            <label htmlFor="ciudad" className="text-purple-800 text-sm mb-1 block">Ciudad:</label>
            <select
              id="ciudad"
              className="w-full p-2 border border-purple-800 rounded-md border-2 h-[2.5rem]"
              onChange={(e) => setCiudadSeleccionada(e.target.value)}
              value={ciudadSeleccionada}
              required
            >
              <option value="">Ciudad</option>
              {hotelesDecameron.map((ciudad) => (
                <option key={ciudad.ciudadId} value={ciudad.ciudad}>
                  {ciudad.ciudad}
                </option>
              ))}
            </select>
          </li>
          <li className="mb-4">
            <label htmlFor="hotel" className="text-purple-800 text-sm mb-1 block">Selecciona tu Hotel:</label>
            <select
              id="hotel"
              className="w-full p-2 border border-purple-800 rounded-md border-2 h-[2.5rem]"
              onChange={(e) => setHotelSeleccionado(e.target.value)}
              value={hotelSeleccionado}
              required
            >
              <option value="">{tipoDatosCotizacion[1]}</option>
              {hotelesDecameron.map((hotel) => (
                <option key={hotel.hotelDecameronId} value={hotel.nombre}>
                  {hotel.nombre}
                </option>
              ))}
            </select>
          </li>
          <li className="mb-4">
            <label htmlFor="fechaEntrada" className="text-purple-800 text-sm mb-1 block">Fecha de entrada:</label>
            <input
              type="date"
              id="fechaEntrada"
              className="w-full p-2 border border-purple-800 rounded-md border-2 h-[2.5rem]"
              placeholder={tipoDatosCotizacion[2]}
              onChange={(e) => setFechaEntrada(e.target.value)}
              value={fechaEntrada}
              required
            />
          </li>
          <li className="mb-4">
            <label htmlFor="fechaSalida" className="text-purple-800 text-sm mb-1 block">Fecha de salida:</label>
            <input
              type="date"
              id="fechaSalida"
              className="w-full p-2 border border-purple-800 rounded-md border-2 h-[2.5rem]"
              placeholder={tipoDatosCotizacion[3]}
              onChange={(e) => setFechaSalida(e.target.value)}
              value={fechaSalida}
              required
            />
          </li>
          <li className="mb-4">
            <label htmlFor="cantidadAdultos" className="text-purple-800 text-sm mb-1 block">Ingresa la cantidad de adultos:</label>
            <select
              id="cantidadAdultos"
              className="w-full p-2 border border-purple-800 rounded-md border-2 h-[2.5rem]"
              onChange={(e) => setCantidadAdultos(e.target.value)}
              value={cantidadAdultos}
              required
            >
              <option value=""> {tipoDatosCotizacion[4]}</option>
              {[...Array(10)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </li>
          <li className="mb-4">
            <label htmlFor="cantidadNinos" className="text-purple-800 text-sm mb-1 block">Ingresa la cantidad de niños:</label>
            <select
              id="cantidadNinos"
              className="w-full p-2 border border-purple-800 rounded-md border-2 h-[2.5rem]"
              onChange={(e) => setCantidadNinos(e.target.value)}
              value={cantidadNinos}
            >
              <option value=""> {tipoDatosCotizacion[5]}</option>
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
            onClick={() => console.log('Cotizar')}
          >
            COTIZAR
          </button>
        </div>
      </form>
    </div>
  );
};

export { Formulario };




