function Spinner({ size = "md", fullScreen = false }) {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-4",
    lg: "w-16 h-16 border-4",
  };

  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "fixed inset-0 bg-black/60 z-50" : ""
      }`}
    >
      <div
        className={`
          ${sizeClasses[size]}
          border-gray-300
          border-t-red-600
          rounded-full
          animate-spin
        `}
      />
    </div>
  );
}

export default Spinner;
