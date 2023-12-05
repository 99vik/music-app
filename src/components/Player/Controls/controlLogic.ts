import { SongType } from '../../Main/SongCard/songType';

function nextSong(playlist: SongType[], currentSong: SongType) {
  const index = playlist.findIndex((song) => {
    return song.id == currentSong.id;
  });
  return index + 1 < playlist.length ? playlist[index + 1] : playlist[0];
}

function previousSong(playlist: SongType[], currentSong: SongType) {
  const index = playlist.findIndex((song) => {
    return song.id == currentSong.id;
  });
  return index - 1 >= 0 ? playlist[index - 1] : playlist[playlist.length - 1];
}

export { nextSong, previousSong };
