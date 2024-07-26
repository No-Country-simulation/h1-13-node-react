import { ChangeEvent, FC, useState } from 'react';
import SearchIcon from '../assets/loop.png'; // Asegúrate de tener este ícono o usa uno similar
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
     
       <div className="flex-grow max-w-md flex items-center justify-center border-pinkDarkHover border-2 rounded-full overflow-hidden w-[30rem] max-md:w-28">
          <button
            onClick={handleSearch}
            className="text-gray-500 p-2 transition duration-300 flex items-center justify-center"
          >
            <img src={SearchIcon} className="w-6 h-6" alt="Search" />
          </button>
          <input
            type="text"
            className="p-2 w-full border-none focus:outline-none "
            value={searchTerm}
            onChange={handleChange}
            placeholder=""
          />
        </div>

    );
};

export default SearchInput;
