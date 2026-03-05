import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase/firebase";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { BookmarkContext } from "./BookmarkContext";

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [loadingBookmark, setLoadingBookmark] = useState(false);

  // Load bookmarks when user logs in
  // useEffect(() => {
  //   if (!auth.currentUser) return;

  //   async function fetchBookmarks() {
  //     const userId = auth.currentUser.uid;
  //     const snapshot = await getDocs(
  //       collection(db, "users", userId, "bookmarks"),
  //     );
  //     const movies = snapshot.docs.map((doc) => doc.data());
  //     setBookmarks(movies);
  //   }

  //   fetchBookmarks();
  // }, [auth.currentUser]);

  // Load bookmarks for signed-in user
  const loadBookmarks = async (userId) => {
    if (!userId) return;
    setLoadingBookmark(true);
    try {
      const moviesSnapshot = await getDocs(
        collection(db, "bookmarks", userId, "movies"),
      );
      const movies = moviesSnapshot.docs.map((doc) => doc.data());
      setBookmarks(movies);
    } catch (err) {
      console.error("Error loading bookmarks:", err);
    }
    setLoadingBookmark(false);
  };

  async function addBookmark(movie) {
    if (!auth.currentUser) return;
    const userId = auth.currentUser.uid;

    try {
      setLoadingBookmark(true);
      await setDoc(
        doc(db, "users", userId, "bookmarks", movie.id.toString()),
        movie,
      );
      setBookmarks((prev) => [...prev, movie]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingBookmark(false);
    }
  }

  async function removeBookmark(movieId) {
    if (!auth.currentUser) return;
    const userId = auth.currentUser.uid;

    try {
      setLoadingBookmark(true);
      await deleteDoc(
        doc(db, "users", userId, "bookmarks", movieId.toString()),
      );
      setBookmarks((prev) => prev.filter((m) => m.id !== movieId));
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingBookmark(false);
    }
  }

  const isBookmarked = (movieId) => bookmarks.some((m) => m.id === movieId);

  // Listen to auth changes and load bookmarks
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) loadBookmarks(user.uid);
      else setBookmarks([]);
    });
    return unsubscribe;
  }, []);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        loadingBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
