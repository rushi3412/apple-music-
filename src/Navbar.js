import React, { useState }  from "react";
import { Link, useNavigate, } from 'react-router-dom';
import { IconButton, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useMusicPlayer } from './MusicPlayerContext';
import { PlayArrow, Pause, SkipPrevious, SkipNext, Repeat, Shuffle } from '@mui/icons-material';

function Navbar() {
  const { currentSong, setCurrentSong } = useMusicPlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(false); // Define isLooping state
  const [isShuffling, setIsShuffling] = useState(false);
  // const navigate = useNavigate();

  // This function handles clicking on the song icon.
  const handleSongIconClick = (album, songIndex) => {
    setCurrentSongIndex(songIndex);
    setIsPlaying(true);
  };
  

const songs = [
  "Song 1",
  "Song 2",
  "Song 3",
  
];

function handlePlayPause() {
  setIsPlaying(!isPlaying); // Toggle play/pause state
}

const handleLoop = () => {
  setIsLooping(!isLooping);
};

const handleShuffle = () => {
  setIsShuffling(!isShuffling);
};

const handlePrev = () => {
  if (currentSongIndex > 0) {
    setCurrentSongIndex(currentSongIndex - 1);
    setCurrentSong(songs[currentSongIndex - 1]);
  } else {
    setCurrentSongIndex(songs.length - 1);
    setCurrentSong(songs[songs.length - 1]);
  }
  setIsPlaying(true); // Start playing the new song
};

const handleForward = () => {
  let nextSongIndex;
  if (currentSongIndex < songs.length - 1) {
    nextSongIndex = currentSongIndex + 1;
  } else {
    nextSongIndex = 0;
  }
  setCurrentSongIndex(nextSongIndex);
  setCurrentSong(songs[nextSongIndex]);
};
  return (
    <>
      <div className="navbarcontainer">
        <div className="navbarthreedivs">
          <div className="playstopicons">
          </div>
          
          <div className="songnamediv">
            
          
          {currentSong ? (
              <>
                <div className="songicon" onClick={() => handleSongIconClick("Album Name", currentSongIndex)}>
                  <Link to="/music-player">
                    <button className="song-icon-button">
                      
                      <img src={currentSong.thumbnail} alt={currentSong.title} width="32" height="32" />
                    </button>
                  </Link>
                </div>
                <div className="song-title">
                <span>{currentSong && currentSong.title}</span>
                </div>
                <div className="artist-name">
                <span>{currentSong && currentSong.artist && currentSong.artist.name}</span>
                </div>
              </>
            ) : (
              <div>No song selected</div>
            )}
          {/* </div>          */}
            <div className="appleicon">
              <button>
                
              </button>
            </div>
          </div>
          
          <div className="volumesigndiv">
            <div className="volumediv">
            </div>
            <div className="signdiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              
                viewBox="0 0 18 18">
                <path d="M2.634 5.537a.906.906 0 1 0 0-1.813.906.906 0 1 0 0 1.813zm3.192-.325h9.865a.576.576 0 0 0 .585-.578.578.578 0 0 0-.585-.585H5.826a.574.574 0 0 0-.585.585c0 .325.253.578.585.578zM2.634 9.906c.506 0 .91-.404.91-.91a.906.906 0 0 0-.91-.91.906.906 0 0 0-.91.91c0 .506.405.91.91.91zm3.192-.325h9.865a.582.582 0 1 0 0-1.162H5.826a.572.572 0 0 0-.585.577c0 .325.253.585.585.585zm-3.192 4.694a.91.91 0 1 0-.001-1.82.91.91 0 0 0 0 1.82zm3.192-.332h9.865a.576.576 0 0 0 .585-.577.578.578 0 0 0-.585-.585H5.826a.574.574 0 0 0-.585.585c0 .324.253.577.585.577z"></path>
              </svg>
              <Link to="/signin">
              <button>
                <svg
                  height="11"
                  viewBox="0 0 10 11"
                  width="10"
                  className="auth-icon">
                  <path d="M5 5.295c-1.296 0-2.385-1.176-2.385-2.678C2.61 1.152 3.716 0 5 0c1.29 0 2.39 1.128 2.39 2.611C7.39 4.12 6.297 5.295 5 5.295zM1.314 11C.337 11 0 10.698 0 10.144c0-1.55 1.929-3.685 5-3.685 3.065 0 5 2.135 5 3.685 0 .554-.337.856-1.314.856z"></path>
                </svg>
                Sign in
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
