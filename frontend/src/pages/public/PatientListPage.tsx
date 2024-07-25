import React, { useEffect, useState } from 'react'
import MoreIcon from '../../svg/MoreIcon'
import Profilewoman1 from '../../assets/profile/perfilmujer1.png'
import Profilewoman2 from '../../assets/profile/perfilmujer2.png'
import ChatButtonIcon from '../../svg/ChatButtonIcon'
import HistoryButtonIcon from '../../svg/HistoryButtonIcon'
const PatientListPage = () => {
  const [patients, setPatients] = useState([
    {
      id: 0,
      ProfileIcon: Profilewoman1,
      Name: "Daniela Montero",
      FileNumber: "FM8997251574"
    },
    {
      id: 1,
      ProfileIcon: Profilewoman2,
      Name: "Lorena Lombardo",
      FileNumber: "FM9877665635"
    }
  ]);
  const fetchDatapatients = async () => {

    const response = await fetch('/api/patients'); // Cambia esto a la URL de tu API
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.log(console.error());

    }

  };

  const RenderListPatients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
      const getPatients = async () => {
        const data = await fetchDatapatients();
        setPatients(data);
      };

      getPatients();
    }, []);
  }
  return (
    <main >
      <div className='flex justify-center items-end space-x-20 space-y-10 w-full'>
        <h1 className='text-pinkDark font-bold text-xl'>Lista de pacientes.</h1>
        <button className='flex justify-center rounded-lg w-[95px] h-[30px] bg-lightBlueLoadButton items-center text-sm'>Cargar<MoreIcon /></button>
      </div>
      <div className='mt-2'>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id} className="mb-2 p-2 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={patient.ProfileIcon} alt="Profile icon" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-bold text-xs">{patient.Name}</p>
                  <div className='flex items-center space-x-2'>
                    <p className='text-xs'>LEGAJO:</p>
                    <p className='text-xs'>{patient.FileNumber}</p>
                  </div>
                </div>
              </div>
              <div className='space-x-4 flex items-center '>
                <button className='bg-lightBlueLoadButton rounded-full w-[27px] h-[28px] flex items-center justify-center'><ChatButtonIcon /></button>
                <button className='bg-pinkLight rounded-full w-[27px] h-[28px] flex items-center justify-center'><HistoryButtonIcon /></button>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </main>
  )
}

export default PatientListPage