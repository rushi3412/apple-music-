import React, { useState, useEffect, useRef } from 'react';
import { IconButton, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { PlayArrow, Pause, SkipPrevious,  SkipNext, Repeat, Shuffle } from '@mui/icons-material';
import { useMusicPlayer } from './MusicPlayerContext';

const cardStyle = {
  backgroundColor: '#1d1c1c',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  textAlign: 'center',
  marginTop: '53px',
};

const mediaStyle = {
  width: '450px', // Adjust the width as needed
  height: '400px', // Adjust the height as needed
  borderRadius: '5px',
};

const iconStyle = {
  fontSize: '36px', // Adjust the icon size as needed
  color: 'white', // Change the icon color to white
};

const textStyle = {
  fontSize: '24px', // Adjust the font size as needed
  color: 'white',  // Change the text color to white
};



function MusicPlayerPage() {
  const { currentSong, songs, indexSong, setIndexSong, isPlaying, setIsPlaying } = useMusicPlayer();
  // const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);


  const audioRef = useRef(new Audio(currentSong[indexSong] ? currentSong[indexSong].audio_url : null));

  // Use this effect to handle changes in the current song
  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.audio_url;
      if (isPlaying) {
        audioRef.current.play();
      }
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  const handlePlayPause = () => {
    if (currentSong) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePrev = () => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id);
    if (currentIndex > 0) {
      setCurrentSong(songs[currentIndex - 1]);
    } else if (isShuffling) {
      let randomIndex = Math.floor(Math.random() * songs.length);
      setCurrentSong(songs[randomIndex]);
    }
  };

  const handleNext = () => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id);
    if (currentIndex < songs.length - 1) {
      setCurrentSong(songs[currentIndex + 1]);
    } else if (isShuffling) {
      let randomIndex = Math.floor(Math.random() * songs.length);
      setCurrentSong(songs[randomIndex]);
    }
  };

  const handleLoop = () => {
    setIsLooping(!isLooping);
    audioRef.current.loop = isLooping; // This will enable or disable looping
  };

  const handleShuffle = () => {
    setIsShuffling(!isShuffling);
    if (isShuffling) {
      let randomIndex = Math.floor(Math.random() * songs.length);
      setCurrentSong(songs[randomIndex]);
    }
  };

  return (
    
    <Card className="music-player" style={cardStyle}>
      <CardMedia
        component="img"
        alt={currentSong ? currentSong.title : 'No song selected'}
        src={currentSong ? currentSong.thumbnail : 'placeholder_image_url'}
        style={mediaStyle}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom style={textStyle}>
          {currentSong ? `${currentSong.title} - ${currentSong.artists ? currentSong.artists.map(artist => artist.name).join(', ') : 'Unknown Artist'}` : 'No song selected'}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={textStyle}>
          Mood: {currentSong ? currentSong.mood : 'N/A'}
        </Typography>
        <IconButton onClick={handlePrev} style={iconStyle}>
          <SkipPrevious />
        </IconButton>
        <IconButton onClick={handlePlayPause} style={iconStyle}>
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <IconButton onClick={handleNext} style={iconStyle}>
           <SkipNext />
      </IconButton>
        <IconButton onClick={handleLoop} style={iconStyle}>
          <Repeat color={isLooping ? 'primary' : 'inherit'} />
        </IconButton>
        <IconButton onClick={handleShuffle} style={iconStyle}>
          <Shuffle color={isShuffling ? 'primary' : 'inherit'} />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default MusicPlayerPage;
