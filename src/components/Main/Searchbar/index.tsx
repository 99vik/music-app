import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../../redux/currentMainView/currentMainViewSlice';
import { IoClose } from 'react-icons/io5';

function Searchbar() {
  const searchDebounceRef = useRef<HTMLInputElement | null>(null);
  const searchQuery = useSelector(
    (state: RootState) => state.currentView.search
  );
  let timer: ReturnType<typeof setTimeout>;
  const dispatch = useDispatch();

  function handleSearch(value: string | null) {
    if (value!.length < 3) {
      clearSearch();
      return;
    }

    dispatch(setSearchQuery(value));
  }

  function clearSearch() {
    dispatch(setSearchQuery(null));
  }

  const handleSearchChange = (e: React.BaseSyntheticEvent<Event>) => {
    const searchValue = e.target.value;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      handleSearch(searchValue);
    }, 500);
  };

  return (
    <div className="bg-violet-900/30 max-[700px]:self-center  relative focus-within:border-violet-600 mt-5 transition border border-violet-500/20 rounded-full w-[300px] flex items-center">
      <label htmlFor="search" className="cursor-pointer">
        <FiSearch className="text-white w-5 h-5 ml-4" />
      </label>
      <input
        defaultValue={searchQuery ? searchQuery : ''}
        ref={searchDebounceRef}
        onChange={handleSearchChange}
        id="search"
        type="text"
        className="outline-none bg-transparent rounded-full px-3 py-1 flex-1 text-white"
        placeholder="Search.."
      />
      <button
        onClick={() => {
          searchDebounceRef.current!.value = '';
          clearSearch();
        }}
        className={`absolute right-1 ${
          searchQuery ? 'text-white hover:text-white/50' : 'text-white/0'
        }  transition`}
      >
        <IoClose className="w-5 h-5" />
      </button>
    </div>
  );
}

export default Searchbar;
