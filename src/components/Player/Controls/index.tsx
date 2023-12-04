import { useSelector, useDispatch } from 'react-redux';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { FaStepBackward, FaStepForward } from 'react-icons/fa';
import { RootState } from '../../../redux/store';
import { setIsPlaying } from '../../../redux/musicPlayer/musicPlayerSlice';

function Controls() {
  const dispatch = useDispatch();
  const isPlaying = useSelector(
    (state: RootState) => state.currentSong.isPlaying
  );

  return (
    <>
      <div className="w-full grid grid-cols-5 justify-items-center">
        <button>a</button>
        <button onClick={() => {}} className="hover:scale-105">
          <FaStepBackward className="text-white h-6 w-6" />
        </button>
        {isPlaying ? (
          <button
            onClick={() => dispatch(setIsPlaying(false))}
            className="hover:scale-105"
          >
            <FaPause className="text-white h-10 w-10" />
          </button>
        ) : (
          <button
            onClick={() => dispatch(setIsPlaying(true))}
            className="hover:scale-105"
          >
            <FaPlay className="text-white h-10 w-10" />
          </button>
        )}
        <button onClick={() => {}} className="hover:scale-105">
          <FaStepForward className="text-white h-6 w-6" />
        </button>
        <button>a</button>
      </div>
    </>
  );
}

export default Controls;
