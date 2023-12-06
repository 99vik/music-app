import { SongType } from './songType';
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentSong,
  setIsPlaying,
} from '../../../redux/musicPlayer/musicPlayerSlice';
import { RootState } from '../../../redux/store';

function Song({
  song,
  setPlaylist,
}: {
  song: SongType;
  setPlaylist: () => void;
}) {
  const dispatch = useDispatch();
  const isPlaying = useSelector(
    (state: RootState) => state.currentSong.isPlaying
  );
  const currentSongID = useSelector(
    (state: RootState) => state.currentSong.songID
  );

  function handleClick() {
    setPlaylist();
    if (song.id !== currentSongID) {
      dispatch(setCurrentSong(song));
    } else if (isPlaying) {
      dispatch(setIsPlaying(false));
    } else {
      dispatch(setIsPlaying(true));
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`text-white group ${
        currentSongID === song.id
          ? 'bg-violet-600/90'
          : 'hover:bg-violet-600/70'
      }  transition cursor-pointer border border-violet-600/60 flex flex-col w-[200px] h-[290px] bg-violet-600/40 rounded-lg p-2`}
    >
      <div className="relative">
        <div
          className={`h-full w-full absolute ${
            currentSongID === song.id
              ? 'bg-neutral-600/50'
              : 'group-hover:bg-neutral-600/50 bg-transparent'
          }  transition rounded `}
        >
          <FaRegPlayCircle
            className={`h-12 w-12 ${
              currentSongID === song.id
                ? isPlaying
                  ? 'text-violet-200/0'
                  : 'text-violet-200'
                : 'group-hover:text-violet-200 text-violet-200/0'
            }  transition absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}
          />
          <FaRegPauseCircle
            className={`h-12 w-12 ${
              currentSongID === song.id
                ? isPlaying
                  ? 'text-violet-200'
                  : 'text-violet-200/0'
                : 'text-violet-200/0'
            }  transition absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}
          />
        </div>
        <img src={song.album.cover_medium} alt="" className="w-full rounded" />
      </div>
      <div
        className={`flex flex-col  flex-1 justify-center ${
          currentSongID === song.id ? 'text-white' : 'text-neutral-200'
        }  transition`}
      >
        <p className="text-sm mt-1 px-1 font-semibold ">{song.title_short}</p>
        <p className="text-sm my-2 px-1 ">{song.artist.name}</p>
      </div>
    </div>
  );
}

export default Song;
