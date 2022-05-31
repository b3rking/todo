import React from "react";
import "./song.css";
const Song = (props) => {
    return (
        <div className="song-card">
            <img
                src={`https://daflx.com/storage/${props.cover}`}
                alt={`cover pic of ${props.title}`}
                className="image"
            />
            <div className="side-data">
                <p>
                    <span className="title">{props.title}</span> - {" "}
                    <span className="artist">{props.artist}</span>
                </p>
            </div>
            <div className="">
                <audio src={`https://daflx.com/storage/${props.song}`} controls ></audio>
            </div>
        </div>
    );
};

export default Song;
