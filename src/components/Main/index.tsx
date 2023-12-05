import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetViewQuery } from '../../redux/playlists/playlistsSlice';
import { playlistIDs } from '../../redux/playlists/playlistIDs';
import { setCurrentPlaylist } from '../../redux/musicPlayer/musicPlayerSlice';
import Searchbar from './Searchbar';
import Songlist from './SongList';
import LoadingCards from './LoadingCards';

function Main() {
  const currentView = useSelector((state: RootState) => state.currentView.view);
  const currentPlaylist = useSelector(
    (state: RootState) => state.currentSong.playlist
  );
  const { data, status } = useGetViewQuery(playlistIDs[currentView]);
  const dispatch = useDispatch();

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
        {status === 'pending' ? (
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
