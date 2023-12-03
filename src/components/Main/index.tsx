import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetViewQuery } from '../../redux/playlists/playlistsSlice';
import { playlistIDs } from '../../redux/playlists/playlistIDs';
import Searchbar from './Searchbar';
import Songlist from './SongList';

function Main() {
  const currentView = useSelector((state: RootState) => state.currentView.view);
  const { data, status } = useGetViewQuery(playlistIDs[currentView]);

  return (
    <div className="bg-gradient-to-br p-4 flex-1 flex flex-col from-[#0b011b] h-screen overflow-y-hidden to-violet-950">
      <p className="text-white mt-4 text-3xl text-center font-semibold">
        {currentView}
      </p>
      {currentView === 'Discover' && <Searchbar />}
      <div>
        {status === 'pending' ? (
          'Loading..'
        ) : data.error ? (
          'error'
        ) : (
          <Songlist songs={data.tracks.data} />
        )}
      </div>
    </div>
  );
}

export default Main;
