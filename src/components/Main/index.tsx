import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetViewQuery } from '../../redux/playlists/playlistsSlice';
import { playlistIDs } from '../../redux/playlists/playlistIDs';

function Main() {
  const currentView = useSelector((state: RootState) => state.currentView.view);
  const { data, error, isLoading } = useGetViewQuery(playlistIDs[currentView]);

  return (
    <div>
      {console.log(currentView)}
      {console.log(data)}
      <p>Main</p>
    </div>
  );
}

export default Main;
