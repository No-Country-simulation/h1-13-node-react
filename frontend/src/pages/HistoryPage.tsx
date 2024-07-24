
import MedicalHistory from "../components/MedicalHistory"
import PersonalData from "../components/PersonalData"
import BackbuttonIcon from "../svg/BackButtonIcon"
import DownloadLogo from "../svg/DownloadLogo"

const HistoryPage = () => {
    return (

        <main className="relative h-screen overflow-hidden">
            <div className="relative mt-12 h-full overflow-y-auto">
                <div className="flex justify-center items-center relative">

                    <h1 className="text-pinkDark text-base font-bold">Historia clinica</h1>
                    <button className="absolute left-7">
                        <BackbuttonIcon />
                    </button>
                </div>

                <div>
                    <PersonalData />
                </div>
                <div>
                    <MedicalHistory />
                </div>


            </div>
            <div className="absolute bottom-16 right-12">
                <button><DownloadLogo /></button>
            </div>
        </main>


    )
}

export default HistoryPage