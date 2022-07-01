import React, { useContext, useState } from 'react';
const PlaylistContext = React.createContext();
const PlaylistAddSongContext = React.createContext();

//usePlaylist is used as a custom hook on the child component
export const usePlaylist = () => {
    return useContext(PlaylistContext);
}

//useAddSong is used as a custom hook on the child component
export const useAddSong = () => {
    return useContext(PlaylistAddSongContext);
}

export const PlaylistProvider = ({ children }) => {

    const [playlist, setPlaylist] = useState([]);

    const addSong = (song) => {
        setPlaylist([...playlist, song]);
    }

    return (
        <PlaylistContext.Provider value={playlist}>
            <PlaylistAddSongContext.Provider value={addSong}>
                {children}
            </PlaylistAddSongContext.Provider>
        </PlaylistContext.Provider>
    )
}
