import React, { Component } from 'react'
import {connect} from 'react-redux'

export class SongList extends Component {
  render() {
    return (
      <div>
        Songlist
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  
  return {songs:state.songs}
}

export default connect(mapStateToProps)(SongList)
