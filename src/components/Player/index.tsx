import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function Player() {
  const currentSong = useSelector((state: RootState) => state.currentSong.song);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    pauseSong();
    setAudio(new Audio(currentSong?.preview));
  }, [currentSong]);

  function playSong() {
    setIsPlaying(true);
    audio?.play();
  }

  function pauseSong() {
    setIsPlaying(false);
    audio?.pause();
  }

  if (!currentSong) return;

  return (
    <div className="fixed bottom-0 px-16 py-2 w-full backdrop-blur rounded-t-2xl  bg-violet-400/30 h-20 grid grid-cols-4 items-center justify-items-center">
      {console.log(audio)}
      <div className="flex justify-self-start gap-3 text-neutral-200">
        <img
          src={currentSong.album.cover_medium}
          alt="album image"
          className="h-16 rounded-full"
        />
        <div className="text-sm">
          <p className="font-bold ">{currentSong.title}</p>
          <p>{currentSong.artist.name}</p>
        </div>
      </div>
      <div className="col-span-2">
        {isPlaying ? (
          <button onClick={pauseSong} className="hover:scale-105">
            <FaPauseCircle className="text-white h-10 w-10" />
          </button>
        ) : (
          <button onClick={playSong} className="hover:scale-105">
            <FaPlayCircle className="text-white h-10 w-10" />
          </button>
        )}
      </div>
      <p>a</p>
    </div>
  );
}

export default Player;
