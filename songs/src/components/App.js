import React from "react";
import SongList from "./SongList";
import SongDetail from "../components/SongDetail"


const App = ()=>{
    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide ">
                <SongList></SongList>
                </div>
                <div className="column five wide ">
                <SongDetail/>
                </div>
            </div>
         
        </div>
    )
}
export default App