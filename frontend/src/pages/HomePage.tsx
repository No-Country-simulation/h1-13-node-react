import SearchInput from '../components/SearchInput'
import SidebarMenu from '../components/SidebarMenu';
import bell from '../assets/bell.png';
const HomePage = () => {
    const handleSearch = (term: string) => {
        console.log('Search term:', term);
        // Lógica de búsqueda aquí
    };

    return (
        <main className='flex flex-col max-md:items-center'>
            <div className="flex items-start justify-between max-md:pt-4">
                <SidebarMenu />
                <SearchInput onSearch={handleSearch} />
                {/* <div className="flex-grow w-full flex justify-center items-center">
        
        </div> */}
                <a href='#' className='p-2'><img src={bell} className='w-12  max-md:w-10' /></a>
            </div>
            <div className='border-black border-2 w-80 h-56'>
                <p>asdasd</p>
            </div>
        </main>

    )
}

export default HomePage