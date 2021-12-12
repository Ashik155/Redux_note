import React from "react";
import {connect} from "react-redux";

class SongDetail extends React.Component{
    render(){
        if(this.props.selectedSong == null){
            return(
                <div> Choose Song to see details </div>
            )
        }
        return (
            <div className="ui card"> 
                    <div className="ui header">
                      Title :   {this.props.selectedSong.title}
                    </div>
                    <div className="ui content ">
                      Durations :  {this.props.selectedSong.durations}
                    </div>
                 </div>
        )
    }
}

const maptToState = (state)=>{
    return ({selectedSong:state.selectedSong})
}
export default connect(maptToState)(SongDetail);