import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetViewQuery } from '../../redux/playlists/playlistsSlice';
import { playlistIDs } from '../../redux/playlists/playlistIDs';
import { setCurrentPlaylist } from '../../redux/musicPlayer/musicPlayerSlice';
import Searchbar from './Searchbar';
import Songlist from './SongList';
import LoadingCards from './LoadingCards';
import { useState, useEffect } from 'react';

function Main() {
  const currentView = useSelector((state: RootState) => state.currentView.view);
  const currentPlaylist = useSelector(
    (state: RootState) => state.currentSong.playlist
  );
  const searchQuery = useSelector(
    (state: RootState) => state.currentView.search
  );
  const { data, status } = useGetViewQuery(playlistIDs[currentView]);
  const [searchData, setSearchData] = useState(null);
  const [searchDataLoader, setSearchDataLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getQuery() {
      const response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}&limit=10`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
          },
        }
      );
      const data = await response.json();
      setSearchData(data.data);
      setSearchDataLoader(false);
    }
    if (searchQuery) {
      setSearchDataLoader(true);
      getQuery();
    }
  }, [searchQuery]);

  function setPlaylist() {
    if (currentPlaylist.id !== data) {
      dispatch(setCurrentPlaylist(data));
    }
  }

  return (
    <div className="bg-gradient-to-br p-4 flex-1 flex flex-col from-black h-screen from-20% overflow-y-hidden to-violet-900">
      <p className="text-white mt-4 text-3xl text-center font-semibold">
        {currentView}
      </p>
      {currentView === 'Discover' && <Searchbar />}
      <div>
        {console.log(searchDataLoader, searchData)}
        {currentView === 'Discover' && searchQuery ? (
          searchDataLoader ? (
            <LoadingCards />
          ) : searchData ? (
            <Songlist songs={searchData} setPlaylist={setPlaylist} />
          ) : (
            <p>errir</p>
          )
        ) : status === 'pending' ? (
          <LoadingCards />
        ) : data.error ? (
          <p className="text-white text-xl font-semibold text-center mt-20">
            Error loading music..
          </p>
        ) : (
          <Songlist songs={data.tracks.data} setPlaylist={setPlaylist} />
        )}
      </div>
    </div>
  );
}

export default Main;
