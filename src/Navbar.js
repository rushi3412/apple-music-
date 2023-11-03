import React, { useState }  from "react";
import { Link, useNavigate, } from 'react-router-dom';
import { IconButton, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useMusicPlayer } from './MusicPlayerContext';
import './Navbar.css'
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
                <div 
                className="songicon"
                 onClick={() => 
                 handleSongIconClick("Album Name", currentSongIndex)}>
                  <Link to="/music-player">
                    <button className="song-icon-button">
                      <img src={currentSong.thumbnail} 
                      alt={currentSong.title} 
                      width="32" 
                      height="32" />
                    </button>
                  </Link>
                </div>
                <div className="song-title-name">
                <div className="song-title" style={{ fontSize: '13px', fontFamily: 'Arial, sans-serif', color: 'white' }}>
                <span>{currentSong && currentSong.title}</span>
                </div>
                <div className="artist-name">
                <span>{currentSong && currentSong.artist && currentSong.artist.name}</span>
                </div>
                </div>
                <div class="lcd__badge-platter">PREVIEW</div>
              </>
            ) : (
              <div>No song selected</div>
            )}
          {/* </div>          */}
            <div className="appleicon">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    version="1.1"
                    viewBox="0 0 20 24"
                  >
                    <path
                    fill="black"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      d="M14.5498331,5.79055576 L14.8667346,5.79824073 C15.6519271,5.85753895 17.9167852,6.09354452 19.3663083,8.18658259 C19.2454992,8.2761902 16.6786385,9.72115188 16.7091378,12.7589876 C16.7390911,16.3870553 19.9696682,17.5970079 20,17.6265086 C19.9696682,17.7155832 19.487499,19.3381578 18.3096405,21.0185738 C17.2829229,22.4941235 16.2256873,23.9394547 14.5345925,23.9689736 C12.9038728,23.9984743 12.3599697,23.0246181 10.4887983,23.0246181 C8.61624942,23.0246181 8.01243658,23.9394547 6.47193668,23.9984743 C4.84148068,24.056773 3.60409403,22.4336653 2.57735781,20.9595512 C0.463094554,17.9799264 -1.13731196,12.5531248 1.03685791,8.89465382 C2.09390733,7.06587112 4.02671959,5.91602544 6.10974825,5.88615523 C7.71015477,5.85753895 9.18984525,6.91939744 10.1566562,6.91939744 C11.1229398,6.91939744 12.8433271,5.68057112 14.8667346,5.79824073 Z M14.882569,-1.50990331e-14 C15.034318,1.42063421 14.4589476,2.81085604 13.6110595,3.84623659 C12.7325883,4.85257077 11.3405768,5.6504798 9.94727779,5.53248307 C9.76560653,4.17140151 10.4624841,2.72297789 11.2498451,1.83563692 C12.1267465,0.799444643 13.6413789,0.0602553239 14.882569,-1.50990331e-14 Z"
                    ></path>
                  </svg>
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
