import React from 'react'
import { Image, Linking, Text, View } from 'react-native'

import Button from './Button'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, image, title, artist, url } = album
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    height: 300,
    width: null,
    flex: 1
  }
}

export default AlbumDetail
