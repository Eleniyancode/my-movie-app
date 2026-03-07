// import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { BookmarkContext } from "./BookmarkContext";
import { useEffect, useState } from "react";

export function BookmarkProvider({ children }) {
  // const [bookmarks, setBookmarks] = useState([]);
  // const [loadingBookmark, setLoadingBookmark] = useState(false);

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
  const [bookmarks, setBookmarks] = useState([]);

  async function getBookmarks(userId) {
    const querySnapshot = await getDocs(
      collection(db, "bookmarks", userId, "movies"),
    );

    querySnapshot.forEach((doc) => {
      setBookmarks((prev) => [...prev, { id: doc.id, ...doc.data() }]);
      // bookmarks.push({
      //   id: doc.id,
      //   ...doc.data(),
      // });
    });

    return bookmarks;
  }

  async function addBookmark(userId, movie) {
    await setDoc(
      doc(db, "bookmarks", userId, "movies", movie.id.toString()),
      movie,
    );

    setBookmarks((prev) => [...prev, movie]);
    console.log("added bookmark");
    console.log(bookmarks);
  }

  async function removeBookmark(userId, movieId) {
    await deleteDoc(doc(db, "bookmarks", userId, "movies", movieId.toString()));
    setBookmarks((prev) => prev.filter((item) => item.id !== movieId));
    console.log("remove bookmark");
    console.log(bookmarks);
  }

  const isBookmarked = (movieId) => bookmarks.some((m) => m.id === movieId);

  // Listen to auth changes and load bookmarks
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) getBookmarks(user.uid);
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
        getBookmarks,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
