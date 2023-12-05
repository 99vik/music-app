import { SongType } from '../../Main/SongCard/songType';

function getNextSong(playlist: SongType[], currentSong: SongType) {
  const index = playlist.findIndex((song) => {
    return song.id == currentSong.id;
  });
  return index + 1 < playlist.length ? playlist[index + 1] : playlist[0];
}

function getPreviousSong(playlist: SongType[], currentSong: SongType) {
  const index = playlist.findIndex((song) => {
    return song.id == currentSong.id;
  });
  return index - 1 >= 0 ? playlist[index - 1] : playlist[playlist.length - 1];
}

function getRandomSong(playlist: SongType[], currentSong: SongType) {
  let randomSong;
  do {
    randomSong = playlist[Math.floor(Math.random() * playlist.length)];
  } while (randomSong.id === currentSong.id);
  return randomSong;
}

export { getNextSong, getPreviousSong, getRandomSong };
