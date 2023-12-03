import Song, { SongType } from '../Song/Song';

function Songlist({ songs }: { songs: SongType[] }) {
  console.log(songs);
  const displayedSongs = songs.map((song) => {
    return <Song key={song.id} song={song} />;
  });
  return <div>{displayedSongs}</div>;
}

export default Songlist;
