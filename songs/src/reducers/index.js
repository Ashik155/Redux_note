
import { combineReducers } from "redux";






 const songReducer = () =>{
    return [
        {title : "Brown Mnunde ", durations : '1:02'},
        {title : "Insane ", durations : '3:22'},
        {title : "When I grow Up ", durations : '2:04'},  
        {title : "Mast Magan ", durations : '12:12'},
        {title : "Tere Naam ", durations : '7:21'},
        {title : "Appple Ringtone Mix ", durations : '0:03'}

    ]
}

 const selectedSongReducer = (selectedSong=null, action) =>{
    if(action.type ===  "SONG_SELECT"){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers ({
    songs : songReducer,
    selectedSong : selectedSongReducer
})