import { useEffect, useState } from 'react';

export default function App() {
  const [song, setSong] = useState(null);

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
      console.log(data);
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
    </>
  );
}
