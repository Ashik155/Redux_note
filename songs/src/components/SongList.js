import React from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions"


class SongList extends React.Component{


    //helper functiin to produce the jSx of list of SOngs 

      renderThelist (){
            return this.props.songs.map(song=>{
                return (
                    <div className="item" key={song.title}>
                        <div className="right floated content">
                            <button className="ui button primary" onClick={()=> this.props.selectSong(song)}>
                                Select 
                            </button>
                        </div>
                        <div className="content ">
                            {song.title}
                        </div>

                    </div>
                )
            })



      }

    
    render(){
        console.log("rendering ", this.props)
        return(
            <div className="ui divided list"> {this.renderThelist()} </div>
        )
    }
}

const mapStateToProps = (stateOfApp) =>{
    console.log("Current State", stateOfApp)
    return {songs : stateOfApp.songs };
}

export default connect(mapStateToProps,{selectSong })(SongList);