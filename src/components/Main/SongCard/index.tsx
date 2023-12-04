import { SongType } from './songType';
import { FaRegPlayCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setCurrentSong } from '../../../redux/musicPlayer/musicPlayerSlice';

function Song({ song }: { song: SongType }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setCurrentSong(song));
      }}
      className="text-white group hover:bg-violet-600/90 transition cursor-pointer border border-violet-600/60 flex flex-col w-[200px] bg-violet-600/40 rounded-lg p-2"
    >
      <div className="relative">
        <div className="h-full w-full absolute group-hover:bg-neutral-600/50 transition rounded bg-transparent flex justify-center items-center">
          <FaRegPlayCircle className="h-12 w-12 group-hover:text-violet-200 transition text-violet-200/0" />
        </div>
        <img src={song.album.cover_medium} alt="" className="w-full rounded" />
      </div>
      <div className="flex flex-col  flex-1 justify-between">
        <p className="text-sm mt-4 px-1 group-hover:text-white font-semibold text-neutral-200">
          {song.title}
        </p>
        <p className="text-sm my-2 px-1 group-hover:text-white text-neutral-300">
          {song.artist.name}
        </p>
      </div>
    </div>
  );
}

export default Song;
