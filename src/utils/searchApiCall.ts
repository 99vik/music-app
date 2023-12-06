export async function searchSong(query: string) {
  const response = fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}&limit=10`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    }
  );
  const data = (await response).json();
  return data;
}
