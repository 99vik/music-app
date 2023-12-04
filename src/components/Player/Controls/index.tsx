import { useSelector, useDispatch } from 'react-redux';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { RootState } from '../../../redux/store';
import { setIsPlaying } from '../../../redux/musicPlayer/musicPlayerSlice';

function Controls() {
  const dispatch = useDispatch();
  const isPlaying = useSelector(
    (state: RootState) => state.currentSong.isPlaying
  );

  return (
    <>
      {isPlaying ? (
        <button
          onClick={() => dispatch(setIsPlaying(false))}
          className="hover:scale-105"
        >
          <FaPause className="text-white h-9 w-9" />
        </button>
      ) : (
        <button
          onClick={() => dispatch(setIsPlaying(true))}
          className="hover:scale-105"
        >
          <FaPlay className="text-white h-9 w-9" />
        </button>
      )}
    </>
  );
}

export default Controls;