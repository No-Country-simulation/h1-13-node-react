import { useState,useEffect } from "react";
const PersonalData = () => {
    const [historia, setHistoria] = useState({
      numero_historia:"",
      dni:"",
      apellido:"",
      nombre:"",
      edad:"",
      sexo:"",
      ocupacion:"",
      fecha_nacimiento:"",
      estado_civil:"",
      nacionalidad:"",
      residencia_actual:"",
      grado_instruccion:"",
      fecha_internacion:"",
      sala:"",
      cama:"",
      procedencia:"",

    });
  
    useEffect(() => {
      fetch('/api/personal-data')
        .then(response => response.json())
        .then(data => setHistoria(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div className="p-6 bg-white shadow-md rounded-md">
        <h2 className="text-sm text-pinkDark">DATOS PERSONALES</h2>
        <div className="grid grid-cols-1 gap-4">
        
          <p className="text-xs"><strong>Número de Historia:</strong> {historia.numero_historia}</p>
          <p className="text-xs"><strong>DNI:</strong> {historia.dni}</p>
          <p className="text-xs"><strong>Apellido:</strong> {historia.apellido}</p>
          <p className="text-xs"><strong>Nombre:</strong> {historia.nombre}</p>
          <p className="text-xs"><strong>Edad:</strong> {historia.edad} años</p>
          <p className="text-xs"><strong>Sexo:</strong> {historia.sexo}</p>
          <p className="text-xs"><strong>Ocupación:</strong> {historia.ocupacion}</p>
          <p className="text-xs"><strong>Fecha de Nacimiento:</strong> {historia.fecha_nacimiento}</p>
          <p className="text-xs"><strong>Estado Civil:</strong> {historia.estado_civil}</p>
          <p className="text-xs"><strong>Nacionalidad:</strong> {historia.nacionalidad}</p>
          <p className="text-xs"><strong>Residencia Actual:</strong> {historia.residencia_actual}</p>
          <p className="text-xs"><strong>Grado de Instrucción:</strong> {historia.grado_instruccion}</p>
          <p className="text-xs"><strong>Fecha de Internación:</strong> {historia.fecha_internacion}</p>
          <p className="text-xs"><strong>Sala:</strong> {historia.sala}</p>
          <p className="text-xs"><strong>Cama:</strong> {historia.cama}</p>
          <p className="text-xs"><strong>Procedencia:</strong> {historia.procedencia}</p>
        </div>
      </div>
    );
  };
  
  export default PersonalData;
  