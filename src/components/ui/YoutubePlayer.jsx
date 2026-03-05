import React, { useRef, useState } from "react";
import YouTube from "react-youtube";

export default function YouTubePlayer({ videoId }) {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const opts = {
    width: "100%",
    height: "360",
    playerVars: {
      autoplay: 1, // auto play
      controls: 0, // hide default YouTube controls
      mute: 1, // muted on start (required for autoplay)
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
    event.target.playVideo();
    event.target.mute();
    setIsPlaying(true);
    setIsMuted(true);
  };

  const handlePlayPause = () => {
    if (!playerRef.current) return;

    if (isPlaying) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();

    setIsPlaying(!isPlaying);
  };

  const handleReplay = () => {
    if (!playerRef.current) return;

    playerRef.current.seekTo(0);
    playerRef.current.playVideo();
    setIsPlaying(true);
  };

  const handleMuteToggle = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }

    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />

      {/* Custom Controls Overlay */}
      <div className="absolute bottom-4 left-4 flex gap-3 z-10">
        <button
          onClick={handlePlayPause}
          className="bg-black/70 text-white px-4 py-2 rounded cursor-pointer hover:text-red-primary transition duration-300"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={handleReplay}
          className="bg-black/70 text-white px-4 py-2 rounded cursor-pointer hover:text-red-primary transition  duration-200"
        >
          Replay
        </button>

        <button
          onClick={handleMuteToggle}
          className="bg-black/70 text-white px-4 py-2 rounded cursor-pointer hover:text-red-primary transition  duration-200"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
}
