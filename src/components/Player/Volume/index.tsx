import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setVolume } from '../../../redux/musicPlayer/musicPlayerSlice';
import VolumeIcon from './VolumeIcon';

function Volume() {
  const volume = useSelector((state: RootState) => state.currentSong.volume);
  const dispatch = useDispatch();

  function handleTimeChange(e: React.BaseSyntheticEvent<Event>) {
    dispatch(setVolume(e.target.value));
  }

  return (
    <>
      <VolumeIcon volume={volume} />
      <input
        onInput={(e) => {
          handleTimeChange(e);
        }}
        type="range"
        step={0.05}
        value={volume}
        min={0}
        max={1}
        className="accent-indigo-500 h-[3px] w-[100px]"
      />
    </>
  );
}

export default Volume;
