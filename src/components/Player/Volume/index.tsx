import { useSelector, useDispatch } from 'react-redux';
import {
  IoVolumeOff,
  IoVolumeLow,
  IoVolumeMedium,
  IoVolumeHigh,
} from 'react-icons/io5';
import { useState } from 'react';
import { RootState } from '../../../redux/store';
import { setVolume } from '../../../redux/musicPlayer/musicPlayerSlice';

function Volume({ audio }: { audio: HTMLAudioElement | null }) {
  const volume = useSelector((state: RootState) => state.currentSong.volume);
  const dispatch = useDispatch();

  function handleTimeChange(e: React.BaseSyntheticEvent<Event>) {
    dispatch(setVolume(e.target.value));
  }

  return (
    <>
      <input
        onInput={(e) => {
          handleTimeChange(e);
        }}
        type="range"
        step={0.05}
        value={volume}
        min={0}
        max={1}
        className="accent-indigo-500 h-[3px] w-[100px] mx-4"
      />
    </>
  );
}

export default Volume;
