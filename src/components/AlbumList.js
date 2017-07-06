import React, { Component } from 'react'
import { Text, View } from 'react-native'

class AlbumList extends Component {
  state = { albums: [] }
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(responseData => this.setState({ albums: responseData }))
  }
  render() {
    console.log(this.state.albums)
    return (
      <View>
        <Text>Album List</Text>
      </View>
    )
  }
}

export default AlbumList
