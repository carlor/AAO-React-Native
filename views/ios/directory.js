/**
 * All About Olaf
 * iOS Directory page
 */
'use strict'

// React native
const React = require('react')
const RN = require('react-native')
const NavigatorScreen = require('./components/navigator-screen')
const queryStalkernet = require('../../lib/stalkernet')

const {
  StyleSheet,
  View,
  Text,
} = RN

class DirectoryView extends React.Component {
  render() {
    return <NavigatorScreen
      {...this.props}
      title="Directory"
      renderScene={this.renderScene.bind(this)}
    />
  }

  // Render a given scene
  renderScene() {
    return (
      <View style={styles.container}>
        <Text>Directory</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

module.exports = DirectoryView
