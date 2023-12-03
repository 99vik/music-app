import Song, { SongType } from '../Song';

function Songlist({ songs }: { songs: SongType[] }) {
  console.log(songs);
  const displayedSongs = songs.map((song) => {
    return <Song key={song.id} song={song} />;
  });
  return (
    <div className="pb-36 h-screen overflow-y-scroll no-scrollbar">
      {displayedSongs}
    </div>
  );
}

export default Songlist;
