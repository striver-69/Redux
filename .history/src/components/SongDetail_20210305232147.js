import React from 'react'
import {connect} from 'react-redux'

function SongDetail(props) {
  return (
    <div>
      Song Details
    </div>
  )
}

const mapStateToProps=(state)=>{
  return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)