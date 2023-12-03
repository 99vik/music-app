import { FiSearch } from 'react-icons/fi';

function Searchbar() {
  return (
    <div className="bg-violet-900/30 focus-within:border-violet-600 mt-5 transition border border-violet-500/20 rounded-full w-[300px] flex items-center">
      <label htmlFor="search" className="cursor-pointer">
        <FiSearch className="text-white w-5 h-5 ml-4" />
      </label>
      <input
        id="search"
        type="text"
        className="outline-none bg-transparent rounded-full px-3 py-1 flex-1 text-white"
        placeholder="Search.."
      />
    </div>
  );
}

export default Searchbar;
