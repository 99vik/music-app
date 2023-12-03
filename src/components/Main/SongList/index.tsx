import Song from '../Song';
import { SongType } from '../Song/songType';

function Songlist({ songs }: { songs: SongType[] }) {
  const displayedSongs = songs.map((song) => {
    return <Song key={song.id} song={song} />;
  });
  return (
    <div className="pb-64 mt-10 justify-items-center h-screen overflow-y-scroll no-scrollbar grid max-[950px]:grid-cols-2 max-[1200px]:grid-cols-3 max-[1450px]:grid-cols-4 grid-cols-5 gap-y-10">
      {displayedSongs}
    </div>
  );
}

export default Songlist;
