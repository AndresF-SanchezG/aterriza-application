import { CotizacionContext } from '../../Context';
import { useContext, useState } from 'react';

const CatchData = () => {
  const { cotizacionSeleccionada } = useContext(CotizacionContext);

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contacto, setContacto] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  // Funciones de manejo para actualizar el estado
  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleContactoChange = (e) => setContacto(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarFormulario(false);
  };


  return (
    <div>
      {mostrarFormulario ? (
        <div id="formData">
          <div className="mb-4 border border-purple-800 p-4 rounded-md mb-8 ">
            {cotizacionSeleccionada && (
              <div className='text-center'>
                <p className='text-purple-800 font-semibold text-lg'>Tu elección:</p>
                <p>Hotel: {cotizacionSeleccionada.Hotel}</p>
                <p>Habitación: {cotizacionSeleccionada.Habitación}</p>
                <p>Cantidad de adultos: {cotizacionSeleccionada.cant_adultos}</p>
                <p>Cantidad de niños: {cotizacionSeleccionada.cant_niños}</p>
                <p>Desde: {cotizacionSeleccionada.Desde}</p> 
                <p>Hasta: {cotizacionSeleccionada["Hasta*"]}</p> 
                <p>Valor total: ${cotizacionSeleccionada.valor_total.toLocaleString('es-CO')}</p>
              </div>
            )}
            <form className='flex flex-col space-y-4 p-4 rounded-md' onSubmit={handleSubmit}>
              <ul className='flex flex-col'>
                <label htmlFor="nombre">Nombre:</label>
                <input
                  className='border border-purple-800 p-2'
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleNombreChange}
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  className='border border-purple-800 p-2'
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />

                <label htmlFor="contacto">Contacto:</label>
                <input
                  className='border border-purple-800 p-2'
                  type="number"
                  id="contacto"
                  name="contacto"
                  value={contacto}
                  onChange={handleContactoChange}
                  required
                />
              </ul>
              <input type="submit" className='bg-purple-800 text-white p-2 w-full rounded-md' value="Enviar" />
            </form>
          </div>
        </div>
      ) : (
        <div className='mt-4 text-purple-800 text-lg font-semibold p-2 text-center mb-64'>Gracias por contactarnos, pronto nos contactaremos contigo</div>
      )}
    </div>
  );
};

export { CatchData };