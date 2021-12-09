import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useDatabase(dbVideos) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [more, setMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      // database related works
      const db = getDatabase();
      const videosRef = ref(db, dbVideos);
      const videoQuery = query(videosRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchVideos();
  }, [dbVideos]);

  return {
    loading,
    error,
    videos,
    more,
  };
}
