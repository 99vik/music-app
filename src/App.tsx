import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changePopular,
  useGetPopularQuery,
} from './redux/playlists/playlistsSlice';
import { RootState } from './redux/store';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Player from './components/Player';

export default function App() {
  // const [currentView, setCurrentView] = useState('popular');
  // const { data, error, isLoading } = useGetPopularQuery(currentView);
  // const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <Main />
      <Player />
    </div>
  );
}
