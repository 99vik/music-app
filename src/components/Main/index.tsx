import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetViewQuery } from '../../redux/playlists/playlistsSlice';
import { playlistIDs } from '../../redux/playlists/playlistIDs';
import { setCurrentPlaylist } from '../../redux/musicPlayer/musicPlayerSlice';
import Searchbar from './Searchbar';
import Songlist from './SongList';
import LoadingCards from './LoadingCards';
import { useState, useEffect } from 'react';
import { SongType } from './SongCard/songType';
import { searchSong } from '../../utils/searchApiCall';

function Main() {
  const currentView = useSelector((state: RootState) => state.currentView.view);
  const currentPlaylist = useSelector(
    (state: RootState) => state.currentSong.playlist
  );
  const searchQuery = useSelector(
    (state: RootState) => state.currentView.search
  );
  const { data, status } = useGetViewQuery(playlistIDs[currentView]);
  const [searchData, setSearchData] = useState<SongType[] | null>(null);
  const [searchDataLoader, setSearchDataLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getQuery() {
      const data = await searchSong(searchQuery!);
      setSearchData(data.data);
      setSearchDataLoader(false);
    }
    if (searchQuery) {
      setSearchDataLoader(true);
      getQuery();
    } else {
      setSearchData(null);
    }
  }, [searchQuery]);

  function setPlaylist() {
    if (currentView === 'Discover' && searchQuery) {
      dispatch(setCurrentPlaylist(null));
      return;
    }
    if (currentPlaylist.id !== data.id) {
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
        {currentView === 'Discover' && searchData ? (
          searchData.length === 0 ? (
            <p className="text-white text-xl font-semibold text-center mt-20">
              No songs found..
            </p>
          ) : (
            <Songlist songs={searchData} setPlaylist={setPlaylist} />
          )
        ) : status === 'pending' || searchDataLoader ? (
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
