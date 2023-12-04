import { useSelector, useDispatch } from 'react-redux';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
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
          <FaPauseCircle className="text-white h-10 w-10" />
        </button>
      ) : (
        <button
          onClick={() => dispatch(setIsPlaying(true))}
          className="hover:scale-105"
        >
          <FaPlayCircle className="text-white h-10 w-10" />
        </button>
      )}
    </>
  );
}

export default Controls;
