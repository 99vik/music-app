interface album {
  cover_medium: string;
}

interface artist {
  name: string;
}

export interface SongType {
  album: album;
  artist: artist;
  id: number;
  title_short: string;
  preview: string;
}
