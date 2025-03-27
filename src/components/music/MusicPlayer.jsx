import { useState, useEffect } from 'react';

export default function MusicPlayer() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch('BQBZJkaADcjogoYuLX_9neOtlw-jHR2BhV5Q2syNmdmSQwW95IzA1ysRPROlZWS7yzzpg5dXG7PonVbFNre-cNAWg9lD3pHE5espY4WhLltLQuTKAhXfgXZK63O7ZX0tHT-yrgriflI'); // Your API endpoint
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setTracks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMusic();
  }, []);

  if (loading) return <div>Loading music...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="music-container">
      {tracks.map(track => (
        <div key={track.id} className="music-track">
          <img 
            src={track.artwork_url} 
            alt={track.title} 
            width={200}
            height={200}
          />
          <h3>{track.title}</h3>
          <p>Artist: {track.artist}</p>
          <audio controls>
            <source src={track.audio_url} type="audio/mpeg" />
            Your browser does not support audio playback.
          </audio>
        </div>
      ))}
    </div>
  );
}