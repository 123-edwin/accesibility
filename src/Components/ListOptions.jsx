import { useState, useEffect, useRef } from "react";
import './ListOptions.css';
import OptionsIcon from '../Icons/optionsIcon.svg';
import GithubLogo from '../Icons/githubLogo.png'

export function ListOptions() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Referencia al contenedor del dropdown

  const closeDropdown = (event) => {
    // Cierra el dropdown si el clic es fuera del dropdown y del botón
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Agrega el evento de clic al documento
    document.addEventListener('click', closeDropdown);

    // Limpia el evento al desmontar el componente
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      {/* Al hacer clic, se alterna la visibilidad del menú */}
      <button className="dropbtn" onClick={()=>setIsOpen(!isOpen)}>
        <img src={OptionsIcon} alt="Opciones" style={{ width: '20px', height: '20px', color: 'black' }} />
      </button>

      {/* El contenido del dropdown se muestra o se oculta según el estado */}
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        <a href="https://github.com/Isai-bot777"><img src={GithubLogo} className="logo-icon" alt="GitHub"></img></a>
      </div>
    </div>
  );
}
