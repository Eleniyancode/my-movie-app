function MovieModal({ movie, onClick }) {
  return (
    <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-blue-primary rounded-xl p-6 w-80 relative">
        <h2 className="text-lg font-semibold mb-4 text-white">{movie.title}</h2>

        <div className="flex flex-col gap-3">
          {/* Watch Trailer */}
          <button
            className="bg-red-600 text-white py-2 rounded-lg transition duration-300 cursor-pointer hover:bg-red-500"
            onClick={() => {
              // open trailer modal or route
              console.log("Play trailer");
              onClick();
            }}
          >
            Watch Trailer
          </button>

          {/* View Details */}
          <button className="bg-blue-tertiary hover:bg-gray-400 transition duration-300 text-white py-2 rounded-lg text-center cursor-pointer">
            View Movie Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
