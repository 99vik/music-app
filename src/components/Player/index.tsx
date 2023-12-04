import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useRef, useState } from 'react';
import CurrentSongCover from './CurrentSongCover';
import Controls from './Controls';
import { setIsPlaying } from '../../redux/musicPlayer/musicPlayerSlice';
import Progressbar from './Progressbar';
import Volume from './Volume';

function Player() {
  const [, setTime] = useState<number | undefined>(0);
  const currentSong = useSelector((state: RootState) => state.currentSong.song);
  const isPlaying = useSelector(
    (state: RootState) => state.currentSong.isPlaying
  );
  const volume = useSelector((state: RootState) => state.currentSong.volume);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dispatch = useDispatch();

  if (audioRef.current) {
    audioRef.current.volume = volume;
  }

  useEffect(() => {
    if (currentSong) {
      dispatch(setIsPlaying(false));
      setTimeout(() => {
        dispatch(setIsPlaying(true));
      }, 150);
    }
  }, [currentSong, dispatch]);

  useEffect(() => {
    if (isPlaying) {
      playSong();
    } else {
      pauseSong();
    }
  }, [isPlaying]);

  function playSong() {
    audioRef.current?.play();
  }

  function pauseSong() {
    audioRef.current?.pause();
  }

  if (!currentSong) return;

  return (
    <div className="fixed bottom-0 px-16 py-2 w-full backdrop-blur rounded-t-2xl border-t border-violet-800/80 bg-violet-950/70 h-20 grid grid-cols-4 items-center justify-items-center">
      <div className="flex justify-self-start gap-3 text-neutral-200">
        <CurrentSongCover currentSong={currentSong} />
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <Controls />
        <audio
          autoPlay={isPlaying}
          onLoad={playSong}
          src={currentSong.preview}
          ref={audioRef}
          onTimeUpdate={() => setTime(audioRef.current?.currentTime)}
          onEnded={() => dispatch(setIsPlaying(false))}
          loop={false}
        />
        <Progressbar audio={audioRef.current} />
      </div>
      <div className="flex items-center justify-self-end relative text-neutral-200">
        <Volume />
      </div>
    </div>
  );
}

export default Player;
