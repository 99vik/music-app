export interface SongType {
  album: object;
  artist: object;
  id: number;
  title: string;
  preview: string;
}

function Song({ song }: { song: SongType }) {
  console.log(song);
  return (
    <div className="text-white w-[220px] bg-violet-500/30 rounded-lg p-2">
      <img src={song.album.cover} alt="" className="w-full rounded" />
      <p>{song.title}</p>
    </div>
  );
}

export default Song;
