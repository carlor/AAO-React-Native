/**
 * All About Olaf
 * iOS Map page
 */

import React from 'react'
import {
  StyleSheet,
  View,
  WebView,
} from 'react-native'

import mapInfo from '../../data/map.json'

export default class OlafMapView extends React.Component {
  // Render a given scene
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: mapInfo.url}}
          startInLoadingState={true}
          style={styles.container}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})
