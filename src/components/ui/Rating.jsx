import { Star } from "lucide-react";

function Rating({ value = 0, max = 10, size = 18, showNumber = true }) {
  const roundedValue = Math.round(value * 10) / 10;

  const fullStars = Math.floor(roundedValue);
  const hasHalfStar = roundedValue - fullStars >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <Star size={size} className="fill-yellow-400/50 text-yellow-400" />
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-gray-400" />
      ))}

      {showNumber && (
        <span className="text-sm text-white ml-2">
          {roundedValue} / {max}
        </span>
      )}
    </div>
  );
}

export default Rating;
