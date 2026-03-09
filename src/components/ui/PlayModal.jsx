import { FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function PlayModal({ isOpen, onClose, onPlay, movie, mediaType }) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <NavLink to={`/${mediaType}/${movie.id}`}>
        <button
          className="flex items-center gap-3 bg-white/20 backdrop-blur-md 
                   text-white px-6 py-3 rounded-full cursor-pointer
                   hover:bg-white/30 transition"
          onClick={(e) => {
            e.stopPropagation();
            onPlay?.();
          }}
        >
          <FaPlay className="text-sm" />
          <span className="font-semibold">Play</span>
        </button>
      </NavLink>
    </div>
  );
}

export default PlayModal;
