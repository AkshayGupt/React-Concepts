import React, { useState } from 'react'
import { usePlaylist, useAddSong } from './PlaylistContext'
const Home = () => {
    const [songTitle, setSongTitle] = useState()
    const playlist = usePlaylist();
    const insertSong = useAddSong();
    /*
        Here, usePlaylist & useAddSong is used as a custom hook which is not mandatory but 
        makes it more abstract and simple.
    */
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Playlist</h1>
            <div>
                <input
                    type={"text"}
                    placeholder={"Add song title"}
                    value={songTitle}
                    onChange={(e) => setSongTitle(e.target.value)}
                />
                <button
                    onClick={() => songTitle && insertSong(songTitle)}
                >Add</button>
                <section>
                    {playlist?.map(song => {
                        return <pre>{song}</pre>
                    })}
                </section>
            </div>
        </div>
    )
}

export default Home