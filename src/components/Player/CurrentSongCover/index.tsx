import { SongType } from '../../Main/SongCard/songType';

function CurrentSongCover({ currentSong }: { currentSong: SongType }) {
  return (
    <>
      <img
        src={currentSong.album.cover_medium}
        alt="album image"
        className="h-16 rounded-full"
      />
      <div className="text-sm flex flex-col justify-center">
        <p className="font-bold ">{currentSong.title}</p>
        <p>{currentSong.artist.name}</p>
      </div>
    </>
  );
}

export default CurrentSongCover;
