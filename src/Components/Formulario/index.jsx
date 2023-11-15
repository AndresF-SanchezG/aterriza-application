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
        <ul className="py-4 space-y-4 md:flex gap-2 md:space-y-0 wrap">
          <li className="border border-purple-800 border-2 justify-center">
            <select
              className="w-full p-1"
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
          <li className="border border-purple-800 border-2 justify-center">
            <select
              className="w-full p-1"
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
          <li className="border border-purple-800 border-2 justify-center">
            <input
              type="date"
              className="w-full p-1"
              placeholder={tipoDatosCotizacion[2]}
              onChange={(e) => setFechaEntrada(e.target.value)}
              value={fechaEntrada}
              required
            />
          </li>
          <li className="border border-purple-800 border-2 justify-center">
            <input
              type="date"
              className="w-full p-1"
              placeholder={tipoDatosCotizacion[3]}
              onChange={(e) => setFechaSalida(e.target.value)}
              value={fechaSalida}
              required
            />
          </li>
          <li className="border border-purple-800 border-2 justify-center">
            <select
              className="w-full p-1"
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
          <li className="border border-purple-800 border-2 justify-center">
            <select
              className="w-full p-1"
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
            className="mt-4 w-full flex justify-center items-center p-2 bg-purple-800 mb-4 text-white font-bold"
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

