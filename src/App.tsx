import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePopular } from './redux/playlists/playlistsSlice';
import { RootState } from './redux/store';

export default function App() {
  const [song, setSong] = useState(null);
  const discover = useSelector((state: RootState) => state.playlists.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    const url =
      'https://deezerdevs-deezer.p.rapidapi.com/search/?q=postmalone&limit=10&index=0';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    };
    async function getData() {
      const response = await fetch(url, options);
      const data = await response.json();
      const song = new Audio(data.data[0].preview);
      setSong(song);
    }
    getData();
  }, []);
  return (
    <>
      <button
        onClick={() => {
          song.play();
          console.log(song);
        }}
        className="bg-red-700"
      >
        Play
      </button>
      <button
        onClick={() => {
          dispatch(changePopular());
        }}
        className="bg-red-700"
      >
        change state
      </button>
      {console.log(discover)}
    </>
  );
}
