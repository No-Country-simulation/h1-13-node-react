import { ChangeEvent, FC, useState } from 'react';
import SearchIcon from '../assets/magnifying-glass.png'; // Asegúrate de tener este ícono o usa uno similar
import { SearchInputProps } from '../interfaces/Inputs';

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
     
            <div className="flex items-center justify-center border-pinkDarkHover border-2 rounded-full overflow-hidden w-[30rem]max-md:w-96">
                <button
                    onClick={handleSearch}
                    className=" text-white p-2 hover:bg-gray-300 transition duration-300 w-full"
                >
                    <img src={SearchIcon} className="w-full h-5" />
                </button>
                <input
                    type="text"
                    className="p-2 w-full max-md:w-80"

                    value={searchTerm}
                    onChange={handleChange}
                />

            </div>
        

    );
};

export default SearchInput;
