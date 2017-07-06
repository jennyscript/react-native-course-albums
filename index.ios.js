import React from 'react'
import { AppRegistry, View } from 'react-native'

import AlbumList from './src/components/AlbumList'
import Header from './src/components/Header'

const App = () =>
  <View>
    <Header>Albums</Header>
    <AlbumList />
  </View>

AppRegistry.registerComponent('albums', () => App)
