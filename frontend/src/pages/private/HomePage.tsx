import SearchInput from "../../components/SearchInput";
import SidebarMenu from "../../components/SidebarMenu";
import bannerinformacion from "../../assets/banner1.png";
import bell from "../../assets/camp.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import bannernuevo from "../../assets/bannersistemanuevo.png";
// import Sidebar from "../../components/Sidebar";
export const HomePage = () => {
  const handleSearch = (term: string) => {
    console.log("Search term:", term);
    // Lógica de búsqueda aquí
  };

  return (
    <main className="w-full h-screen ">
      <div className="flex items-start ml-[30%] justify-between max-md:ml-[15%]">
       
        <SearchInput onSearch={handleSearch}></SearchInput>
        
        <img src={bell} alt="" className="w-12 max-md:w-1/12 pt-1" />
        <SidebarMenu />
        
      </div>
      <div className="flex items-center justify-center pt-3 ">
        <img src={bannerinformacion} alt="" className="w-9/12" />
      </div>
      <div className="flex items-center justify-center p-3 space-x-1">
        <div className="w-52 max-sm:w-[7rem]">
          <img src={banner2} alt="" className="w-full" />
        </div>
        <div className="max-sm:w-[7.5rem]">
          <img src={banner3} alt="" className="w-full rounded-lg" />
        </div>
        <div className="max-sm:w-[7rem]">
          <img src={banner4} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <div className="flex items-center justify-center relative bottom-2">
        <img src={bannernuevo} alt="" className="w-9/12 rounded-lg" />
      </div>
    </main>
  );
};
