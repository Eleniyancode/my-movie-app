import { useContext } from "react";
import { BookmarkContext } from "./BookmarkContext";

// Custom hook
export function useBookmark() {
  return useContext(BookmarkContext);
}
