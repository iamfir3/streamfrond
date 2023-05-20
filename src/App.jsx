import { useState, useEffect } from "react";
import "./App.css";
import Router from "./Router/Router";
import { Songs } from "./Context";
import Music from "./apis/Music";

function App() {
  const [DataSongs, setDataSongs] = useState([]);
  useEffect(() => {
    const fetchSongs = async () => {
      const res = await Music.getAll();
      setDataSongs(res);
    };
    fetchSongs();
  }, []);
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
    setSong(song);
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Router />
      </Songs.Provider>
    </div>
  );
}

export default App;
