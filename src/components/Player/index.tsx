import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function Player() {
  const currentSong = useSelector((state: RootState) => state.currentSong.song);

  return (
    <div className="fixed bottom-0 w-full backdrop-blur-md rounded-t-xl  bg-violet-400/10 h-20">
      {console.log(currentSong)}
      <p>Player</p>
    </div>
  );
}

export default Player;
