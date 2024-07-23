
import MedicalHistory from "../components/MedicalHistory"
import PersonalData from "../components/PersonalData"
import BackbuttonIcon from "../svg/BackButtonIcon"

const HistoryPage = () => {
    return (
        
        <main className="relative h-screen overflow-hidden">
            <div className="relative mt-12 h-full overflow-y-auto">
                <div className="flex justify-center items-center relative">
                    <button className="absolute left-7">
                        <BackbuttonIcon />
                    </button>
                    <h1 className="text-pinkDark text-base font-bold">Historia clinica</h1>
                </div>
                <div>
                    <PersonalData />
                </div>
                <div>
                    <MedicalHistory />
                </div>
            </div>
        </main>


    )
}

export default HistoryPage