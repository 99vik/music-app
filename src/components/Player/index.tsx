import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useRef, useState } from 'react';
import CurrentSongCover from './CurrentSongCover';
import Controls from './Controls';
import {
  setIsPlaying,
  setCurrentSong,
  resetState,
} from '../../redux/musicPlayer/musicPlayerSlice';
import Progressbar from './Progressbar';
import Volume from './Volume';
import {
  getNextSong,
  getPreviousSong,
  getRandomSong,
} from './Controls/controlLogic';
import { IoClose } from 'react-icons/io5';

function Player() {
  const [, setTime] = useState<number | undefined>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);
  const currentSong = useSelector((state: RootState) => state.currentSong.song);
  const volume = useSelector((state: RootState) => state.currentSong.volume);
  const random = useSelector((state: RootState) => state.currentSong.random);
  const currentPlaylist = useSelector(
    (state: RootState) => state.currentSong.playlist.tracks.data
  );
  const isPlaying = useSelector(
    (state: RootState) => state.currentSong.isPlaying
  );
  const songLoop = useSelector(
    (state: RootState) => state.currentSong.songLoop
  );
  const dispatch = useDispatch();

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

  function nextSong() {
    if (currentPlaylist.length === 0) {
      audioRef.current!.currentTime = 0.0;
      audioRef.current!.play();
      return;
    }
    dispatch(setCurrentSong(getNextSong(currentPlaylist, currentSong!)));
  }

  function previousSong() {
    if (currentPlaylist.length === 0) {
      audioRef.current!.currentTime = 0.0;
      return;
    }
    dispatch(setCurrentSong(getPreviousSong(currentPlaylist, currentSong!)));
  }

  function randomSong() {
    dispatch(setCurrentSong(getRandomSong(currentPlaylist, currentSong!)));
  }

  function handleEnded() {
    if (random && currentPlaylist.length !== 0) {
      randomSong();
    } else {
      nextSong();
    }
  }

  function closePlayer() {
    playerRef.current?.classList.add('disappear');
    setTimeout(() => {
      dispatch(resetState());
    }, 250);
  }

  function handlePreviousSongButton() {
    audioRef.current!.currentTime <= 3
      ? previousSong()
      : (audioRef.current!.currentTime = 0.0);
  }

  if (audioRef.current) {
    audioRef.current.volume = volume;
  }

  if (!currentSong) return;

  return (
    <div
      ref={playerRef}
      className="fixed appear bottom-0 max-[850px]:px-4 max-[1100px]:px-8 px-16 py-2 w-full max-[850px]:h-[150px] max-[950px]:h-[110px] h-[90px] backdrop-blur rounded-t-2xl border-t border-violet-800/80 bg-violet-950/70 max-[850px]:grid-cols-1 grid grid-cols-4 items-center justify-items-center"
    >
      <div className="flex max-[850px]:justify-self-center justify-self-start gap-3 text-neutral-200">
        <CurrentSongCover currentSong={currentSong} />
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <Controls
          handleNextSongButton={handleEnded}
          handlePreviousSongButton={handlePreviousSongButton}
          random={random}
          songLoop={songLoop}
        />
        <audio
          autoPlay={isPlaying}
          onLoad={playSong}
          src={currentSong.preview}
          ref={audioRef}
          onTimeUpdate={() => setTime(audioRef.current?.currentTime)}
          onEnded={handleEnded}
          loop={songLoop}
        />
        <Progressbar audio={audioRef.current} />
      </div>
      <div className="flex items-center max-[850px]:hidden justify-self-end relative text-neutral-200">
        <Volume />
      </div>
      <button onClick={closePlayer} className="absolute top-1 right-2">
        <IoClose className="h-6 w-6 transition text-neutral-300 hover:text-white " />
      </button>
    </div>
  );
}

export default Player;
