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
  console.log(state)
  return state
}

export default connect()(SongList)
