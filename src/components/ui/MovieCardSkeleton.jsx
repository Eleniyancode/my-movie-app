export default function MovieCardSkeleton() {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md animate-pulse ">
      {/* Image placeholder */}
      <div className="h-72 bg-gray-700 w-full shimmer" />

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-700 rounded w-1/2" />
        <div className="h-3 bg-gray-700 rounded w-1/3" />
      </div>
    </div>
  );
}
