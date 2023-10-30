import React, { createContext, useContext, useState, useEffect } from 'react';

const MusicPlayerContext = createContext();

export function MusicPlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState([]);
  const [indexSong, setIndexSong] = useState(0);
  const [songs, setSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MusicPlayerContext.Provider value={{ currentSong, setCurrentSong, songs, indexSong, setIndexSong, isPlaying, setIsPlaying }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}
