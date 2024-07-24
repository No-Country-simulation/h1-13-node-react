import { useState } from 'react';
import tituloside from '../assets/titlepng 1.png';
import receta from '../assets/iconos/receta.svg';
import salir from '../assets/iconos/salir.svg';
import userside from '../assets/iconos/userside.svg';
import ajustes from '../assets/iconos/ajustes.svg';
import {HamburguerIcon} from '../svg/HamburguerIcon';
const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botón de hamburguesa */}
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none "
      >
        <HamburguerIcon />
      </button>

      {/* Menú lateral */}
      <div
        className={`fixed inset-y-0 right-0 z-40 h-screen transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-pinkLightside text-white w-64 p-4 `}
      >
        <div>
          <img src={tituloside} alt="titulo" />
        </div>
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 "
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="mt-10 pt-5 space-y-3 max-md:mt-5">
          {
            isDoctor ? (
              <>
                <a href="#" className="py-2.5 px-4 text-black bg-orange-200 rounded transition duration-200 flex items-center justify-between max-md:text-sm">
                  Pacientes <img src={userside} />
                </a>
                <a href="#" className="py-2.5 px-4 text-black bg-orange-200 rounded transition duration-200 flex items-center justify-between max-md:text-sm">
                  Turnos <img src={receta} />
                </a>
              </>

            ) : 
            (
              <>
                <a href="#" className="py-2.5 px-4 text-black bg-orange-200 rounded transition duration-200 flex items-center justify-between max-md:text-sm">
                  Prepaga <img src={userside} />
                </a>
                <h2 className="text-black">TRATAMIENTO</h2>
                <a href="#" className="py-2.5 px-4 text-black bg-orange-200 rounded transition duration-200 flex items-center justify-between max-md:text-sm">
                  Medicación <img src={userside} />
                </a>
                <a href="#" className="py-2.5 px-4 text-black bg-orange-200 rounded transition duration-200 flex items-center justify-between max-md:text-sm">
                  Nutrición <img src={userside} />
                </a>
                <a href="#" className="py-2.5 px-4 text-black bg-orange-200 rounded transition duration-200 flex items-center justify-between max-md:text-sm">
                  Actividad Física <img src={userside} />
                </a>
              </>
            )
          }
        </nav>
        <div className='mt-5 pt-80 space-y-3 max-md:mt-1'>
          <a href="#" className="py-2.5 px-4 text-black bg-orange-200 rounded transition duration-200 flex items-center justify-between max-md:text-sm">Configuración <img src={ajustes} /></a>
          <a href="#" className="py-2.5 px-4 text-black bg-orange-200 rounded transition duration-200 flex items-center justify-between max-md:text-sm">Cerrar sesión <img src={salir} /></a>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
