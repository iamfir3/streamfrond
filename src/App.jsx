import { useState } from "react";
import "./App.css";
import Router from "./Router/Router";
import { Songs } from "./Context";
import DataSongs from "./data/data.json";

function App() {
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
