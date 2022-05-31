import React from "react";
import Song from "./Song";
import "./list-song.css";

function ListSongs(props) {
    return (
        <div className="list-card">
            {props.songs.map((song) => (
                <Song
                    title={song.title}
                    artist={song.artist}
                    cover={song.cover}
                    song={song.song_url}
                />
            ))}
        </div>
    );
}

export default ListSongs;
