import { useEffect, useState } from 'react'

const MedicalHistory = () => {
    const [medicalHistory, setMedicalHistory] = useState({
        infoalcohol: "",
        infotabaco: "",
        infodrogas: "",
        infoinfusiones: "",
        infoalimentacion: ""
    });

    useEffect(() => {
        fetch('/api/medical-history')
            .then(response => response.json())
            .then(data => setMedicalHistory(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl  text-pinkDark max-md:text-sm">DATOS PERSONALES</h2>
            <div className="grid grid-cols-1 gap-4">
                <h3 className="text-xl text-pinkDark max-md:text-sm">HÁBITOS TOXICOS</h3>
                <div className="grid grid-cols-1 gap-4">
                    <p className="text-base max-md:text-xs"><strong>Alcohol:</strong> {medicalHistory.infoalcohol}</p>
                    <p className="text-base max-md:text-xs"><strong>Tabaco:</strong> {medicalHistory.infotabaco}</p>
                    <p className="text-base max-md:text-xs"><strong>Drogas:</strong> {medicalHistory.infodrogas}</p>
                    <p className="text-base max-md:text-xs"><strong>Infusiones:</strong> {medicalHistory.infoinfusiones}</p>
                    <div />
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <h3 className="text-xl text-pinkDark max-md:text-sm">HÁBITOS FISIOLOGICOS</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <p className="text-base max-md:text-xs"><strong>Alimentación:</strong> {medicalHistory.infoalimentacion}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MedicalHistory