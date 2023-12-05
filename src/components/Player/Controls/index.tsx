import { useSelector, useDispatch } from 'react-redux';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { FaStepBackward, FaStepForward, FaRandom } from 'react-icons/fa';
import { ImLoop } from 'react-icons/im';

import { RootState } from '../../../redux/store';
import {
  setIsPlaying,
  toggleRandom,
  toggleSongLoop,
} from '../../../redux/musicPlayer/musicPlayerSlice';

function Controls({
  handleNextSongButton,
  handlePreviousSongButton,
  random,
  songLoop,
}: {
  handleNextSongButton: () => void;
  handlePreviousSongButton: () => void;
  random: boolean;
  songLoop: boolean;
}) {
  const dispatch = useDispatch();
  const isPlaying = useSelector(
    (state: RootState) => state.currentSong.isPlaying
  );

  function handleToggleRandom() {
    dispatch(toggleRandom());
  }

  function handleToggleSongLoop() {
    dispatch(toggleSongLoop());
  }

  return (
    <>
      <div className="w-[300px] grid grid-cols-6 justify-items-center">
        <button onClick={handleToggleRandom}>
          <FaRandom
            className={`h-5 w-5 transition ${
              random ? 'text-white' : 'text-white/40'
            }`}
          />
        </button>
        <button onClick={handlePreviousSongButton} className="hover:scale-105">
          <FaStepBackward className="text-white h-6 w-6" />
        </button>
        {isPlaying ? (
          <button
            onClick={() => dispatch(setIsPlaying(false))}
            className="hover:scale-105 col-span-2"
          >
            <FaPause className="text-white h-10 w-10" />
          </button>
        ) : (
          <button
            onClick={() => dispatch(setIsPlaying(true))}
            className="hover:scale-105 col-span-2"
          >
            <FaPlay className="text-white h-10 w-10" />
          </button>
        )}
        <button onClick={handleNextSongButton} className="hover:scale-105">
          <FaStepForward className="text-white h-6 w-6" />
        </button>
        <button onClick={handleToggleSongLoop}>
          <ImLoop
            className={`h-5 w-5 transition ${
              songLoop ? 'text-white' : 'text-white/40'
            }`}
          />
        </button>
      </div>
    </>
  );
}

export default Controls;
