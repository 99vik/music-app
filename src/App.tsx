import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Player from './components/Player';

export default function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <Main />
      <Player />
    </div>
  );
}
