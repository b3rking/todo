import React, { useState } from "react";
import ListSongs from "./components/ListSongs";
import './App.css';

function App() {

    const [songs, setSongs] = useState([]);

    const fetchSongsHandler = async () => {
        const res = await fetch('https://daflx.com/api/tracks')
        const data = await res.json()
        setSongs(data.data.tracks);
    }

    return (
        <div className="App">
            <button onClick={fetchSongsHandler}>fetch songs</button>
            <ListSongs songs={songs}/>
        </div>
    );
}

export default App;
