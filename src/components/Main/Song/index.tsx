export interface SongType {
  album: object;
  artist: object;
  id: number;
  title: string;
  preview: string;
}

function Song({ song }: { song: SongType }) {
  return (
    <div>
      <p>{song.title}</p>
    </div>
  );
}

export default Song;
