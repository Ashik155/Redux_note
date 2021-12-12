//this is action creator file;;;

export const selectSong = (song) =>{
    return{
        type:"SONG_SELECT",
        payload : song
    }
}